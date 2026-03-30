'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Zap, Shield, Target, Headphones, RotateCcw, BarChart3, ChevronDown, Mail, MessageSquare } from 'lucide-react'
import { PRICING, PRODUCT, SOCIAL_PROOF } from '@/lib/constants'
import { CheckoutButton } from '@/components/CheckoutButton'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const iconMap: Record<string, any> = {
  Zap,
  Shield,
  Target,
  Headphones,
  RotateCcw,
  BarChart3,
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 h-full w-full rounded-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/20 opacity-50 blur-3xl" />
        </div>

        <motion.div className="container relative mx-auto px-4 text-center" initial="hidden" animate="show" variants={container}>
          <motion.h1 variants={item} className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
            Limpia tu base de datos
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">con IA en minutos</span>
          </motion.h1>

          <motion.p variants={item} className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Elimina productos inactivos, datos duplicados y registros corruptos. Seguridad garantizada, rollback en un clic.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <CheckoutButton variant="primary" size="lg" />
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Ver features
              <ChevronDown className="ml-2 h-5 w-5" />
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={item} className="mt-16">
            <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-6">{SOCIAL_PROOF.trustText}</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {SOCIAL_PROOF.logos.map((logo) => (
                <div key={logo.name} className="h-8 text-neutral-400 dark:text-neutral-600 font-semibold text-sm">
                  {logo.name}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por qué elegir AI Data Rescue</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">Velocidad, seguridad y precisión en un solo lugar</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show">
            {PRODUCT.features.map((feature, idx) => {
              const Icon = iconMap[feature.icon]
              return (
                <motion.div key={idx} variants={item} className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:shadow-lg dark:hover:shadow-2xl transition-shadow">
                  <Icon className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Precios transparentes</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">Sin sorpresas, sin contratos</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto" variants={container} initial="hidden" whileInView="show">
            {/* One-time */}
            <motion.div variants={item} className="p-8 rounded-xl border-2 border-blue-200 dark:border-blue-900 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-neutral-900">
              <div className="mb-6">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Limpieza única</p>
                <p className="text-4xl font-bold mt-2">{PRICING.ONE_TIME.amount}€</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">pago único</p>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 mb-6 font-medium">{PRICING.ONE_TIME.description}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Limpieza completa una vez
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Rollback garantizado
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Reportes detallados
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Soporte 24/7
                </li>
              </ul>
              <CheckoutButton variant="primary" size="lg" className="w-full" />
            </motion.div>

            {/* Subscription */}
            <motion.div variants={item} className="p-8 rounded-xl border-2 border-red-200 dark:border-red-900 bg-gradient-to-b from-red-50 to-white dark:from-red-950/30 dark:to-neutral-900">
              <div className="mb-6">
                <p className="text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide">Mantenimiento continuo</p>
                <p className="text-4xl font-bold mt-2">{PRICING.SUBSCRIPTION.amount}€</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">/ mes</p>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 mb-6 font-medium">{PRICING.SUBSCRIPTION.description}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Monitoreo 24/7
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Limpiezas automáticas
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Alertas en tiempo real
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  + todo del plan único
                </li>
              </ul>
              <CheckoutButton variant="secondary" size="lg" className="w-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas frecuentes</h2>
          </motion.div>

          <motion.div className="space-y-4" variants={container} initial="hidden" whileInView="show">
            {PRODUCT.faqItems.map((faq, idx) => (
              <motion.details key={idx} variants={item} className="group p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                <summary className="font-semibold text-lg flex items-center justify-between">
                  {faq.question}
                  <span className="ml-4 transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-red-600">
        <motion.div className="container mx-auto px-4 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para limpiar tu base de datos?</h2>
          <p className="text-xl text-blue-100 mb-8">Comienza ahora. Rollback garantizado.</p>
          <CheckoutButton variant="white" size="lg" />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 dark:bg-neutral-950 text-neutral-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-white mb-4">AI Data Rescue</h3>
              <p className="text-sm">Limpieza de bases de datos con IA. Rápido, seguro, confiable.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Producto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Precios
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacidad
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:hi@aidatarescue.com" className="hover:text-white transition-colors flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    hi@aidatarescue.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8">
            <p className="text-center text-sm">© 2026 AI Data Rescue. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
