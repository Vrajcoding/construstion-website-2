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
      className="bg-white py-[120px] sm:py-20 lg:py-56 overflow-visible border-t border-[#e7e7e7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ROW 1: OUR STORY (Text Left, Image Right on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-6 space-y-6 max-w-2xl order-1">
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-[1.5px] bg-[#0e0e0e]" />
              <span className="font-['Mona_Sans:Medium',sans-serif] text-[13px] sm:text-[14px] font-medium tracking-[1.5px] text-[#0e0e0e] uppercase">
                OUR STORY
              </span>
            </div>
            <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[56px] 2xl:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] lg:leading-[1.12]">
              <span className="block whitespace-normal lg:whitespace-nowrap">An exceptional quality</span>
              <span className="block whitespace-normal lg:whitespace-nowrap">that can’t be beaten</span>
            </h2>
            <p className="text-[#646464] text-base sm:text-lg lg:text-[18px] font-['Mona_Sans:Regular',sans-serif] leading-relaxed sm:leading-[30px] pt-1 max-w-xl">
              Lorem ipsum dolor sit amet consectetur vitae pulvinar luctus quam
              ornare imperdiet bibendum consectetur amet morbi mauris non semper
              eget scelerisque proin eros sodales.
            </p>
            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                fullWidthMobile
                className="text-[16px] lg:text-[18px]"
                onClick={onLearnMore}
              >
                Learn more
              </Button>
            </div>
          </div>

          {/* Right Column: Image with Top-Right Notch */}
          <div className="lg:col-span-6 order-2">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-neutral-900 shadow-md">
              <img
                src={siteImages.roofBanner}
                alt="Construction contractors inspecting roof"
                className="w-full h-full object-cover grayscale contrast-105"
              />
              <div className="absolute top-0 right-0 z-10 pointer-events-none">
                <DecorativeGrid pattern="top-right" fillColor="white" />
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: OUR MISSION (Image Left, Text Right with Overlap on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mt-16 sm:mt-24 lg:mt-32">
          {/* Left Column on Desktop / Bottom on Mobile: Image with Bottom-Left Notch */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative z-0">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-neutral-900 shadow-md">
              <img
                src={siteImages.aboutWorker}
                alt="Contractor on building scaffolding"
                className="w-full h-full object-cover grayscale contrast-105"
              />
              <div className="absolute bottom-0 left-0 z-10 pointer-events-none">
                <DecorativeGrid pattern="triplet-bottom-left" fillColor="white" />
              </div>
            </div>
          </div>

          {/* Right Column on Desktop / Top on Mobile: Text & CTA with ONLY title overlapping on large display */}
          <div className="lg:col-span-6 space-y-6 max-w-2xl order-1 lg:order-2 relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-[1.5px] bg-[#0e0e0e]" />
              <span className="font-['Mona_Sans:Medium',sans-serif] text-[13px] sm:text-[14px] font-medium tracking-[1.5px] text-[#0e0e0e] uppercase">
                OUR MISSION
              </span>
            </div>
            <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[56px] 2xl:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] lg:leading-[1.12] -ml-0 lg:-ml-20 xl:-ml-28 lg:w-[125%] xl:w-[130%] relative z-20">
              <span className="block whitespace-normal lg:whitespace-nowrap">Our mission is to deliver</span>
              <span className="block whitespace-normal lg:whitespace-nowrap">high quality work</span>
            </h2>
            <p className="text-[#646464] text-base sm:text-lg lg:text-[18px] font-['Mona_Sans:Regular',sans-serif] leading-relaxed sm:leading-[30px] pt-1 max-w-xl">
              Lorem ipsum dolor sit amet consectetur urna sed odio id mattis
              donec viverra sed neque sit porta mauris eros aliquet volutpat eu
              consequat at turpis aliquet maecenas porta dignissim.
            </p>
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                showArrow
                fullWidthMobile
                className="text-[16px] lg:text-[18px]"
                onClick={onOpenQuote}
              >
                Get a quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
