const items = [
  'Eliminación de duplicados exactos y similares',
  'Validación de emails activos en tiempo real',
  'Normalización de nombres teléfonos y campos',
  'Segmentación automática por calidad de contacto',
  'Informe PDF detallado con antes y después',
]

export function SolutionSection() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-3xl mx-auto"
      aria-labelledby="solution-heading"
    >
      <h2
        id="solution-heading"
        className="text-2xl sm:text-3xl font-bold text-white text-center mb-10"
      >
        Qué incluye la limpieza
      </h2>
      <ul className="space-y-3" role="list">
        {items.map((text) => (
          <li key={text} className="flex gap-3 items-start">
            <span
              className="shrink-0 w-6 h-6 flex items-center justify-center text-[#00ff88] text-2xl leading-none"
              aria-hidden
            >
              ✓
            </span>
            <span className="text-base text-white leading-relaxed pt-0.5">
              {text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
