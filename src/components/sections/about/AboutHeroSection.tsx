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
    <section className="bg-[#ffd43e] relative overflow-hidden py-14 sm:py-20 lg:py-28 transition-all">
      {/* Bottom-Left Stepped Decorative Grid Pattern */}
      <div className="absolute bottom-0 left-0 z-10 pointer-events-none">
        <DecorativeGrid pattern="top-left" fillColor="white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        {/* Centered Main Title */}
        <h1 className="text-4xl lg:text-7xl xl:text-[80px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] lg:leading-[1.12] max-w-4xl mx-auto">
          A team of experts <br className="hidden sm:inline" />
          ready to help you
        </h1>

        {/* Centered Subtitle Paragraph */}
        <p className="text-[#0e0e0e]/80 text-base sm:text-lg lg:text-xl font-['Mona_Sans:Regular',sans-serif] leading-relaxed sm:leading-[32px] max-w-2xl mx-auto mt-5 sm:mt-8">
          Lorem ipsum dolor sit amet consectetur ultrices libero tellus
          vulputate sed eget nisl sapien condimentum. Integer magna rutrum
          iaculis nisl elit magna neque arcu.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 mt-8 sm:mt-10 max-w-xs sm:max-w-none mx-auto">
          <Button
            variant="primary"
            size="lg"
            showArrow
            fullWidthMobile
            onClick={onOpenQuote}
          >
            Join us
          </Button>

          <Button
            variant="outline"
            size="lg"
            fullWidthMobile
            onClick={onScrollToStory}
          >
            Our story
          </Button>
        </div>
      </div>
    </section>
  )
}
