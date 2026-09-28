import React, { useState } from "react"
import { SocialIcons, DecorativeGrid, Button } from "../../common"

export interface ContactHeroSectionProps {
  onOpenQuote?: () => void
}

export default function ContactHeroSection({ onOpenQuote }: ContactHeroSectionProps) {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

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

            <p className="text-[#c5c5c5] text-base sm:text-lg leading-[26px] sm:leading-[30px] mt-4 sm:mt-6 max-w-lg lg:max-w-xl">
              Felis nec et augue in id gravida mauris rhoncus vitae nibh
              mollis suspendisse nunc sapien pretium cras.
            </p>

            {/* Email Callout Box */}
            <div className="mt-8 sm:mt-10 pb-8 sm:pb-10 border-b border-[#262626] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="w-[50px] sm:w-[54px] h-[36px] sm:h-[40px] shrink-0 flex items-center justify-start">
                <img
                  src="/email-img.svg"
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
  )
}
