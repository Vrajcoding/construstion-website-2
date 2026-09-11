import React, { useState } from "react"
import { SocialIcons, FaqAccordion } from "../common"
import { officeLocationsData, faqData } from "../../data/siteData"

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

  // Office Location Tab State
  const [activeOfficeId, setActiveOfficeId] = useState<string>("la")

  const currentOffice =
    officeLocationsData.find((loc) => loc.id === activeOfficeId) ||
    officeLocationsData[0]

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

  return (
    <div className="bg-white min-h-screen">
      {/* ========================================================================= */}
      {/* 1. HERO & CONTACT FORM SECTION (DARK)                                     */}
      {/* ========================================================================= */}
      <section className="bg-[#0e0e0e] text-white pt-16 sm:pt-24 lg:pt-32 pb-20 sm:pb-28 lg:pb-32">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start">
            {/* Left Column: Headline, Info, and Socials */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-[82px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white tracking-tight leading-[1.08] lg:leading-[88px]">
                Contact us
              </h1>

              <p className="text-[#c5c5c5] text-[18px] font-['Mona_Sans:Regular',sans-serif] leading-[30px] mt-6 max-w-lg">
                Felis nec et augue in id gravida mauris rhoncus vitae nibh mollis
                suspendisse nunc sapien pretium cras.
              </p>

              {/* Email Callout Box */}
              <div className="mt-10 sm:mt-12 flex items-center gap-5 sm:gap-6">
                {/* Yellow Envelope Icon */}
                <div className="w-14 h-10 sm:w-16 sm:h-11 relative shrink-0">
                  <svg
                    viewBox="0 0 56 38"
                    fill="none"
                    stroke="#ffd43e"
                    strokeWidth="2.5"
                    className="w-full h-full"
                  >
                    <rect x="2" y="2" width="52" height="34" />
                    <path d="M2 2L28 22L54 2" />
                    <path d="M2 36L20 18" />
                    <path d="M54 36L36 18" />
                  </svg>
                </div>

                <div>
                  <span className="block text-[13px] font-['Mona_Sans:Medium',sans-serif] font-medium tracking-[1.2px] uppercase text-[#ffd43e] mb-1">
                    SEND ME AN EMAIL
                  </span>
                  <a
                    href="mailto:contact@construcfy.com"
                    className="text-xl sm:text-2xl lg:text-[24px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white hover:text-[#ffd43e] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span>contact@construcfy.com</span>
                    <span className="text-xl inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </a>
                </div>
              </div>

              {/* Horizontal Divider Line */}
              <div className="w-full h-[1px] bg-[#262626] my-10 sm:my-12" />

              {/* Social Media Section */}
              <div>
                <h3 className="text-white text-xl sm:text-2xl font-['Mona_Sans:Medium',sans-serif] font-medium mb-6">
                  Follow our work on social media
                </h3>
                <SocialIcons theme="light" size="lg" className="gap-6" />
              </div>
            </div>

            {/* Right Column: Contact Us Form */}
            <div className="w-full lg:pt-4">
              {isSubmitted ? (
                <div className="bg-[#181818] border border-[#2e2e2e] rounded-2xl p-8 sm:p-12 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-[#ffd43e] text-[#0e0e0e] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-['Mona_Sans:Medium',sans-serif] font-medium text-white mb-3">
                    Thank you!
                  </h3>
                  <p className="text-[#c5c5c5] text-[17px] font-['Mona_Sans:Regular',sans-serif] leading-[28px] max-w-md mx-auto mb-8">
                    Your message has been received. Our team will get back to you
                    within 24 hours.
                  </p>
                  <button
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
                    className="px-8 py-3.5 bg-white text-[#0e0e0e] font-['Mona_Sans:Bold',sans-serif] font-bold text-sm uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-8 sm:space-y-10">
                  {/* Row 1: Full name + Email address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[15px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white mb-2.5"
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleFormChange}
                        placeholder="John Carter"
                        className="w-full bg-transparent border-b border-[#333333] focus:border-[#ffd43e] pb-3 text-white text-[16px] placeholder:text-[#555555] outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[15px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white mb-2.5"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="example@youremail.com"
                        className="w-full bg-transparent border-b border-[#333333] focus:border-[#ffd43e] pb-3 text-white text-[16px] placeholder:text-[#555555] outline-none transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone number + Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[15px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white mb-2.5"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="(123) 456 - 789"
                        className="w-full bg-transparent border-b border-[#333333] focus:border-[#ffd43e] pb-3 text-white text-[16px] placeholder:text-[#555555] outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-[15px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white mb-2.5"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleFormChange}
                        placeholder="How can we help?"
                        className="w-full bg-transparent border-b border-[#333333] focus:border-[#ffd43e] pb-3 text-white text-[16px] placeholder:text-[#555555] outline-none transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[15px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white mb-2.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Write your message here..."
                      className="w-full bg-transparent border-b border-[#333333] focus:border-[#ffd43e] pb-3 text-white text-[16px] placeholder:text-[#555555] outline-none transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-10 py-5 bg-[#ffd43e] hover:bg-[#ffe066] text-[#0e0e0e] font-['Mona_Sans:Bold',sans-serif] font-bold text-base uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-95 inline-flex items-center justify-center gap-2"
                    >
                      <span>Submit message</span>
                      <span className="text-lg">↗</span>
                    </button>
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
      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center gap-3 select-none mb-4">
              <span className="w-7 h-[1.5px] bg-[#0e0e0e] rounded-full" />
              <span className="font-['Mona_Sans:Medium',sans-serif] text-[16px] font-medium tracking-[0.96px] uppercase text-[#0e0e0e]">
                FAQS
              </span>
              <span className="w-7 h-[1.5px] bg-[#0e0e0e] rounded-full" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.1]">
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
      <section className="bg-white pb-24 sm:pb-32 lg:pb-36">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row: Title on Left, Location Tabs on Right */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#e7e7e7]">
            {/* Left: Category Tag & Headline */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3 select-none">
                <span className="font-['Mona_Sans:Medium',sans-serif] text-[16px] font-medium tracking-[0.96px] uppercase text-[#0e0e0e]">
                  OUR OFFICES
                </span>
                <span className="w-7 h-[1.5px] bg-[#0e0e0e] rounded-full" />
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.1]">
                Visit our offices
              </h2>
            </div>

            {/* Right: Location Tabs with Vertical Separators */}
            <div className="flex items-center gap-4 sm:gap-6 lg:pb-3 flex-wrap">
              {officeLocationsData.map((office, idx) => {
                const isActive = activeOfficeId === office.id
                return (
                  <React.Fragment key={office.id}>
                    {idx > 0 && (
                      <span
                        className="h-4 w-[1px] bg-[#d5d5d5] hidden sm:inline-block"
                        aria-hidden="true"
                      />
                    )}
                    <button
                      onClick={() => setActiveOfficeId(office.id)}
                      className={`text-[14px] sm:text-[15px] font-['Mona_Sans:Medium',sans-serif] tracking-[1px] uppercase transition-colors cursor-pointer py-1 ${isActive
                          ? "font-bold text-[#0e0e0e]"
                          : "text-[#888888] hover:text-[#0e0e0e]"
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
          <div className="pt-12 sm:pt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
            {/* Left: Office Photo */}
            <div className="overflow-hidden bg-[#f0f0f0]">
              <img
                src={currentOffice.image}
                alt={currentOffice.title}
                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover grayscale transition-all duration-300"
              />
            </div>

            {/* Right: Location Info & Contact Details */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] leading-tight mb-4">
                {currentOffice.title}
              </h3>

              <p className="text-[#646464] text-[18px] font-['Mona_Sans:Regular',sans-serif] leading-[30px] mb-8 sm:mb-10">
                {currentOffice.description}
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 pb-8 border-b border-[#e7e7e7]">
                <div>
                  <span className="block text-[13px] font-['Mona_Sans:Medium',sans-serif] tracking-[1.2px] uppercase text-[#888888] mb-1.5 font-medium">
                    EMAIL ADDRESS
                  </span>
                  <a
                    href={`mailto:${currentOffice.email}`}
                    className="text-[17px] sm:text-[18px] font-['Mona_Sans:Medium',sans-serif] font-semibold text-[#0e0e0e] hover:underline"
                  >
                    {currentOffice.email}
                  </a>
                </div>

                {currentOffice.phone && (
                  <div>
                    <span className="block text-[13px] font-['Mona_Sans:Medium',sans-serif] tracking-[1.2px] uppercase text-[#888888] mb-1.5 font-medium">
                      PHONE NUMBER
                    </span>
                    <a
                      href={`tel:${currentOffice.phone.replace(/[^0-9]/g, "")}`}
                      className="text-[17px] sm:text-[18px] font-['Mona_Sans:Medium',sans-serif] font-semibold text-[#0e0e0e] hover:underline"
                    >
                      {currentOffice.phone}
                    </a>
                  </div>
                )}

                {currentOffice.location && (
                  <div className="sm:col-span-2">
                    <span className="block text-[13px] font-['Mona_Sans:Medium',sans-serif] tracking-[1.2px] uppercase text-[#888888] mb-1.5 font-medium">
                      LOCATION
                    </span>
                    <p className="text-[17px] sm:text-[18px] font-['Mona_Sans:Medium',sans-serif] font-semibold text-[#0e0e0e]">
                      {currentOffice.location}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
