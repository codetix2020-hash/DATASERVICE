export function PainPointsSection() {
  const items = [
    {
      stat: '62%',
      title: 'Emails inválidos',
      desc: 'El porcentaje medio de contactos inútiles en bases sin mantener.',
    },
    {
      stat: '47€',
      title: 'Dinero perdido al mes',
      desc: 'Lo que sueles gastar en envíos que nunca llegan a buzón válido.',
    },
    {
      stat: '3x',
      title: 'Más conversiones',
      desc: 'El multiplicador típico al segmentar solo contactos verificados.',
    },
  ]

  return (
    <section
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-6xl mx-auto"
      aria-labelledby="pain-heading"
    >
      <h2
        id="pain-heading"
        className="text-2xl sm:text-3xl font-bold text-white text-center mb-12"
      >
        ¿Reconoces esto?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <article
            key={item.title}
            className="border border-neutral-800 rounded-lg p-6 bg-[#0a0a0a]"
          >
            <p
              className="text-[48px] font-bold text-[#00ff88] leading-none mb-4 tabular-nums"
              aria-hidden
            >
              {item.stat}
            </p>
            <h3 className="text-[20px] font-bold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-[#d1d5db] leading-relaxed">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
