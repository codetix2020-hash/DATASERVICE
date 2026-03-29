import { CTASection } from '@/components/CTASection'
import { GuaranteeSection } from '@/components/GuaranteeSection'
import { HeroSection } from '@/components/HeroSection'
import { PainPointsSection } from '@/components/PainPointsSection'
import { SiteFooter } from '@/components/SiteFooter'
import { SolutionSection } from '@/components/SolutionSection'
import { UrgencySection } from '@/components/UrgencySection'
import { getRemainingSlotsThisWeek, WEEKLY_SLOT_TOTAL } from '@/lib/slots'

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getRemainingSafe(): Promise<number> {
  try {
    return await getRemainingSlotsThisWeek()
  } catch {
    return WEEKLY_SLOT_TOTAL
  }
}

export default async function Home() {
  const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ONE_TIME ?? ''
  const remaining = await getRemainingSafe()
  const slotsAvailable = remaining > 0

  return (
    <main className="min-h-screen bg-[#0a0a0a] antialiased">
      <HeroSection priceId={priceId} slotsAvailable={slotsAvailable} />
      <PainPointsSection />
      <SolutionSection />
      <UrgencySection remaining={remaining} priceId={priceId} />
      <GuaranteeSection />
      <CTASection priceId={priceId} slotsAvailable={slotsAvailable} />
      <SiteFooter />
    </main>
  )
}
