import React from "react"
import Button from "../../common/Button"
import DecorativeGrid from "../../common/DecorativeGrid"

export interface AboutHeroSectionProps {
  onOpenQuote?: () => void
  onScrollToStory?: () => void
}

export default function AboutHeroSection({
  onOpenQuote,
  onScrollToStory,
}: AboutHeroSectionProps) {
  return (
    <section className="bg-[#ffd43e] relative overflow-hidden pt-16 pb-28 sm:pt-24 sm:pb-36 lg:pt-28 lg:pb-40 transition-all">
      {/* Bottom-Left Stepped Decorative Grid Pattern (Predefined Component) */}
      <div className="absolute bottom-0 left-0 z-10 pointer-events-none">
        <DecorativeGrid pattern="top-left" fillColor="white" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        {/* Centered Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-[76px] xl:text-[82px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] lg:leading-[86px] max-w-4xl mx-auto">
          A team of experts <br className="hidden sm:inline" />
          ready to help you
        </h1>

        {/* Centered Subtitle Paragraph */}
        <p className="text-[#0e0e0e]/80 text-base sm:text-[18px] lg:text-[19px] font-['Mona_Sans:Regular',sans-serif] leading-[28px] sm:leading-[32px] max-w-2xl mx-auto mt-6 sm:mt-8">
          Lorem ipsum dolor sit amet consectetur ultrices libero tellus vulputate
          sed eget nisl sapien condimentum. Integer magna rutrum iaculis nisl
          elit magna neque arcu.
        </p>

        {/* Action Buttons Row (Using Predefined Button Components) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mt-10 sm:mt-12">
          <Button
            variant="primary"
            size="lg"
            showArrow
            onClick={onOpenQuote}
          >
            Join us
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={onScrollToStory}
          >
            Our story
          </Button>
        </div>
      </div>
    </section>
  )
}
