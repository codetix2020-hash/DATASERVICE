import { z } from 'zod'

const envSchema = z.object({
  STRIPE_SECRET_KEY: z.string().min(1, 'STRIPE_SECRET_KEY required'),
  STRIPE_PUBLISHABLE_KEY: z.string().min(1, 'STRIPE_PUBLISHABLE_KEY required'),
  STRIPE_WEBHOOK_SECRET: z.string().min(1, 'STRIPE_WEBHOOK_SECRET required'),
  NEXT_PUBLIC_STRIPE_PRICE_ONE_TIME: z.string().min(1, 'NEXT_PUBLIC_STRIPE_PRICE_ONE_TIME required'),
  NEXT_PUBLIC_STRIPE_PRICE_SUBSCRIPTION: z.string().min(1, 'NEXT_PUBLIC_STRIPE_PRICE_SUBSCRIPTION required'),
  NEXT_PUBLIC_URL: z.string().min(1, 'NEXT_PUBLIC_URL required'),
  RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY required'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
})

export type Env = z.infer<typeof envSchema>

let validatedEnv: Env | null = null

export function getEnv(): Env {
  if (validatedEnv) return validatedEnv

  const result = envSchema.safeParse(process.env)

  if (!result.success) {
    console.error('❌ Invalid environment variables:')
    console.error(result.error.flatten().fieldErrors)
    throw new Error('Invalid environment configuration')
  }

  validatedEnv = result.data
  return validatedEnv
}
