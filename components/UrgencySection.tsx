import { WEEKLY_SLOT_TOTAL } from '@/lib/slots'
import { CheckoutButton } from '@/components/CheckoutButton'

export function UrgencySection({
  remaining,
  priceId,
}: {
  remaining: number
  priceId: string
}) {
  const filled = Math.min(WEEKLY_SLOT_TOTAL, Math.max(0, remaining))

  return (
    <section
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-[#006b3f]"
      aria-labelledby="urgency-heading"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2
          id="urgency-heading"
          className="text-[24px] font-bold text-white mb-8 leading-tight"
        >
          Solo 5 plazas disponibles esta semana
        </h2>

        <div className="mb-4">
          <p className="text-white text-sm mb-3">Plazas restantes</p>
          <div
            className="flex gap-1 justify-center max-w-xs mx-auto"
            role="img"
            aria-label={`${remaining} plazas disponibles de ${WEEKLY_SLOT_TOTAL}`}
          >
            {Array.from({ length: WEEKLY_SLOT_TOTAL }).map((_, i) => (
              <span
                key={i}
                className={`h-3 flex-1 rounded-sm ${
                  i < filled ? 'bg-[#00ff88]' : 'bg-white/25'
                }`}
              />
            ))}
          </div>
          <p className="text-white font-semibold mt-3 tabular-nums">
            {remaining} disponibles
          </p>
        </div>

        <p className="text-white/95 text-sm sm:text-base mb-10 leading-relaxed">
          Cada semana limpiamos exactamente 5 bases de datos. No aceptamos más.
        </p>

        <CheckoutButton
          priceId={priceId}
          variant="white"
          disabled={remaining <= 0}
          aria-label="Reservar plaza de limpieza por 197 euros"
        >
          Reservar mi plaza — 197€
        </CheckoutButton>
      </div>
    </section>
  )
}
