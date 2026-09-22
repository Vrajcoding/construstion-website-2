import React from "react"
import SectionTag from "../../common/SectionTag"
import Button from "../../common/Button"
import DecorativeGrid from "../../common/DecorativeGrid"
import SocialIcons from "../../common/SocialIcons"
import { siteImages } from "../../../data/siteData"

export interface AboutStorySectionProps {
  onOpenQuote?: () => void
  onLearnMore?: () => void
}

export default function AboutStorySection({
  onOpenQuote,
  onLearnMore,
}: AboutStorySectionProps) {
  return (
    <section
      id="about-story"
      className="bg-white py-14 sm:py-20 lg:py-28 overflow-visible border-t border-[#e7e7e7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Worker Photo + Narrative & Socials - order-2 on mobile, order-1 on desktop */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 sm:space-y-10 z-10 order-2 lg:order-1">
            {/* Worker Photo with Top-Left Decorative Grid */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-neutral-900 shadow-md">
              <img
                src={siteImages.aboutWorker}
                alt="Senior contractor on construction site"
                className="w-full h-full object-cover grayscale contrast-105"
              />
              <div className="absolute top-0 left-0 z-10 pointer-events-none">
                <DecorativeGrid pattern="top-left" fillColor="white" />
              </div>
            </div>

            {/* Narrative Text, CTAs & Social Bar */}
            <div className="space-y-6 sm:space-y-8 max-w-[540px]">
              <p className="text-[#646464] text-base sm:text-[18px] leading-[28px] sm:leading-[30px] font-['Mona_Sans:Medium',sans-serif] font-medium">
                Lorem ipsum dolor sit amet consectetur senectus velit faucibus
                quisque at ut vitae platea justo nec mattis adipiscing donec
                tellus vulputate ac nulla ut in aliquam ut pulvinar vestibulum
                nulla nisl.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="md"
                  showArrow
                  fullWidthMobile
                  onClick={onOpenQuote}
                >
                  Get a quote
                </Button>
                <Button variant="outline" size="md" fullWidthMobile onClick={onLearnMore}>
                  Learn more
                </Button>
              </div>

              {/* Divider & Social Bar */}
              <div className="pt-6 border-t border-[#e7e7e7]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-[13px] sm:text-[14px] font-['Mona_Sans:Regular',sans-serif] font-normal tracking-[0.96px] text-[#0e0e0e] uppercase">
                    FOLLOW OUR WORK ON SOCIAL MEDIA
                  </span>
                  <SocialIcons theme="dark" size="sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Section Tag + Overlapping Headline + Photo - order-1 on mobile, order-2 on desktop */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 order-1 lg:order-2">
            {/* Tag & Overlapping Headline */}
            <div className="space-y-4 sm:space-y-6 pt-2 lg:pt-8 shrink-0">
              <SectionTag text="ABOUT US" />

              {/* Overlapping Headline shifted left across columns on desktop */}
              <div className="lg:-ml-28 xl:-ml-40 relative z-20 pointer-events-none">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.12]">
                  A team of reliable and <br className="hidden sm:inline" />
                  experienced contractors
                </h2>
              </div>
            </div>

            {/* Construction Framework Team Photo with Bottom-Right Decorative Accent */}
            <div className="relative w-full flex-1 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[440px] overflow-hidden bg-neutral-900 shadow-md mt-4 sm:mt-6">
              <img
                src={siteImages.hero}
                alt="Contractors surveying building development"
                className="w-full h-full object-cover grayscale contrast-105"
              />
              <div className="absolute bottom-0 right-0 z-10 pointer-events-none">
                <DecorativeGrid pattern="bottom-right" fillColor="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
