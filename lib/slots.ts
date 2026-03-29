import type Stripe from 'stripe'
import { getStripe } from './stripe'

export const WEEKLY_SLOT_TOTAL = 5

/** Lunes 00:00:00 UTC de la semana actual */
export function getUtcMondayStartSeconds(now: Date = new Date()): number {
  const d = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  )
  const day = d.getUTCDay()
  const daysSinceMonday = day === 0 ? 6 : day - 1
  d.setUTCDate(d.getUTCDate() - daysSinceMonday)
  d.setUTCHours(0, 0, 0, 0)
  return Math.floor(d.getTime() / 1000)
}

function isDataRescuePayment(session: Stripe.Checkout.Session): boolean {
  return (
    session.payment_status === 'paid' &&
    session.mode === 'payment' &&
    session.metadata?.productType === 'data-rescue-service'
  )
}

/**
 * Cuenta pagos completados esta semana (UTC) para el producto principal.
 * Usa la API de Stripe (servidor); no depende del reloj del cliente.
 */
export async function getRemainingSlotsThisWeek(): Promise<number> {
  const stripe = getStripe()
  const weekStart = getUtcMondayStartSeconds()
  let used = 0
  let startingAfter: string | undefined

  for (;;) {
    const page = await stripe.checkout.sessions.list({
      created: { gte: weekStart },
      limit: 100,
      starting_after: startingAfter,
    })

    for (const session of page.data) {
      if (isDataRescuePayment(session)) {
        used += 1
      }
    }

    if (!page.has_more || page.data.length === 0) {
      break
    }

    const last = page.data[page.data.length - 1]
    startingAfter = last.id
  }

  return Math.max(0, WEEKLY_SLOT_TOTAL - used)
}
