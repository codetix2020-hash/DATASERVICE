import { CheckoutButton } from '@/components/CheckoutButton'

export function CTASection({
  priceId,
  slotsAvailable,
}: {
  priceId: string
  slotsAvailable: boolean
}) {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#00ff88]"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          id="cta-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-10 leading-tight"
        >
          ¿Listo para recuperar el control de tu base de datos?
        </h2>

        <div className="flex justify-center mb-8">
          <CheckoutButton
            priceId={priceId}
            variant="black"
            disabled={!slotsAvailable}
            aria-label="Empezar limpieza de base de datos por 197 euros"
          >
            Empezar ahora — 197€
          </CheckoutButton>
        </div>

        <p className="text-black/80 text-sm sm:text-base">
          Entrega en 48 horas. Garantía 30 días. Pago seguro con Stripe.
        </p>
      </div>
    </section>
  )
}
