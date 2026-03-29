import { getStripe } from '@/lib/stripe'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const PRICE_ID = process.env.NEXT_PUBLIC_STRIPE_PRICE_ONE_TIME || 'price_1TG770Fnv2zNlVdF197EUR'

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe()
    const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: PRICE_ID,
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: baseUrl,
      automatic_tax: { enabled: false },
      metadata: {
        productType: 'data-rescue-service',
        priceEur: '197'
      }
    } as any)

    const response = NextResponse.json({ url: session.url })
    response.headers.set('Cache-Control', 'no-store, max-age=0, must-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    
    return response
  } catch (error) {
    console.error('Stripe checkout error:', error)
    
    const errorResponse = NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
    
    errorResponse.headers.set('Cache-Control', 'no-store, max-age=0')
    errorResponse.headers.set('Pragma', 'no-cache')
    
    return errorResponse
  }
}
