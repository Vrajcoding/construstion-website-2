import React, { useState } from "react"
import SectionTag from "../../common/SectionTag"
import { siteImages } from "../../../data/siteData"

export default function BlogNewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24 relative overflow-visible">
      {/* Banner Container: Left indentation, full-width extending to right edge */}
      <div className="w-full pl-4 sm:pl-8 lg:pl-16 xl:pl-28 pr-0">
        <div className="bg-[#ffd43e] relative rounded-none overflow-visible shadow-xl w-full min-h-[520px] lg:min-h-[620px] xl:min-h-[660px] flex items-center">
          {/* Top-Right Stepped Decorative White Square Accent flush with right edge */}
          <div
            className="absolute top-0 right-0 w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56 bg-white pointer-events-none z-0"
            aria-hidden="true"
          />

          {/* Bottom-Right Decorative White Square Accent behind Typewriter Keyboard */}
          <div
            className="absolute bottom-0 right-16 sm:right-28 lg:right-44 w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-white pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Flexbox Layout for easy alignment and spacious height */}
          <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 w-full">
            {/* Left Content Area: Form & Copy with increased vertical height */}
            <div className="flex-1 w-full p-8 sm:p-14 lg:py-24 lg:pl-20 lg:pr-12 xl:py-28 xl:pl-24 xl:pr-16 flex flex-col justify-center">
              <SectionTag
                text="GET IN TOUCH"
                theme="dark"
                hideLine
                className="mb-6"
              />

              <h2 className="text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.06] mb-8">
                Subscribe to our <br className="hidden sm:inline" />
                newsletter
              </h2>

              <p className="text-[#2f2f2f] text-[17px] sm:text-[19px] leading-[30px] sm:leading-[32px] font-['Mona_Sans:Medium',sans-serif] font-medium max-w-lg mb-10 sm:mb-14">
                Lorem ipsum dolor sit amet consectetur senectus velit faucibus
                non quisque at ut vitae platea justo nec mattis.
              </p>

              {isSubmitted ? (
                <div className="p-4 bg-[#0e0e0e] text-white rounded-full text-center font-['Mona_Sans:Medium',sans-serif] font-medium animate-in fade-in max-w-md">
                  ✓ Thank you for subscribing!
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 max-w-lg"
                >
                  <div className="flex-1 border-b-2 border-[#0e0e0e]/30 focus-within:border-[#0e0e0e] transition-colors pb-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-transparent outline-none text-[#0e0e0e] placeholder-[#0e0e0e]/60 font-['Mona_Sans:Regular',sans-serif] text-base sm:text-lg"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#0e0e0e] hover:bg-neutral-800 text-white font-['Mona_Sans:Bold',sans-serif] font-bold text-base px-9 sm:px-11 py-4 sm:py-5 rounded-full transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-95 shrink-0 text-center"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Increased Height Typewriter Image with Paper Overhanging Above Banner */}
            <div className="flex-shrink-0 w-full lg:w-[48%] xl:w-[46%] 2xl:w-[44%] relative flex items-end justify-center lg:justify-end pr-0 lg:pr-6 xl:pr-12 overflow-visible">
              <div className="relative w-full max-w-[500px] sm:max-w-[580px] lg:max-w-[660px] xl:max-w-[740px] 2xl:max-w-[800px] -mt-24 sm:-mt-32 lg:-mt-48 xl:-mt-60 overflow-visible">
                <img
                  src={siteImages.typewriterBanner}
                  alt="Vintage typewriter with white paper loaded in carriage"
                  className="w-full h-auto max-h-[620px] lg:max-h-[720px] xl:max-h-[820px] object-contain drop-shadow-2xl relative z-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
