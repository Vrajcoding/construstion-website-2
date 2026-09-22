import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SocialIcons, FaqAccordion, DecorativeGrid, Button } from "../common"
import { officeLocationsData, faqData } from "../../data/siteData"
import iconEmail from "../../../imports/Email-img.svg"

export interface ContactPageProps {
  onOpenQuote?: () => void
}

export default function ContactPage({ onOpenQuote }: ContactPageProps) {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeOfficeId, setActiveOfficeId] = useState("la")

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const currentOffice =
    officeLocationsData.find((o) => o.id === activeOfficeId) ||
    officeLocationsData[0]

  return (
    <div className="bg-white min-h-screen">
      {/* ========================================================================= */}
      {/* 1. HERO & CONTACT FORM SECTION (DARK)                                     */}
      {/* ========================================================================= */}
      <section className="relative bg-[#0e0e0e] text-white py-14 sm:py-20 lg:py-28 overflow-hidden">
        {/* Bottom-left signature 2x2 white geometric grid accent */}
        <div className="absolute bottom-0 left-0 z-10 pointer-events-none">
          <DecorativeGrid pattern="diagonal-tl-br" fillColor="white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-start">
            {/* Left Column: Headline, Info, and Socials */}
            <div>
              <h1 className="text-4xl lg:text-[72px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white tracking-tight leading-[1.1]">
                Contact us
              </h1>

              <p className="text-[#c5c5c5] text-base sm:text-lg leading-[26px] sm:leading-[30px] mt-4 sm:mt-6 max-w-lg">
                Felis nec et augue in id gravida mauris rhoncus vitae nibh
                mollis suspendisse nunc sapien pretium cras.
              </p>

              {/* Email Callout Box */}
              <div className="mt-8 sm:mt-10 pb-8 sm:pb-10 border-b border-[#262626] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="w-[50px] sm:w-[54px] h-[36px] sm:h-[40px] shrink-0 flex items-center justify-start">
                  <img
                    src={iconEmail}
                    alt="Email"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col items-start">
                  <span className="block text-[13px] sm:text-[14px] font-['Mona_Sans:Medium',sans-serif] font-medium tracking-[1.4px] uppercase text-[#939393] mb-1.5 sm:mb-2">
                    SEND ME AN EMAIL
                  </span>
                  <a
                    href="mailto:contact@construcfy.com"
                    className="text-xl sm:text-2xl font-['Mona_Sans:Bold',sans-serif] font-bold text-white hover:text-[#ffd43e] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span>contact@construcfy.com</span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="mt-8 sm:mt-10 pb-8 sm:pb-10 border-b border-[#262626] lg:border-b-0 lg:pb-0">
                <h3 className="text-white text-[22px] font-['Mona_Sans:Bold',sans-serif] font-bold mb-4 sm:mb-5 leading-tight">
                  Follow our work on social media
                </h3>
                <SocialIcons theme="light" size="md" className="gap-5 sm:gap-6" />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="w-full lg:pt-2">
              {isSubmitted ? (
                <div className="bg-[#181818] border border-[#2e2e2e] rounded-2xl p-6 sm:p-10 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 bg-[#ffd43e] text-[#0e0e0e] rounded-full flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-xl sm:text-2xl font-['Mona_Sans:Bold',sans-serif] font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#a0a0a0] text-sm sm:text-base leading-relaxed mb-6 max-w-sm mx-auto">
                    Thank you for reaching out. A senior project manager will
                    get back to you within 24 hours.
                  </p>
                  <Button
                    variant="white"
                    size="md"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      })
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleFormSubmit}
                  className="space-y-6 sm:space-y-8"
                >
                  {/* Row 1: Full name + Email address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-white font-['Mona_Sans:Bold',sans-serif] font-bold text-base sm:text-[17px] mb-2"
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="John Carter"
                        value={formData.fullName}
                        onChange={handleFormChange}
                        className="w-full bg-transparent border-b border-[#262626] focus:border-white py-3 sm:py-4 text-white text-sm sm:text-base placeholder:text-white/60 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-white font-['Mona_Sans:Bold',sans-serif] font-bold text-base sm:text-[17px] mb-2"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="example@youremail.com"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full bg-transparent border-b border-[#262626] focus:border-white py-3 sm:py-4 text-white text-sm sm:text-base placeholder:text-white/60 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone number + Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-white font-['Mona_Sans:Bold',sans-serif] font-bold text-base sm:text-[17px] mb-2"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="(123) 456 - 789"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full bg-transparent border-b border-[#262626] focus:border-white py-3 sm:py-4 text-white text-sm sm:text-base placeholder:text-white/60 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-white font-['Mona_Sans:Bold',sans-serif] font-bold text-base sm:text-[17px] mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleFormChange}
                        className="w-full bg-transparent border-b border-[#262626] focus:border-white py-3 sm:py-4 text-white text-sm sm:text-base placeholder:text-white/60 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-['Mona_Sans:Bold',sans-serif] font-bold text-base sm:text-[17px] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full bg-transparent border-b border-[#262626] focus:border-white py-3 sm:py-4 text-white text-sm sm:text-base placeholder:text-white/60 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 sm:pt-6">
                    <Button
                      type="submit"
                      variant="white"
                      size="lg"
                      showArrow
                      fullWidthMobile
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FREQUENTLY ASKED QUESTIONS SECTION (WHITE)                             */}
      {/* ========================================================================= */}
      <section className="bg-white py-[120px] sm:py-28 lg:py-[240px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center justify-center gap-3 select-none mb-3 sm:mb-4">
              <span className="w-7 h-[1.5px] bg-[#0e0e0e] rounded-full" />
              <span className="font-['Mona_Sans:Medium',sans-serif] text-[15px] sm:text-[16px] font-medium tracking-[0.96px] uppercase text-[#0e0e0e]">
                FAQS
              </span>
              <span className="w-7 h-[1.5px] bg-[#0e0e0e] rounded-full" />
            </div>

            <h2 className="text-[32px] sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.15] sm:leading-[1.1] text-center">
              Frequently asked questions
            </h2>
          </div>

          {/* Shared Reusable FAQ Accordion Component */}
          <FaqAccordion items={faqData} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. VISIT OUR OFFICES SECTION (WHITE)                                      */}
      {/* ========================================================================= */}
      <section className="bg-white pt-0 pb-[120px] sm:pt-0 sm:pb-28 lg:pt-0 lg:pb-[240px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row: Title on Left, Location Tabs on Right */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-0 sm:pb-8 lg:pb-12 border-b-0 sm:border-b border-[#c5c5c5]">
            {/* Left: Category Tag & Headline */}
            <div className="space-y-3 mb-2 sm:mb-0">
              <div className="inline-flex items-center gap-3 select-none">
                <span className="font-['Mona_Sans:Medium',sans-serif] text-[15px] sm:text-[16px] font-medium tracking-[0.96px] uppercase text-[#0e0e0e]">
                  OUR OFFICES
                </span>
                <span className="w-7 h-[1.5px] bg-[#0e0e0e] rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.1]">
                Visit our offices
              </h2>
            </div>

            {/* Right: Location Tabs - Vertical list with border-b on mobile, horizontal with vertical dividers on desktop */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-5 md:gap-6 lg:pb-3 w-full sm:w-auto">
              {officeLocationsData.map((office, idx) => {
                const isActive = activeOfficeId === office.id
                return (
                  <React.Fragment key={office.id}>
                    {idx > 0 && (
                      <span
                        className="h-6 sm:h-8 md:h-10 w-[1px] bg-[#c5c5c5] hidden sm:inline-block self-center"
                        aria-hidden="true"
                      />
                    )}
                    <button
                      onClick={() => setActiveOfficeId(office.id)}
                      className={`text-[14px] sm:text-[15px] md:text-[16px] tracking-[1px] uppercase transition-colors cursor-pointer w-full sm:w-auto text-left sm:text-center py-4 sm:py-1 border-b border-[#c5c5c5] sm:border-b-0 block sm:inline-block ${isActive
                          ? "font-['Mona_Sans:Bold',sans-serif] font-bold text-[#0e0e0e]"
                          : "font-['Mona_Sans:Medium',sans-serif] font-medium text-[#777777] hover:text-[#0e0e0e]"
                        }`}
                    >
                      {office.name || office.title}
                    </button>
                  </React.Fragment>
                )
              })}
            </div>
          </div>

          {/* 2-Column Content: Photo on Left, Office Details on Right */}
          <div className="pt-10 sm:pt-14 lg:pt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
            {/* Left: Office Photo with Pure Opacity Crossfade */}
            <div className="overflow-hidden bg-[#f0f0f0] relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[824/626] lg:h-auto">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentOffice.id}
                  src={currentOffice.image}
                  alt={currentOffice.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full object-cover grayscale absolute inset-0"
                />
              </AnimatePresence>
            </div>

            {/* Right: Location Info & Contact Details with Pure Opacity Crossfade */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentOffice.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                  }}
                >
                  <h3 className="text-[26px] sm:text-3xl lg:text-[44px] font-['Mona_Sans:Bold',sans-serif] sm:font-['Mona_Sans:Medium',sans-serif] font-bold sm:font-medium text-[#0e0e0e] leading-tight mb-3 sm:mb-4 lg:mb-4">
                    {currentOffice.title}
                  </h3>

                  <p className="text-[#646464] text-[16px] sm:text-base lg:text-[18px] font-['Mona_Sans:Regular',sans-serif] leading-[24px] sm:leading-[28px] lg:leading-[28px] max-w-lg mb-10 sm:mb-8 lg:mb-12">
                    {currentOffice.description}
                  </p>

                  {/* Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-y-8 lg:gap-y-9 gap-x-6 pb-6 sm:pb-8 lg:pb-10 border-b border-[#e5e5e5]">
                    <div>
                      <span className="block text-[14px] sm:text-[13px] lg:text-[14px] font-['Mona_Sans:Medium',sans-serif] tracking-[1.2px] uppercase text-[#777777] mb-1.5 sm:mb-2 font-medium">
                        EMAIL ADDRESS
                      </span>
                      <a
                        href={`mailto:${currentOffice.email}`}
                        className="text-[16px] sm:text-[16px] lg:text-[17px] font-['Mona_Sans:Bold',sans-serif] font-bold text-[#0e0e0e] hover:underline break-all"
                      >
                        {currentOffice.email}
                      </a>
                    </div>

                    {currentOffice.phone && (
                      <div>
                        <span className="block text-[14px] sm:text-[13px] lg:text-[14px] font-['Mona_Sans:Medium',sans-serif] tracking-[1.2px] uppercase text-[#777777] mb-1.5 sm:mb-2 font-medium">
                          PHONE NUMBER
                        </span>
                        <a
                          href={`tel:${currentOffice.phone.replace(/[^0-9]/g, "")}`}
                          className="text-[16px] sm:text-[16px] lg:text-[17px] font-['Mona_Sans:Bold',sans-serif] font-bold text-[#0e0e0e] hover:underline"
                        >
                          {currentOffice.phone}
                        </a>
                      </div>
                    )}

                    {currentOffice.location && (
                      <div className="sm:col-span-2">
                        <span className="block text-[14px] sm:text-[13px] lg:text-[14px] font-['Mona_Sans:Medium',sans-serif] tracking-[1.2px] uppercase text-[#777777] mb-1.5 sm:mb-2 font-medium">
                          LOCATION
                        </span>
                        <p className="text-[16px] sm:text-[16px] lg:text-[17px] font-['Mona_Sans:Bold',sans-serif] font-bold text-[#0e0e0e]">
                          {currentOffice.location}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
