import { stripe } from '@/lib/stripe'
import { resend } from '@/lib/resend'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  const response = new NextResponse()
  
  // Anti-caché headers
  response.headers.set('Cache-Control', 'no-store, max-age=0, must-revalidate')
  response.headers.set('Pragma', 'no-cache')
  response.headers.set('Expires', '0')

  try {
    const sig = request.headers.get('stripe-signature')
    
    if (!sig) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400, headers: response.headers }
      )
    }

    const body = await request.text()
    
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    )

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as any
      
      // Send confirmation email
      try {
        await resend.emails.send({
          from: 'noreply@datarescue.es',
          to: session.customer_email,
          subject: 'Recibido ✓ — Limpiamos tu base en 48h',
          html: generateConfirmationEmail(session)
        })
      } catch (emailError) {
        console.error('Email send error:', emailError)
        // Don't fail the webhook for email errors
      }
    }

    return NextResponse.json(
      { received: true },
      { headers: response.headers }
    )
  } catch (error) {
    console.error('Webhook error:', error)
    
    const errorResponse = NextResponse.json(
      { error: 'Webhook error' },
      { status: 400 }
    )
    
    errorResponse.headers.set('Cache-Control', 'no-store, max-age=0')
    
    return errorResponse
  }
}

function generateConfirmationEmail(session: any): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial; background: #f3f4f6; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; }
        h1 { color: #0a0a0a; margin-bottom: 20px; font-size: 28px; }
        h2 { color: #0a0a0a; font-size: 20px; margin-top: 30px; margin-bottom: 15px; }
        .amount { font-size: 32px; font-weight: bold; color: #00ff88; margin: 20px 0; }
        .steps { margin: 30px 0; }
        .step { margin-bottom: 15px; padding: 15px; background: #f9fafb; border-left: 4px solid #00ff88; }
        .step strong { color: #0a0a0a; }
        p { color: #4b5563; line-height: 1.6; }
        .footer { color: #9ca3af; font-size: 12px; margin-top: 40px; border-top: 1px solid #e5e7eb; padding-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>¡Hemos recibido tu pago! ✓</h1>
        <p>Gracias por elegir AI Data Rescue Service.</p>
        
        <div class="amount">197€</div>
        <p><strong>Procesado correctamente</strong></p>
        
        <h2>¿Qué pasa ahora?</h2>
        <div class="steps">
          <div class="step">
            <strong>Paso 1:</strong> Recibirás un email con un link para subir tu base de datos (Excel/CSV)
          </div>
          <div class="step">
            <strong>Paso 2:</strong> Sube tu archivo con los datos que necesitas limpiar
          </div>
          <div class="step">
            <strong>Paso 3:</strong> Nuestro sistema procesará automáticamente tu base
          </div>
          <div class="step">
            <strong>Paso 4:</strong> Recibirás tu base de datos limpia en 48 horas máximo
          </div>
        </div>
        
        <p><strong>¿Dudas?</strong> Responde a este email. Estamos aquí para ayudarte.</p>
        
        <div class="footer">
          © 2026 AI Data Rescue Service. Todos los derechos reservados.
        </div>
      </div>
    </body>
    </html>
  `
}
