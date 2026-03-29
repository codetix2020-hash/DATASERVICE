import { Analytics } from '@vercel/analytics/react'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title:
    'Limpieza de Base de Datos Ecommerce España — Resultados en 48 Horas | 197€',
  description:
    'Eliminamos emails inválidos, duplicados y datos corruptos de tu ecommerce. 197€ pago único, entrega 48 horas, garantía 30 días o devolución completa.',
  keywords:
    'limpieza base datos, email validation, ecommerce, empresas españa',
  openGraph: {
    title: 'Limpieza de Base de Datos Ecommerce — 197€',
    description:
      'Base de datos sucia = dinero perdido. La limpiamos en 48 horas. Garantía 30 días.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`${inter.className} bg-[#0a0a0a] text-white min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
