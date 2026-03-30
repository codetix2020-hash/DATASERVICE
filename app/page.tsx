import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Limpieza de Base de Datos Ecommerce — 197€',
  description: 'Eliminamos emails inválidos, duplicados y datos corruptos de tu ecommerce. Entrega en 48 horas, garantía 30 días, pago seguro con Stripe.',
  keywords: 'limpieza base datos, email validation, ecommerce',
  openGraph: {
    title: 'Limpieza de Base de Datos Ecommerce — 197€',
    description: 'Base de datos sucia = dinero perdido. La limpiamos en 48 horas.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Limpieza de Base de Datos Ecommerce — 197€',
    description: 'Base de datos sucia = dinero perdido. La limpiamos en 48 horas.',
  },
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Tu base de datos está destruyendo tus ventas.
            <br />
            La limpiamos en 48 horas.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Emails inválidos, duplicados y datos corruptos que hacen fallar tus campañas. Los eliminamos completamente.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://buy.stripe.com/test_9AQ8Ak7H64yy08wfYY"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-300 transition"
            >
              🟢 Limpiar ahora por 197€
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Pago seguro con Stripe. Entrega en 48h garantizada.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/50">
            <p className="text-4xl font-bold text-green-400 mb-2">62%</p>
            <h3 className="text-xl font-bold mb-2">Emails inválidos</h3>
            <p className="text-gray-400">El porcentaje medio de contactos inútiles en bases sin mantener.</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/50">
            <p className="text-4xl font-bold text-green-400 mb-2">47€</p>
            <h3 className="text-xl font-bold mb-2">Dinero perdido/mes</h3>
            <p className="text-gray-400">Lo que gastas en envíos que nunca llegan a buzón válido.</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/50">
            <p className="text-4xl font-bold text-green-400 mb-2">3x</p>
            <h3 className="text-xl font-bold mb-2">Más conversiones</h3>
            <p className="text-gray-400">El multiplicador al segmentar solo contactos verificados.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Qué incluye la limpieza</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-400 text-2xl">✓</span>
            <span className="text-lg">Eliminación de duplicados exactos y similares</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-400 text-2xl">✓</span>
            <span className="text-lg">Validación de emails activos en tiempo real</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-400 text-2xl">✓</span>
            <span className="text-lg">Normalización de nombres, teléfonos y campos</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-400 text-2xl">✓</span>
            <span className="text-lg">Segmentación automática por calidad de contacto</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-400 text-2xl">✓</span>
            <span className="text-lg">Informe PDF detallado con antes y después</span>
          </li>
        </ul>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto border-2 border-green-400 rounded-lg p-8 text-center bg-gray-900/50">
          <h2 className="text-2xl font-bold mb-4">Garantía total de 30 días</h2>
          <p className="text-gray-300 mb-4">
            Si después de la limpieza no mejoran tus métricas de email marketing en 30 días, te devolvemos el dinero completo.
          </p>
          <p className="text-gray-400 text-sm">Sin preguntas, sin formularios, sin burocracia.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-400">
        <div className="max-w-2xl mx-auto text-center text-black">
          <h2 className="text-3xl font-bold mb-6">¿Listo para recuperar el control de tu base de datos?</h2>
          <a
            href="https://buy.stripe.com/test_9AQ8Ak7H64yy08wfYY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition"
          >
            Empezar ahora — 197€
          </a>
          <p className="text-sm text-black/80 mt-4">
            Entrega en 48 horas. Garantía 30 días. Pago seguro con Stripe.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-8 px-4 text-center text-gray-500 text-sm">
        <p>© 2026 CodeTix · AI Data Rescue Service</p>
      </footer>
    </main>
  )
}
