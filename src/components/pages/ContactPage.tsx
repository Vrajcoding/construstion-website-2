import React from "react"
import {
  ContactHeroSection,
  ContactFaqSection,
  ContactOfficesSection,
} from "../sections/contact"

export interface ContactPageProps {
  onOpenQuote?: () => void
}

export default function ContactPage({ onOpenQuote }: ContactPageProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero & Contact Form Section (Dark) */}
      <ContactHeroSection onOpenQuote={onOpenQuote} />

      {/* 2. Frequently Asked Questions Section (White) */}
      <ContactFaqSection />

      {/* 3. Visit Our Offices Section (White) */}
      <ContactOfficesSection />
    </div>
  )
}
