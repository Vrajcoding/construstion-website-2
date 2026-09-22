import React from "react"
import SectionTag from "../../common/SectionTag"
import DecorativeGrid from "../../common/DecorativeGrid"
import { siteImages } from "../../../data/siteData"

export default function BlogHeroSection() {
  return (
    <section className="bg-[#0e0e0e] text-white pt-14 pb-[120px] sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-[224px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Header: Tag & Main Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <SectionTag
            text="OUR BLOG"
            theme="light"
            dualLines
            className="mb-4"
          />

          <h1 className="text-4xl lg:text-[82px] xl:text-[82px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white tracking-tight leading-[1.1] lg:leading-[1.08]">
            Articles & resources
          </h1>
        </div>

        {/* 2-Column Featured Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left Column: Image on top, Content on bottom */}
          <div className="group cursor-pointer flex flex-col justify-between pb-0 lg:pb-0 lg:pr-8 xl:pr-12">
            {/* Featured Image */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] overflow-hidden bg-neutral-900 shadow-xl">
              <img
                src={siteImages.blog1}
                alt="Modern living room with minimalist couch and coffee table"
                className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom Content Under Image with Bottom Border */}
            <div className="pt-6 sm:pt-8 pb-8 sm:pb-12 border-b border-[#c5c5c5]/40 flex flex-col flex-1 justify-center">
              {/* Category & Date */}
              <div className="flex items-center gap-3 select-none mb-3">
                <span className="font-['Mona_Sans:Medium',sans-serif] text-[14px] lg:text-[16px] font-medium tracking-[1.2px] uppercase text-white">
                  REMODELING
                </span>
                <span className="w-6 h-[1.5px] bg-white/40 rounded-full" />
                <span className="font-['Mona_Sans:Regular',sans-serif] text-[14px] lg:text-[16px] font-normal tracking-[0.8px] uppercase text-white/70">
                  APR 18, 2023
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-[26px] leading-[34px] sm:text-2xl sm:leading-[34px] lg:text-[38px] lg:leading-[46px] font-['Mona_Sans:Semi_Bold',sans-serif] font-semibold text-white mb-3 group-hover:text-[#ffd43e] transition-colors line-clamp-none sm:line-clamp-2">
                12 designers tricks for picking the perfect home color palette
              </h2>

              {/* Left Card Description */}
              <p className="text-white/80 text-[16px] leading-[26px] sm:text-base sm:leading-[28px] lg:text-[18px] lg:leading-[30px] font-['Mona_Sans:Regular',sans-serif] font-normal line-clamp-none sm:line-clamp-2">
                Lorem ipsum dolor sit amet consectetur aenean sit urna aliquet
                tellus egestas id elementum venenatis proin a congue commodo.
              </p>
            </div>
          </div>

          {/* Right Column: Content on top, Divider, Content on bottom */}
          <div className="border-t-0 lg:border-l border-[#c5c5c5]/40 flex flex-col justify-between">
            {/* Article 1 (Top Content) */}
            <div className="group cursor-pointer flex flex-col justify-center py-8 sm:py-8 lg:py-10 px-0 lg:px-8 xl:px-12 flex-1">
              <div className="flex items-center gap-3 mb-2 sm:mb-3 select-none">
                <span className="font-['Mona_Sans:Medium',sans-serif] text-[14px] lg:text-[16px] font-medium tracking-[1.2px] uppercase text-white">
                  DESIGN
                </span>
                <span className="w-6 h-[1.5px] bg-white/40 rounded-full" />
                <span className="font-['Mona_Sans:Regular',sans-serif] text-[14px] lg:text-[16px] font-normal tracking-[0.8px] uppercase text-white/70">
                  APR 18, 2023
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-[20px] leading-[28px] sm:text-xl sm:leading-[30px] lg:text-[28px] lg:leading-[36px] font-['Mona_Sans:Semi_Bold',sans-serif] font-semibold text-white group-hover:text-[#ffd43e] transition-colors mt-2 mb-2 sm:mt-0 sm:mb-0 line-clamp-2">
                25 color trends designers can&apos;t wait to see in 2023
              </h3>

              {/* Description */}
              <p className="text-white/80 text-[16px] leading-[26px] sm:text-base sm:leading-[28px] lg:text-[18px] lg:leading-[30px] font-['Mona_Sans:Regular',sans-serif] font-normal mt-2 sm:mt-3 line-clamp-2">
                Viverra aenean feugiat lectus sollicitudin odio habitasse id
                sagittis sollicitudin et nec donec mi eu quam nunc sed leo.
              </p>
            </div>

            {/* Horizontal Divider Line */}
            <div className="border-t border-[#c5c5c5]/40 w-full" />

            {/* Article 2 (Bottom Content) */}
            <div className="group cursor-pointer flex flex-col justify-center py-8 sm:py-8 lg:py-10 px-0 lg:px-8 xl:px-12 flex-1">
              <div className="flex items-center gap-3 mb-2 sm:mb-3 select-none">
                <span className="font-['Mona_Sans:Medium',sans-serif] text-[14px] lg:text-[16px] font-medium tracking-[1.2px] uppercase text-white">
                  CONSTRUCTION
                </span>
                <span className="w-6 h-[1.5px] bg-white/40 rounded-full" />
                <span className="font-['Mona_Sans:Regular',sans-serif] text-[14px] lg:text-[16px] font-normal tracking-[0.8px] uppercase text-white/70">
                  APR 14, 2023
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-[20px] leading-[28px] sm:text-xl sm:leading-[30px] lg:text-[28px] lg:leading-[36px] font-['Mona_Sans:Semi_Bold',sans-serif] font-semibold text-white group-hover:text-[#ffd43e] transition-colors mt-2 mb-2 sm:mt-0 sm:mb-0 line-clamp-2">
                Clever DIY home improvements you can do during the pandemic
              </h3>

              {/* Description */}
              <p className="text-white/80 text-[16px] leading-[26px] sm:text-base sm:leading-[28px] lg:text-[18px] lg:leading-[30px] font-['Mona_Sans:Regular',sans-serif] font-normal mt-2 sm:mt-3 line-clamp-2">
                Euismod placerat eu nec blandit volutpat magna sed fames arcu
                pharetra et arcu odio sollicitudin morbi tellus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-Right 2x3 Decorative Grid Accent */}
      <div className="absolute bottom-0 right-0 pointer-events-none z-0">
        <DecorativeGrid pattern="grid-3x2-right" fillColor="white" />
      </div>
    </section>
  )
}
