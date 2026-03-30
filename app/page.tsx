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
            Tu base de datos está frenando tu ecommerce.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Limpiamos, deduplicamos y optimizamos en 48 horas. Resultados garantizados o devolvemos el dinero.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://buy.stripe.com/test_9AQ8Ak7H64yy08wfYY"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-300 transition"
            >
              Solicitar diagnóstico — 197€
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
            <p className="text-4xl font-bold text-green-400 mb-2">500+</p>
            <h3 className="text-xl font-bold mb-2">Bases limpiadas</h3>
            <p className="text-gray-400">Ecommerces en España que ya confían en nosotros.</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/50">
            <p className="text-4xl font-bold text-green-400 mb-2">99.7%</p>
            <h3 className="text-xl font-bold mb-2">Precisión IA</h3>
            <p className="text-gray-400">Deduplicación y validación con tasa de error mínima.</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/50">
            <p className="text-4xl font-bold text-green-400 mb-2">48h</p>
            <h3 className="text-xl font-bold mb-2">Tiempo medio</h3>
            <p className="text-gray-400">Desde recepción de datos hasta entrega de informe.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Qué incluye la limpieza</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
            <div className="text-2xl mb-3">🔍</div>
            <h3 className="text-lg font-bold mb-2">Deduplicación inteligente</h3>
            <p className="text-gray-400">Elimina registros exactos y similares con IA.</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
            <div className="text-2xl mb-3">📍</div>
            <h3 className="text-lg font-bold mb-2">Normalización de datos</h3>
            <p className="text-gray-400">Direcciones, teléfonos, emails en formato consistente.</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
            <div className="text-2xl mb-3">✉️</div>
            <h3 className="text-lg font-bold mb-2">Validación de emails</h3>
            <p className="text-gray-400">Detecta inactivos, temporales y direcciones falsas.</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
            <div className="text-2xl mb-3">📦</div>
            <h3 className="text-lg font-bold mb-2">Limpieza de productos</h3>
            <p className="text-gray-400">SKUs duplicados, descripciones rotas, precios corregidos.</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
            <div className="text-2xl mb-3">⚡</div>
            <h3 className="text-lg font-bold mb-2">Optimización BD</h3>
            <p className="text-gray-400">Índices creados, queries lentas identificadas, caché optimizado.</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
            <div className="text-2xl mb-3">📊</div>
            <h3 className="text-lg font-bold mb-2">Informe detallado</h3>
            <p className="text-gray-400">Reporte PDF antes/después con impacto estimado.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Planes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Plan Limpieza */}
          <div className="border-2 border-gray-700 rounded-lg p-8 bg-gray-900/50">
            <h3 className="text-2xl font-bold mb-2">Limpieza Completa</h3>
            <p className="text-gray-400 mb-6">Pago único</p>
            <div className="text-4xl font-bold text-green-400 mb-6">197€</div>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <span className="text-green-400">✓</span>
                <span>Análisis completo de tu base de datos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">✓</span>
                <span>Limpieza profunda (deduplicación + normalización)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">✓</span>
                <span>Validación de 99.7% de registros</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">✓</span>
                <span>Informe PDF detallado (antes/después)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">✓</span>
                <span>Soporte 30 días post-entrega</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">✓</span>
                <span>Garantía 100% satisfacción</span>
              </li>
            </ul>
            <a
              href="https://buy.stripe.com/test_9AQ8Ak7H64yy08wfYY"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-300 transition text-center"
            >
              Empezar ahora
            </a>
          </div>

          {/* Plan Mantenimiento */}
          <div className="border-2 border-green-400 rounded-lg p-8 bg-gray-900/70 relative">
            <div className="absolute -top-4 left-6 bg-green-400 text-black px-3 py-1 rounded text-sm font-bold">
              MÁS POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Mantenimiento Continuo</h3>
            <p className="text-gray-400 mb-6">Suscripción mensual</p>
            <div className="text-4xl font-bold text-green-400 mb-2">97€<span className="text-lg text-gray-400">/mes</span></div>
            <p className="text-gray-400 mb-6 text-sm">Después de la limpieza inicial</p>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <span className="text-green-400">✓</span>
                <span>Todo del plan Limpieza incluido</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">✓</span>
                <span>Monitoreo automático mensual</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">✓</span>
                <span>Limpieza automática de nuevos datos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">✓</span>
                <span>Reportes mensuales automáticos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">✓</span>
                <span>Soporte prioritario 24/7</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">✓</span>
                <span>Cancelar cuando quieras</span>
              </li>
            </ul>
            <a
              href="https://buy.stripe.com/test_9AQ8Ak7H64yy08wfYY"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-300 transition text-center"
            >
              Empezar con plan mensual
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Preguntas frecuentes</h2>
        <div className="space-y-6">
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
            <h3 className="text-lg font-bold mb-2">¿Qué datos necesitáis?</h3>
            <p className="text-gray-400">CSV, SQL dump, o acceso seguro directo a tu base de datos. Soportamos todas las plataformas (Shopify, WooCommerce, Magento, PrestaShop, custom).</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
            <h3 className="text-lg font-bold mb-2">¿Es seguro?</h3>
            <p className="text-gray-400">Conexión TLS encriptada, NDA disponible si lo necesitas, y eliminamos todos tus datos después de la entrega. Cumplimos RGPD.</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
            <h3 className="text-lg font-bold mb-2">¿Cuánto tarda?</h3>
            <p className="text-gray-400">48 horas para el diagnóstico inicial, 5 días hábiles para la limpieza completa. Con el plan mensual, procesamos automáticamente cada mes.</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
            <h3 className="text-lg font-bold mb-2">¿Qué plataformas soportáis?</h3>
            <p className="text-gray-400">Shopify, WooCommerce, Magento, PrestaShop, custom. Si usas otra plataforma, contacta — probablemente soportemos tu caso.</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
            <h3 className="text-lg font-bold mb-2">¿Y si no estoy satisfecho?</h3>
            <p className="text-gray-400">Garantía 100% — si después de 30 días no ves mejora en tus métricas, devolvemos todo el dinero. Sin preguntas.</p>
          </div>
        </div>
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
