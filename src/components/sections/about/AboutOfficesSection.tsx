import React, { useState } from "react"
import SectionTag from "../../common/SectionTag"
import DecorativeGrid from "../../common/DecorativeGrid"
import { officeLocationsData } from "../../../data/siteData"

function MailCenterIcon() {
  return (
    <svg
      width="54"
      height="40"
      viewBox="0 0 54 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-9 sm:w-14 sm:h-10.5 group-hover:scale-110 active:scale-95 transition-transform duration-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
    >
      <g clipPath="url(#clip0_106_28304)">
        <path
          d="M51.0778 1.875L26.6756 24.2437L2.27344 1.875"
          stroke="#FFD43E"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M22.0483 20.0161L1.96875 38.4312"
          stroke="#FFD43E"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M51.3843 38.4312L31.3047 20.0161"
          stroke="#FFD43E"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="1"
          y="1"
          width="51.3209"
          height="38"
          stroke="#FFD43E"
          strokeWidth="2.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_106_28304">
          <rect width="54" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default function AboutOfficesSection() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null)

  return (
    <>
      {/* MOBILE LAYOUT (block lg:hidden) - as specified in Task 7 & screenshot */}
      <section className="block lg:hidden">
        {/* Top Header with Black Background */}
        <div className="bg-[#0e0e0e] text-white pt-[120px] pb-36 px-4 relative overflow-hidden">
          {/* Top-Left Stepped Decorative Grid Pattern */}
          <div className="absolute top-0 left-0 z-0 pointer-events-none">
            <DecorativeGrid pattern="top-left" fillColor="white" />
          </div>

          <div className="text-center relative z-10">
            <SectionTag
              text="OUR OFFICES"
              theme="yellow"
              dualLines
              textClassName="text-[14px]"
              className="mb-3"
            />
            <h2 className="text-[32px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white tracking-tight leading-[1.08] mt-2">
              Visit our offices <br />
              around the globe
            </h2>
          </div>
        </div>

        {/* White Background Area where Image Overlaps & Remaining Cards Sit */}
        <div className="bg-white px-4 pb-[120px] pt-0">
          <div className="-mt-28 space-y-12">
            {officeLocationsData.map((office, idx) => (
              <div
                key={office.id}
                className={`group flex flex-col justify-between ${idx > 0 ? "pt-4" : ""}`}
              >
                {/* Office Photo with Center Mail Logo on Click & Hover */}
                <div
                  onClick={() =>
                    setActiveCardId(activeCardId === office.id ? null : office.id)
                  }
                  className="card-image-wrap relative w-full aspect-[4/3] bg-[#0e0e0e] shadow-xl cursor-pointer overflow-hidden"
                >
                  <img
                    src={office.image}
                    alt={office.title}
                    className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="card-image-shadow" />

                  {/* Center Mail Logo */}
                  <div
                    className={`absolute inset-0 bg-black/35 flex items-center justify-center z-10 transition-opacity duration-300 ${
                      activeCardId === office.id
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <MailCenterIcon />
                  </div>
                </div>

                {/* Card Content on White Background */}
                <div className="pt-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location Title & Up-Right Arrow */}
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h3 className="text-xl font-['Mona_Sans:Medium',sans-serif] font-bold text-[#0e0e0e]">
                        {office.title}
                      </h3>
                      <span className="text-[#0e0e0e] text-2xl font-light">
                        ↗
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[#646464] text-base font-['Mona_Sans:Regular',sans-serif] leading-relaxed">
                      {office.description}
                    </p>
                  </div>

                  {/* Email Section */}
                  <div className="pt-5 mt-5 border-t border-[#e7e7e7]">
                    <span className="block text-xs font-['Mona_Sans:Medium',sans-serif] tracking-[1.2px] uppercase text-[#646464] mb-1 font-semibold">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href={`mailto:${office.email}`}
                      className="text-base font-['Mona_Sans:Medium',sans-serif] font-bold text-[#0e0e0e] hover:underline"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESKTOP LAYOUT (hidden lg:block) - Task 6 with double padding, 62px title, and images extending outside black background */}
      <section className="hidden lg:block">
        {/* Top Header with Black Background & Double Top Padding */}
        <div className="bg-[#0e0e0e] text-white pt-36 lg:pt-56 pb-48 lg:pb-64 relative overflow-hidden">
          {/* Top-Left Stepped Decorative Grid Pattern */}
          <div className="absolute top-0 left-0 z-0 pointer-events-none">
            <DecorativeGrid pattern="top-left" fillColor="white" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
            <SectionTag
              text="OUR OFFICES"
              theme="yellow"
              dualLines
              className="mb-4"
            />

            <h2 className="text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white tracking-tight leading-[1.08] sm:leading-[1.12]">
              Visit our offices <br />
              around the globe
            </h2>
          </div>
        </div>

        {/* White Background Area where Images Extend Outside the Black Header */}
        <div className="bg-white px-6 lg:px-8 pb-36 lg:pb-56 pt-0">
          <div className="max-w-7xl mx-auto -mt-36 lg:-mt-48 relative z-20">
            {/* 3-Column Offices Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {officeLocationsData.map((office) => (
                <div
                  key={office.id}
                  className="group flex flex-col justify-between transition-all duration-300"
                >
                  {/* Office Photo with Center Mail Logo on Click & Hover */}
                  <div
                    onClick={() =>
                      setActiveCardId(activeCardId === office.id ? null : office.id)
                    }
                    className="card-image-wrap relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/5] bg-[#0e0e0e] shadow-2xl rounded-none cursor-pointer overflow-hidden"
                  >
                    <img
                      src={office.image}
                      alt={office.title}
                      className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="card-image-shadow" />

                    {/* Center Mail Logo */}
                    <div
                      className={`absolute inset-0 bg-black/35 flex items-center justify-center z-10 transition-opacity duration-300 ${
                        activeCardId === office.id
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      <MailCenterIcon />
                    </div>
                  </div>

                  {/* Card Content on White Background */}
                  <div className="pt-6 sm:pt-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Location Title & Up-Right Arrow */}
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <h3 className="text-xl sm:text-2xl lg:text-[26px] font-['Mona_Sans:Medium',sans-serif] font-bold text-[#0e0e0e] group-hover:text-[#ffd43e] transition-colors">
                          {office.title}
                        </h3>
                        <span className="text-[#0e0e0e] text-2xl sm:text-3xl font-light group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                          ↗
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-[#646464] text-sm sm:text-base font-['Mona_Sans:Regular',sans-serif] leading-relaxed sm:leading-[28px]">
                        {office.description}
                      </p>
                    </div>

                    {/* Email Section */}
                    <div className="pt-6 mt-6 border-t border-[#e7e7e7]">
                      <span className="block text-xs font-['Mona_Sans:Medium',sans-serif] tracking-[1.2px] uppercase text-[#646464] mb-1.5 font-semibold">
                        EMAIL ADDRESS
                      </span>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-base sm:text-lg font-['Mona_Sans:Medium',sans-serif] font-bold text-[#0e0e0e] hover:underline transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
