'use client'

import { CheckoutButton } from '@/components/CheckoutButton'

export function SuccessUpsell({
  subscriptionPriceId,
}: {
  subscriptionPriceId: string
}) {
  return (
    <div className="bg-[#1a1a1a] border-2 border-[#00ff88] p-6 sm:p-8 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-white">
        Protege tu base de datos para siempre
      </h3>
      <p className="text-[#d1d5db] mb-4 leading-relaxed">
        Tu base estará limpia hoy. Pero en 90 días volverá a ensuciarse sin
        mantenimiento automático.
      </p>
      <p className="text-2xl font-bold text-[#00ff88] mb-6">
        Mantenimiento recurrente: 97€/mes
      </p>
      <div className="flex justify-center">
        <CheckoutButton
          priceId={subscriptionPriceId}
          mode="subscription"
          variant="primary"
          disabled={!subscriptionPriceId}
          aria-label="Suscribirse al mantenimiento recurrente por 97 euros al mes"
        >
          Proteger mi base — 97€/mes
        </CheckoutButton>
      </div>
      <p className="text-sm text-[#9ca3af] mt-6">
        Cancela cuando quieras. Sin compromiso.
      </p>
    </div>
  )
}
