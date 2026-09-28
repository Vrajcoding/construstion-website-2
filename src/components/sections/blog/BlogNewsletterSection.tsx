import React, { useState } from "react"
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
    <section className="bg-white py-14 sm:py-20 lg:py-28 relative overflow-hidden lg:overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#ffd43e] relative rounded-none shadow-xl w-full min-h-[440px] sm:min-h-[480px] lg:min-h-[500px] flex flex-col lg:flex-row justify-between overflow-visible">
          {/* Bottom-Right White Square Notch Cutout matching design reference */}
          <div
            className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white pointer-events-none z-20"
            aria-hidden="true"
          />

          {/* Left Content Area */}
          <div className="w-full lg:w-[58%] xl:w-[56%] p-8 sm:p-12 lg:py-20 lg:pl-16 lg:pr-8 xl:py-24 xl:pl-20 relative z-10 flex flex-col justify-center">
            {/* Tag: — GET IN TOUCH */}
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <span className="w-5 h-[1.5px] bg-[#0e0e0e]" />
              <span className="font-['Mona_Sans:Medium',sans-serif] text-[13px] sm:text-[14px] font-medium tracking-[1.5px] text-[#0e0e0e] uppercase">
                GET IN TOUCH
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[34px] sm:text-5xl lg:text-[56px] xl:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] mb-5 sm:mb-6">
              Subscribe to our <br />
              newsletter
            </h2>

            {/* Description */}
            <p className="text-[#0e0e0e] text-[15px] sm:text-base lg:text-[17px] leading-relaxed sm:leading-[28px] font-['Mona_Sans:Regular',sans-serif] font-normal max-w-lg mb-8 sm:mb-10">
              Lorem ipsum dolor sit amet consectetur senectus velit faucibus non
              quisque at ut vitae platea justo nec mattis.
            </p>

            {/* Form */}
            {isSubmitted ? (
              <div className="p-4 bg-[#0e0e0e] text-white rounded-full text-center font-['Mona_Sans:Medium',sans-serif] font-medium animate-in fade-in max-w-md">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md w-full"
              >
                <div className="flex-1 border-b border-[#0e0e0e]/40 focus-within:border-[#0e0e0e] transition-colors pb-3">
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
                  className="bg-[#0e0e0e] hover:bg-[#222222] text-white py-3.5 px-8 rounded-full font-['Mona_Sans:Bold',sans-serif] font-bold text-base transition-colors shrink-0 cursor-pointer shadow-none text-center"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Desktop Right Column: Typewriter positioned to the right with paper extending over top edge */}
          <div className="hidden lg:block absolute -top-16 xl:-top-24 bottom-0 right-10 xl:right-16 2xl:right-20 w-[420px] xl:w-[480px] 2xl:w-[520px] z-10 pointer-events-none">
            <img
              src={siteImages.typewriterBanner}
              alt="Vintage typewriter with white paper loaded in carriage"
              className="w-full h-full object-contain object-bottom drop-shadow-2xl"
            />
          </div>

          {/* Mobile/Tablet Fallback: Clean Typewriter below form */}
          <div className="block lg:hidden w-full relative z-10 px-4 pt-4 pb-0 -mb-2">
            <div className="max-w-[340px] sm:max-w-[420px] mx-auto">
              <img
                src={siteImages.typewriterBanner}
                alt="Vintage typewriter with white paper loaded in carriage"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
