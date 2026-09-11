import React from "react"
import {
  AboutHeroSection,
  AboutImpactSection,
  AboutValuesSection,
  AboutOfficesSection,
  AboutTeamSection,
  AboutFaqSection,
  AboutStorySection,
  AboutInstagramSection,
} from "../sections/about"

export interface AboutPageProps {
  onOpenQuote?: () => void
  onNavigate?: (page: string) => void
}

export default function AboutPage({ onOpenQuote, onNavigate }: AboutPageProps) {
  const handleScrollToImpact = () => {
    const el = document.getElementById("impact-numbers")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleContactClick = () => {
    onNavigate?.("contact")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleLearnMore = () => {
    onNavigate?.("services")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="bg-white min-h-screen text-[#0e0e0e] selection:bg-[#ffd43e] selection:text-[#0e0e0e]">
      {/* 1. Yellow Hero with Centered Content & Stepped Corner */}
      <AboutHeroSection
        onOpenQuote={onOpenQuote}
        onScrollToStory={handleScrollToImpact}
      />

      {/* 2. Our Impact in Numbers with Full-Width Rooftop Photo & Stats */}
      <AboutImpactSection />

      {/* 3. Interactive Values with Sticky Left Sidebar & 6 Lineart Value Cards */}
      <AboutValuesSection onContactClick={handleContactClick} />

      {/* 4. Visit Our Offices Around the Globe (Dark Background & Location Cards) */}
      <AboutOfficesSection />

      {/* 5. The Amazing Team Behind Construcfy (Profile Cards & Socials) */}
      <AboutTeamSection onOpenQuote={onOpenQuote} />

      {/* 6. Frequently Asked Questions (Interactive Accordion) */}
      <AboutFaqSection />

      {/* 7. Narrative Story Section ("About Us - Reliable and Experienced Contractors") */}
      <AboutStorySection
        onOpenQuote={onOpenQuote}
        onLearnMore={handleLearnMore}
      />

      {/* 8. Follow Our Work on Instagram (1 Large Left + 4 Equal Height 2x2 Grid) */}
      <AboutInstagramSection />
    </div>
  )
}
