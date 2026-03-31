export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailRequest {
  to: string
  subject: string
  body: string
}

export async function POST(request: Request) {
  try {
    const body: EmailRequest = await request.json()

    // Validar campos requeridos
    if (!body.to || !body.subject || !body.body) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: to, subject, body' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.to)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Enviar email vía Resend
    const response = await resend.emails.send({
      from: 'noreply@codetix.io',
      to: body.to,
      subject: body.subject,
      html: body.body,
    })

    // Resend retorna { id, error } o { id, data }
    if (response.error) {
      return new Response(
        JSON.stringify({ error: response.error.message || 'Failed to send email' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true, messageId: response.data?.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Email send error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
