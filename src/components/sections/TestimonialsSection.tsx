import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SectionTag from "../common/SectionTag"
import DecorativeGrid from "../common/DecorativeGrid"
import { testimonialsData, siteImages } from "../../data/siteData"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const currentTestimonial = testimonialsData[currentIndex]

  // Auto-slide every 5 seconds, pausing when user hovers or interacts
  useEffect(() => {
    if (isPaused) return
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
    }, 5500)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, currentIndex])

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
  }

  return (
    <section
      className="bg-white py-14 sm:py-20 lg:py-28 overflow-x-clip"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <SectionTag text="TESTIMONIALS" />
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] sm:leading-[1.12]">
              What our clients <br className="hidden sm:inline" />
              say about us
            </h2>
          </div>

          <p className="text-[#646464] text-base sm:text-lg leading-relaxed sm:leading-[30px] font-['Mona_Sans:Medium',sans-serif] max-w-md lg:max-w-[520px]">
            Lorem ipsum dolor sit amet consectetur senectus velit faucibus
            quisque at ut vitae platea justo nec mattis.
          </p>
        </div>

        {/* Overlapping Testimonial Card & Behind Structural Photo */}
        <div className="relative min-h-[480px] lg:min-h-[580px] flex flex-col lg:block justify-center">
          {/* Right: Structural Building Photo */}
          <div className="relative w-full lg:w-[62%] xl:w-[64%] lg:ml-auto h-[320px] sm:h-[420px] lg:h-[560px] overflow-hidden bg-neutral-900 rounded-none shadow-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentTestimonial.id}
                src={currentTestimonial.image || siteImages.testimonialStructure}
                alt={currentTestimonial.author}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full object-cover grayscale contrast-110 rounded-none"
              />
            </AnimatePresence>

            {/* Signature Bottom-Right White Accent Grid */}
            <div className="absolute bottom-0 right-0 pointer-events-none hidden sm:block z-10">
              <DecorativeGrid
                key={`grid-${currentIndex}`}
                pattern="grid-3x2"
                fillColor="white"
              />
            </div>
          </div>

          {/* Left: Overlapping Quote Card */}
          <div className="relative -mt-16 sm:-mt-20 mx-2 sm:mx-4 lg:mx-0 lg:mt-0 lg:absolute lg:top-[8%] xl:top-[10%] lg:left-0 lg:w-[56%] xl:w-[52%] z-20 bg-[#f4f4f4] p-6 sm:p-10 lg:p-12 shadow-2xl flex flex-col justify-between rounded-none">
            {/* Quote and Description */}
            <div className="relative min-h-[160px] sm:min-h-[190px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="space-y-4 sm:space-y-5"
                >
                  <h3 className="text-xl sm:text-2xl lg:text-[30px] xl:text-[34px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] leading-snug sm:leading-[42px]">
                    “{currentTestimonial.quote}”
                  </h3>

                  <p className="text-[#2f2f2f] text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[28px] font-['Mona_Sans:Regular',sans-serif]">
                    {currentTestimonial.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Section: Author Meta Profile & Carousel Navigation Arrows */}
            <div className="mt-8 pt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex items-center gap-4"
                >
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.author}
                    className="w-12 h-12 rounded-full object-cover grayscale border-2 border-white shadow-sm shrink-0"
                  />
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <h4 className="font-['Mona_Sans:Medium',sans-serif] font-medium text-sm sm:text-base tracking-[0.96px] uppercase text-[#0e0e0e]">
                      {currentTestimonial.author}
                    </h4>
                    <span className="text-black/30 font-light">—</span>
                    <p className="text-[#0e0e0e] text-xs sm:text-sm uppercase tracking-wider font-['Mona_Sans:Medium',sans-serif] font-medium">
                      {currentTestimonial.location || currentTestimonial.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Divider & Navigation Arrow Buttons */}
              <div className="border-t border-[#d8d8d8] mt-6 pt-5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="group flex items-center justify-center text-[#0e0e0e] hover:text-black transition-colors p-2 -ml-2 cursor-pointer select-none"
                >
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 group-hover:-translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 12H5m7 7l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="group flex items-center justify-center text-[#0e0e0e] hover:text-black transition-colors p-2 -mr-2 cursor-pointer select-none"
                >
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-7-7l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
