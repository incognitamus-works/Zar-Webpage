import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { DrinksSection } from "@/components/drinks-section"
import { HookahSection } from "@/components/hookah-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DrinksSection />
      <HookahSection />
      <Footer />
    </main>
  )
}
