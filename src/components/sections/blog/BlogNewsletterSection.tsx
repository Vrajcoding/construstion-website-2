import React, { useState } from "react"
import SectionTag from "../../common/SectionTag"
import Button from "../../common/Button"
import DecorativeGrid from "../../common/DecorativeGrid"
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
    <section className="bg-white py-0 sm:py-20 lg:py-32 relative overflow-hidden lg:overflow-visible">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="bg-[#ffd43e] relative rounded-none sm:rounded-2xl lg:rounded-none overflow-hidden lg:overflow-visible shadow-xl w-full">
          {/* Top-Right Stepped Decorative White Square Accent */}
          <div
            className="absolute top-0 right-0 w-[54px] h-[54px] sm:w-28 sm:h-28 lg:w-48 lg:h-40 bg-white pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Bottom-Right Decorative Staircase Grid Accent (Image 1 & 2) */}
          <div className="absolute bottom-0 right-0 pointer-events-none z-30">
            <DecorativeGrid
              pattern="staircase-br"
              fillColor="white"
              className="w-20 h-20 sm:w-32 sm:h-32 lg:w-36 lg:h-36"
            />
          </div>

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between relative z-20 w-full">
            {/* Left Content Area */}
            <div className="flex-1 w-full px-6 pt-[93px] pb-[50px] sm:p-10 lg:py-20 lg:pl-16 lg:pr-8 xl:py-24 xl:pl-20 flex flex-col justify-center">
              <SectionTag
                text="GET IN TOUCH"
                theme="dark"
                className="mb-4 sm:mb-6"
              />

              <h2 className="text-[34px] sm:text-4xl md:text-5xl lg:text-[54px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.12] lg:leading-[1.1] mb-4 sm:mb-6">
                Subscribe to our <br className="hidden sm:inline" />
                newsletter
              </h2>

              <p className="text-[#0e0e0e]/85 text-[15px] sm:text-base lg:text-[17px] leading-[24px] sm:leading-[28px] font-['Mona_Sans:Regular',sans-serif] font-normal max-w-lg mb-8 sm:mb-10">
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
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-4 max-w-lg"
                >
                  <div className="flex-1 border-b border-[#0e0e0e]/30 focus-within:border-[#0e0e0e] transition-colors pb-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-transparent outline-none text-[#0e0e0e] placeholder-[#0e0e0e]/70 font-['Mona_Sans:Regular',sans-serif] font-normal text-base"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#0e0e0e] text-white py-4 sm:py-3.5 px-8 rounded-full font-['Mona_Sans:Bold',sans-serif] font-bold text-base hover:bg-neutral-800 transition-colors shadow-none text-center cursor-pointer shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Typewriter Image (Image 1 desktop layout) */}
            <div className="w-full lg:w-[48%] xl:w-[46%] relative flex items-end justify-center lg:justify-end px-4 sm:px-6 pb-0 lg:pb-0 lg:px-0 lg:pr-8 mt-4 sm:mt-6 lg:mt-0">
              <div className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[520px] xl:max-w-[580px] lg:-mt-20 xl:-mt-28 lg:-mb-6 xl:-mb-8">
                <img
                  src={siteImages.typewriterBanner}
                  alt="Vintage typewriter with white paper loaded in carriage"
                  className="w-full h-auto object-contain drop-shadow-2xl relative z-20 block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
