import React from "react"
import Button from "../common/Button"
import DecorativeGrid from "../common/DecorativeGrid"
import { siteImages } from "../../data/siteData"

export interface HeroSectionProps {
  onOpenQuote?: () => void
}

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  return (
    <section id="home" className="relative bg-[#ffd43e] overflow-hidden">
      {/* Bottom White Band (Bottom area of the hero section is White) */}
      <div
        className="absolute inset-x-0 bottom-0 h-[160px] sm:h-[190px] lg:h-[220px] bg-white pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Absolute Sharp Rectangle Contractor Photo (Full height extending from top of yellow down through white band) */}
      <div className="absolute top-0 bottom-0 right-0 left-[54%] xl:left-[55%] z-0 pointer-events-none hidden lg:block">
        <div className="relative w-full h-full overflow-hidden bg-neutral-900 rounded-none">
          <img
            src={siteImages.hero}
            alt="Contractor holding clipboard on construction site"
            className="w-full h-full object-cover object-top grayscale contrast-105 rounded-none"
            loading="eager"
          />

          {/* Signature 2x2 Decorative Grid at Bottom Right of Rectangle Photo */}
          <div className="absolute bottom-0 right-0 z-10 pointer-events-none">
            <DecorativeGrid pattern="hero-checker" fillColor="white" />
          </div>
        </div>
      </div>

      {/* Foreground Container with Overlapping Headline & Exact Yellow Height below Buttons */}
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="pt-14 sm:pt-20 lg:pt-28 pb-[280px] sm:pb-[340px] lg:pb-[390px]">
          {/* Headline: max-w-[890px] so words extend over the contractor rectangle image */}
          <div className="max-w-[890px] mb-8">
            <h1 className="text-5xl sm:text-7xl lg:text-[82px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.07] select-none">
              We provide effective <br className="hidden sm:inline" />
              contracting services
            </h1>
          </div>

          {/* Subtext and Buttons */}
          <div className="max-w-[560px] space-y-8">
            <p className="text-[17px] sm:text-[18px] text-[#2f2f2f] leading-[30px] font-['Mona_Sans:Medium',sans-serif] font-medium">
              Lorem ipsum dolor sit amet consectetur sit id quis magna imperdiet
              neque magnis nam eu volutpat tellus est elit aliquam ut suscipit.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                showArrow
                onClick={onOpenQuote}
              >
                Get a quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const el = document.getElementById("contact")
                  el?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact us
              </Button>
            </div>
          </div>

          {/* Mobile/Tablet Sharp Rectangle Image */}
          <div className="mt-12 lg:hidden relative max-w-md mx-auto aspect-[4/5] overflow-hidden shadow-xl bg-neutral-900 rounded-none">
            <img
              src={siteImages.hero}
              alt="Contractor holding clipboard on construction site"
              className="w-full h-full object-cover object-center grayscale contrast-105 rounded-none"
            />
            <div className="absolute bottom-0 right-0 z-10">
              <DecorativeGrid pattern="hero-checker" fillColor="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
