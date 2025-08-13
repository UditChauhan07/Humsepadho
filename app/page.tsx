import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CoursesSection } from "@/components/courses-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MissionSection } from "@/components/mission-section"
import { SuccessStoriesSection } from "@/components/success-stories-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <TestimonialsSection />
      <MissionSection />
      <SuccessStoriesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
