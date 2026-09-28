import React from "react"
import { motion } from "framer-motion"
import Button from "../common/Button"
import DecorativeGrid from "../common/DecorativeGrid"
import { siteImages } from "../../data/siteData"

export interface HeroSectionProps {
  onOpenQuote?: () => void
}

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  return (
    <section id="home" className="relative bg-[#ffd43e] overflow-hidden lg:overflow-visible">
      {/* Desktop contractor image: full-bleed right half, extending outside the section into stats */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
        className="hidden lg:block absolute top-0 right-0 left-[50%] xl:left-[52%] 2xl:left-[54%] lg:-bottom-20 xl:-bottom-28 2xl:-bottom-32 z-20 pointer-events-none"
      >
        <div className="relative w-full h-full overflow-hidden bg-neutral-900 rounded-none shadow-2xl">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            src={siteImages.hero}
            alt="Contractor holding clipboard on construction site"
            className="w-full h-full object-cover object-top grayscale contrast-105 rounded-none"
            loading="eager"
          />

          {/* Signature 2x2 Decorative Grid at Bottom Right of Photo */}
          <div className="absolute bottom-0 right-0 z-10 pointer-events-none">
            <DecorativeGrid pattern="hero-checker" fillColor="white" />
          </div>
        </div>
      </motion.div>

      {/* Foreground Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full pt-10 sm:pt-14 pb-8 sm:pb-10 lg:py-24 xl:py-32 lg:min-h-[640px] xl:min-h-[720px] flex flex-col justify-center">
        <div className="w-full lg:w-[72%] xl:w-[68%] 2xl:w-[65%] space-y-6 sm:space-y-8 relative z-30">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="text-4xl lg:text-[64px] xl:text-[76px] 2xl:text-[82px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] select-none text-center lg:text-left"
          >
            <span className="block whitespace-normal lg:whitespace-nowrap">
              We provide effective
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              contracting services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="text-base sm:text-lg text-[#2f2f2f] leading-relaxed sm:leading-[30px] font-['Mona_Sans:Medium',sans-serif] font-medium max-w-xl lg:max-w-[620px] mx-auto lg:mx-0 text-center lg:text-left"
          >
            Lorem ipsum dolor sit amet consectetur sit id quis magna imperdiet
            neque magnis nam eu volutpat tellus est elit aliquam ut suscipit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-1"
          >
            <Button
              variant="primary"
              size="lg"
              showArrow
              arrowPosition="right"
              fullWidthMobile
              onClick={onOpenQuote}
            >
              Get a quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              fullWidthMobile
              onClick={() => {
                const el = document.getElementById("contact")
                el?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact us
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile/Tablet Image: full bleed edge-to-edge, exact 1280/1788 aspect ratio to show full portrait without cutting */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
        className="lg:hidden w-full relative aspect-[1280/1788] overflow-hidden bg-neutral-900 rounded-none mt-2 sm:mt-4"
      >
        <img
          src={siteImages.hero}
          alt="Contractor holding clipboard on construction site"
          className="w-full h-full object-cover object-top grayscale contrast-105 rounded-none"
        />
        <div className="absolute bottom-0 right-0 z-10 pointer-events-none">
          <DecorativeGrid pattern="hero-checker" fillColor="white" />
        </div>
      </motion.div>
    </section>
  )
}
