'use client'

import { useState, type ReactNode } from 'react'
import { Loader2 } from 'lucide-react'

export type CheckoutButtonVariant = 'primary' | 'secondary' | 'white' | 'outline'
export type CheckoutButtonSize = 'sm' | 'md' | 'lg'

interface CheckoutButtonProps {
  priceId?: string
  mode?: 'payment' | 'subscription'
  variant?: CheckoutButtonVariant
  size?: CheckoutButtonSize
  className?: string
  children?: ReactNode
  disabled?: boolean
  'aria-label'?: string
}

export function CheckoutButton({
  priceId,
  mode = 'payment',
  variant = 'primary',
  size = 'md',
  className = '',
  children = 'Comenzar ahora',
  disabled = false,
  'aria-label': ariaLabel,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleClick() {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: priceId || '', mode }),
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

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-red-600 hover:bg-red-700 text-white',
    white: 'bg-white hover:bg-neutral-100 text-neutral-900',
    outline: 'border-2 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white',
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={handleClick}
        disabled={disabled || loading || !priceId}
        className={`
          rounded-lg font-semibold
          transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          disabled:opacity-50 disabled:cursor-not-allowed
          inline-flex items-center justify-center gap-2
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${className}
        `}
        aria-busy={loading}
        aria-label={ariaLabel}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Procesando…
          </>
        ) : (
          children
        )}
      </button>
      {error ? (
        <p className="text-sm text-red-600 dark:text-red-400 text-center max-w-md" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
