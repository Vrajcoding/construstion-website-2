import React from "react"
import SectionTag from "../common/SectionTag"
import DecorativeGrid from "../common/DecorativeGrid"
import { testimonialData, siteImages } from "../../data/siteData"

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:pt-32 lg:pb-44 overflow-x-clip">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-20">
          <div className="space-y-4 max-w-2xl">
            <SectionTag text="TESTIMONIALS" />
            <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.12] sm:leading-[70px]">
              What our clients <br className="hidden sm:inline" />
              say about us
            </h2>
          </div>

          <p className="text-[#646464] text-[17px] sm:text-[18px] leading-[30px] font-['Mona_Sans:Medium',sans-serif] max-w-md">
            Lorem ipsum dolor sit amet consectetur senectus velit faucibus
            quisque at ut vitae platea justo nec mattis.
          </p>
        </div>

        {/* Overlapping Testimonial Card & Behind Structural Photo */}
        <div className="relative min-h-[500px] lg:min-h-[640px] flex flex-col lg:block justify-center">
          {/* Right: Structural Building Photo (Sitting Behind) */}
          <div className="relative w-full lg:w-[65%] xl:w-[66%] lg:ml-auto h-[400px] sm:h-[500px] lg:h-[640px] overflow-hidden bg-neutral-900 rounded-none shadow-xl">
            <img
              src={siteImages.testimonialStructure}
              alt="Building construction structural framework"
              className="w-full h-full object-cover grayscale contrast-110 rounded-none"
            />

            {/* Signature Bottom-Right White Accent Grid */}
            <div
              className="absolute bottom-0 right-0 pointer-events-none hidden sm:grid grid-cols-2 grid-rows-2 w-32 h-32 lg:w-40 lg:h-40"
              aria-hidden="true"
            >
              <div className="bg-white border border-white" />
              <div className="bg-transparent border border-transparent" />
              <div className="bg-transparent border border-transparent" />
              <div className="bg-white border border-white" />
            </div>
          </div>

          {/* Left: Overlapping Quote Card (Margin Top, Breakout Past Bottom, Sits On Top) */}
          <div className="relative -mt-16 sm:-mt-20 mx-3 sm:mx-6 lg:mx-0 lg:mt-0 lg:absolute lg:top-[16%] lg:bottom-[-60px] lg:left-0 lg:w-[54%] xl:w-[52%] z-20 bg-[#f4f4f4] p-8 sm:p-12 lg:p-16 shadow-2xl flex flex-col justify-between rounded-none">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] leading-[1.18] sm:leading-[50px]">
                "{testimonialData.quote}"
              </h3>

              <p className="text-[#2f2f2f] text-base sm:text-[18px] leading-[28px] sm:leading-[30px] font-['Mona_Sans:Regular',sans-serif]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit senectus
                velit faucibus quisque at ut vitae platea justo nec mattis
                adipiscing donec tellus vulputate ac nulla ut in aliquam.
              </p>
            </div>

            {/* Author Meta Profile */}
            <div className="pt-6 mt-6 border-t border-black/15 flex items-center gap-4">
              <img
                src={testimonialData.avatar}
                alt={testimonialData.author}
                className="w-12 h-12 rounded-full object-cover grayscale border-2 border-white shadow-md"
              />
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                <h4 className="font-['Mona_Sans:Medium',sans-serif] font-medium text-sm sm:text-base tracking-[0.96px] uppercase text-[#0e0e0e]">
                  {testimonialData.author}
                </h4>
                <span className="hidden sm:inline text-black/30">—</span>
                <p className="text-[#646464] text-xs sm:text-sm uppercase tracking-wider font-medium">
                  {testimonialData.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
