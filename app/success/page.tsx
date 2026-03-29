import { SuccessUpsell } from '@/components/SuccessUpsell'
import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Pago recibido — AI Data Rescue',
  description:
    'Tu pago se ha procesado. Próximos pasos para enviar tu base de datos.',
}

export default function SuccessPage() {
  const subscriptionPriceId =
    process.env.NEXT_PUBLIC_STRIPE_PRICE_SUBSCRIPTION ?? ''

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4">
      <div className="max-w-2xl mx-auto text-center py-16 sm:py-20">
        <p className="text-sm text-[#9ca3af] mb-6 text-left">
          <Link
            href="/"
            className="underline underline-offset-4 hover:text-[#d1d5db] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff88] rounded"
          >
            ← Volver al inicio
          </Link>
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">¡Pago recibido! ✓</h1>
        <p className="text-lg sm:text-xl text-[#d1d5db] mb-10">
          Tu base de datos será limpiada en las próximas 48 horas.
        </p>
        <div className="bg-[#1a1a1a] border border-neutral-700 p-6 sm:p-8 rounded-lg mb-10 text-left">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
            Próximos pasos
          </h2>
          <ol className="space-y-4 list-decimal list-inside text-[#d1d5db]">
            <li>
              Recibirás un email con instrucciones para subir tu base de datos
            </li>
            <li>Sube tu archivo Excel/CSV</li>
            <li>Nuestro sistema procesará todo automáticamente</li>
            <li>Recibirás tu base limpia en 48 horas máximo</li>
          </ol>
        </div>

        <SuccessUpsell subscriptionPriceId={subscriptionPriceId} />
      </div>
    </div>
  )
}
