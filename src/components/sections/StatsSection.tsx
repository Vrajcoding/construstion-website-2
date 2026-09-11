import React from "react"
import { statsData } from "../../data/siteData"

export default function StatsSection() {
  return (
    <section className="bg-white py-[120px] relative z-10">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 items-start justify-between">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-start">
              <span className="text-6xl sm:text-7xl lg:text-[82px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[88px] -mb-1">
                {stat.value}
              </span>
              <span className="text-[#646464] text-lg sm:text-[22px] lg:text-[24px] font-normal font-['Mona_Sans:Regular',sans-serif] leading-[26px] pt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Divider beneath stats */}
        <div className="mt-[120px] h-px bg-[#e7e7e7] w-full" />
      </div>
    </section>
  )
}
