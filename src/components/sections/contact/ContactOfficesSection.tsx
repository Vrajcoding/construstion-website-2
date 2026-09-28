import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { officeLocationsData } from "../../../data/siteData"

export default function ContactOfficesSection() {
  const [activeOfficeId, setActiveOfficeId] = useState("la")

  const currentOffice =
    officeLocationsData.find((o) => o.id === activeOfficeId) ||
    officeLocationsData[0]

  return (
    <section className="bg-white pt-0 pb-[120px] sm:pt-0 sm:pb-28 lg:pt-0 lg:pb-[240px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title on Left, Location Tabs on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-0 sm:pb-8 lg:pb-12 border-b-0 sm:border-b border-[#c5c5c5]">
          {/* Left: Category Tag & Headline */}
          <div className="space-y-3 mb-2 sm:mb-0">
            <div className="inline-flex items-center gap-3 select-none">
              <span className="font-['Mona_Sans:Medium',sans-serif] text-[15px] sm:text-[16px] font-medium tracking-[0.96px] uppercase text-[#0e0e0e]">
                OUR OFFICES
              </span>
              <span className="w-7 h-[1.5px] bg-[#0e0e0e] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.1]">
              Visit our offices
            </h2>
          </div>

          {/* Right: Location Tabs - Vertical list with border-b on mobile, horizontal with vertical dividers on desktop */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-5 md:gap-6 lg:pb-3 w-full sm:w-auto">
            {officeLocationsData.map((office, idx) => {
              const isActive = activeOfficeId === office.id
              return (
                <React.Fragment key={office.id}>
                  {idx > 0 && (
                    <span
                      className="h-6 sm:h-8 md:h-10 w-[1px] bg-[#c5c5c5] hidden sm:inline-block self-center"
                      aria-hidden="true"
                    />
                  )}
                  <button
                    onClick={() => setActiveOfficeId(office.id)}
                    className={`text-[14px] sm:text-[15px] md:text-[16px] tracking-[1px] uppercase transition-colors cursor-pointer w-full sm:w-auto text-left sm:text-center py-4 sm:py-1 border-b border-[#c5c5c5] sm:border-b-0 block sm:inline-block ${
                      isActive
                        ? "font-['Mona_Sans:Bold',sans-serif] font-bold text-[#0e0e0e]"
                        : "font-['Mona_Sans:Medium',sans-serif] font-medium text-[#777777] hover:text-[#0e0e0e]"
                    }`}
                  >
                    {office.name || office.title}
                  </button>
                </React.Fragment>
              )
            })}
          </div>
        </div>

        {/* 2-Column Content: Photo on Left, Office Details on Right */}
        <div className="pt-10 sm:pt-14 lg:pt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          {/* Left: Office Photo with Pure Opacity Crossfade */}
          <div className="overflow-hidden bg-[#f0f0f0] relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[824/626] lg:h-auto">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentOffice.id}
                src={currentOffice.image}
                alt={currentOffice.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className="w-full h-full object-cover grayscale absolute inset-0"
              />
            </AnimatePresence>
          </div>

          {/* Right: Location Info & Contact Details with Pure Opacity Crossfade */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentOffice.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-[26px] sm:text-3xl lg:text-[44px] font-['Mona_Sans:Bold',sans-serif] sm:font-['Mona_Sans:Medium',sans-serif] font-bold sm:font-medium text-[#0e0e0e] leading-tight mb-3 sm:mb-4 lg:mb-4">
                  {currentOffice.title}
                </h3>

                <p className="text-[#646464] text-[16px] sm:text-base lg:text-[18px] font-['Mona_Sans:Regular',sans-serif] leading-[24px] sm:leading-[28px] lg:leading-[28px] max-w-lg mb-10 sm:mb-8 lg:mb-12">
                  {currentOffice.description}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-y-8 lg:gap-y-9 gap-x-6 pb-6 sm:pb-8 lg:pb-10 border-b border-[#e5e5e5]">
                  <div>
                    <span className="block text-[14px] sm:text-[13px] lg:text-[14px] font-['Mona_Sans:Medium',sans-serif] tracking-[1.2px] uppercase text-[#777777] mb-1.5 sm:mb-2 font-medium">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href={`mailto:${currentOffice.email}`}
                      className="text-[16px] sm:text-[16px] lg:text-[17px] font-['Mona_Sans:Bold',sans-serif] font-bold text-[#0e0e0e] hover:underline break-all"
                    >
                      {currentOffice.email}
                    </a>
                  </div>

                  {currentOffice.phone && (
                    <div>
                      <span className="block text-[14px] sm:text-[13px] lg:text-[14px] font-['Mona_Sans:Medium',sans-serif] tracking-[1.2px] uppercase text-[#777777] mb-1.5 sm:mb-2 font-medium">
                        PHONE NUMBER
                      </span>
                      <a
                        href={`tel:${currentOffice.phone.replace(/[^0-9]/g, "")}`}
                        className="text-[16px] sm:text-[16px] lg:text-[17px] font-['Mona_Sans:Bold',sans-serif] font-bold text-[#0e0e0e] hover:underline"
                      >
                        {currentOffice.phone}
                      </a>
                    </div>
                  )}

                  {currentOffice.location && (
                    <div className="sm:col-span-2">
                      <span className="block text-[14px] sm:text-[13px] lg:text-[14px] font-['Mona_Sans:Medium',sans-serif] tracking-[1.2px] uppercase text-[#777777] mb-1.5 sm:mb-2 font-medium">
                        LOCATION
                      </span>
                      <p className="text-[16px] sm:text-[16px] lg:text-[17px] font-['Mona_Sans:Bold',sans-serif] font-bold text-[#0e0e0e]">
                        {currentOffice.location}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
