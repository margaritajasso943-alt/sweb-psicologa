import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Resources } from "@/components/resources"
import { BookingSection } from "@/components/booking-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <About />
        <Resources />
        <BookingSection />
      </main>
      <SiteFooter />
    </div>
  )
}
