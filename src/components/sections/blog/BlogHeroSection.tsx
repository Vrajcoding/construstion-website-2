import React from "react"
import SectionTag from "../../common/SectionTag"
import { siteImages } from "../../../data/siteData"

export default function BlogHeroSection() {
  return (
    <section className="bg-[#0e0e0e] text-white pt-16 sm:pt-[97px] pb-24 sm:pb-[240px] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Header: Tag & Main Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <SectionTag
            text="OUR BLOG"
            theme="light"
            dualLines
            className="mb-4"
          />

          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white tracking-tight leading-[1.08]">
            Articles & resources
          </h1>
        </div>

        {/* 2-Column Featured Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: 1 Large Featured Article */}
          <div className="lg:col-span-6 xl:col-span-7 group cursor-pointer">
            {/* Featured Image */}
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] overflow-hidden bg-neutral-900 shadow-xl">
              <img
                src={siteImages.blog1}
                alt="Modern living room with minimalist couch and coffee table"
                className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Category & Date */}
            <div className="pt-6 sm:pt-8 flex items-center gap-3 select-none">
              <span className="font-['Mona_Sans:Medium',sans-serif] text-[14px] sm:text-[15px] font-bold tracking-[1.2px] uppercase text-white">
                REMODELING
              </span>
              <span className="w-6 h-[1.5px] bg-white/40 rounded-full" />
              <span className="font-['Mona_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] tracking-[0.8px] uppercase text-white/70">
                APR 18, 2023
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-['Mona_Sans:Medium',sans-serif] font-bold text-white mt-3 group-hover:text-[#ffd43e] transition-colors leading-[1.25]">
              12 designers tricks for picking the perfect home color palette
            </h2>

            {/* Left Card Description */}
            <p className="text-[#a0a0a0] text-[16px] sm:text-[17px] font-['Mona_Sans:Regular',sans-serif] leading-[28px] mt-4">
              Lorem ipsum dolor sit amet consectetur aenean sit urna aliquet
              tellus egestas id elementum venenatis proin a congue commodo.
            </p>
          </div>

          {/* Right Column: 2 Stacked Article Cards */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between pt-2 lg:pt-0">
            {/* Article 1 (Top) */}
            <div className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3 select-none">
                <span className="font-['Mona_Sans:Medium',sans-serif] text-[14px] sm:text-[15px] font-bold tracking-[1.2px] uppercase text-white">
                  DESIGN
                </span>
                <span className="w-6 h-[1.5px] bg-white/40 rounded-full" />
                <span className="font-['Mona_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] tracking-[0.8px] uppercase text-white/70">
                  APR 18, 2023
                </span>
              </div>

              <h3 className="text-2xl sm:text-[28px] font-['Mona_Sans:Medium',sans-serif] font-bold text-white group-hover:text-[#ffd43e] transition-colors leading-[1.25]">
                25 color trends designers can&apos;t wait to see in 2023
              </h3>

              <p className="text-[#a0a0a0] text-[16px] sm:text-[17px] font-['Mona_Sans:Regular',sans-serif] leading-[28px] mt-4">
                Viverra aenean feugiat lectus sollicitudin odio habitasse id
                sagittis sollicitudin et nec donec mi eu quam nunc sed leo.
              </p>
            </div>

            {/* Divider Line */}
            <div className="my-8 sm:my-10 border-t border-[#222222] w-full" />

            {/* Article 2 (Bottom) */}
            <div className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3 select-none">
                <span className="font-['Mona_Sans:Medium',sans-serif] text-[14px] sm:text-[15px] font-bold tracking-[1.2px] uppercase text-white">
                  CONSTRUCTION
                </span>
                <span className="w-6 h-[1.5px] bg-white/40 rounded-full" />
                <span className="font-['Mona_Sans:Regular',sans-serif] text-[14px] sm:text-[15px] tracking-[0.8px] uppercase text-white/70">
                  APR 14, 2023
                </span>
              </div>

              <h3 className="text-2xl sm:text-[28px] font-['Mona_Sans:Medium',sans-serif] font-bold text-white group-hover:text-[#ffd43e] transition-colors leading-[1.25]">
                Clever DIY home improvements you can do during the pandemic
              </h3>

              <p className="text-[#a0a0a0] text-[16px] sm:text-[17px] font-['Mona_Sans:Regular',sans-serif] leading-[28px] mt-4">
                Euismod placerat eu nec blandit volutpat magna sed fames arcu
                pharetra et arcu odio sollicitudin morbi tellus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
