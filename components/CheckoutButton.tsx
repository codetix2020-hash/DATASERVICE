'use client'

import { useState, type ReactNode } from 'react'

export type CheckoutButtonVariant = 'green' | 'white' | 'black'

export function CheckoutButton({
  priceId,
  mode = 'payment',
  variant,
  className,
  children,
  disabled,
  'aria-label': ariaLabel,
}: {
  priceId: string
  mode?: 'payment' | 'subscription'
  variant: CheckoutButtonVariant
  className?: string
  children: ReactNode
  disabled?: boolean
  'aria-label'?: string
}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleClick() {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, mode }),
      })
      const data = (await res.json()) as { url?: string; error?: string }
      if (!res.ok) {
        setError(data.error ?? 'Error al iniciar el pago')
        return
      }
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      setError('Error de red. Inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const base =
    variant === 'green'
      ? 'bg-[#00ff88] text-black font-bold text-[18px] leading-tight py-4 px-8 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff88] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]'
      : variant === 'white'
        ? 'bg-white text-black font-bold text-[16px] leading-tight py-3 px-8 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#006b3f]'
        : 'bg-black text-[#00ff88] font-bold text-[18px] leading-tight py-4 px-10 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#00ff88]'

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={disabled || loading || !priceId}
        className={`${base} disabled:opacity-50 disabled:cursor-not-allowed ${className ?? ''}`}
        aria-busy={loading}
        aria-label={ariaLabel}
      >
        {loading ? 'Redirigiendo a Stripe…' : children}
      </button>
      {error ? (
        <p className="text-sm text-red-400 text-center max-w-md" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
