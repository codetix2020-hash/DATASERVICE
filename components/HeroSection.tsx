import { CheckoutButton } from '@/components/CheckoutButton'

export function HeroSection({
  priceId,
  slotsAvailable,
}: {
  priceId: string
  slotsAvailable: boolean
}) {
  return (
    <header className="relative min-h-[90vh] flex flex-col px-4 sm:px-6 lg:px-8 pt-6 pb-16 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-12 sm:mb-16">
        <span className="text-white text-sm sm:text-base font-semibold tracking-tight">
          CodeTix
        </span>
        <span className="sr-only">Barcelona</span>
      </div>

      <div className="flex-1 flex flex-col justify-center text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Tu base de datos está destruyendo tus ventas. La limpiamos en 48 horas.
        </h1>
        <p className="text-[#d1d5db] text-lg sm:text-xl mb-10 leading-relaxed">
          Emails inválidos, duplicados y datos corruptos que hacen fallar tus
          campañas. Los eliminamos completamente.
        </p>

        <div className="flex justify-center mb-6">
          <CheckoutButton
            priceId={priceId}
            variant="green"
            disabled={!slotsAvailable}
            aria-label="Limpiar base de datos ahora por 197 euros con pago seguro"
          >
            🟢 Limpiar ahora por 197€
          </CheckoutButton>
        </div>

        <p className="text-[#d1d5db] text-sm sm:text-base">
          Pago seguro con Stripe. Entrega en 48h garantizada.
        </p>
      </div>
    </header>
  )
}
