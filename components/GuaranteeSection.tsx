export function GuaranteeSection() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      aria-labelledby="guarantee-heading"
    >
      <div className="max-w-[600px] mx-auto border-2 border-[#00ff88] bg-[#1a1a1a] rounded-lg p-8 sm:p-10">
        <h2
          id="guarantee-heading"
          className="text-xl sm:text-2xl font-bold text-white text-center mb-6"
        >
          Garantía total de 30 días
        </h2>
        <p className="text-[#d1d5db] text-center leading-relaxed mb-4">
          Si después de la limpieza no mejoran tus métricas de email marketing
          en 30 días, te devolvemos el dinero completo.
        </p>
        <p className="text-[#d1d5db] text-center leading-relaxed">
          Sin preguntas, sin formularios, sin burocracia.
        </p>
      </div>
    </section>
  )
}
