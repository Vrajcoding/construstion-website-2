import React from "react"
import { statsData } from "../../data/siteData"

export default function StatsSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:pt-52 xl:pt-60 lg:pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 items-center lg:items-start justify-between">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <span className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="text-[#646464] text-sm sm:text-lg lg:text-[20px] xl:text-[22px] font-normal font-['Mona_Sans:Regular',sans-serif] leading-snug sm:leading-[26px] pt-2 sm:pt-3">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Divider beneath stats */}
        <div className="mt-10 sm:mt-14 lg:mt-16 h-px bg-[#e7e7e7] w-full" />
      </div>
    </section>
  )
}
