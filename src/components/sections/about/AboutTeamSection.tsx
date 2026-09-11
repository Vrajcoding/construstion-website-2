import React from "react"
import SectionTag from "../../common/SectionTag"
import Button from "../../common/Button"
import SocialIcons from "../../common/SocialIcons"
import { teamMembersData } from "../../../data/siteData"

export interface AboutTeamSectionProps {
  onOpenQuote?: () => void
}

export default function AboutTeamSection({ onOpenQuote }: AboutTeamSectionProps) {
  return (
    <section className="bg-white pt-80 sm:pt-[440px] lg:pt-[520px] pb-24 sm:pb-36">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title on Left, Action Buttons on Right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-[#e7e7e7]">
          {/* Left: Tag & Headline */}
          <div className="space-y-4 max-w-2xl">
            <SectionTag text="OUR TEAM" theme="dark" />
            <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08]">
              The amazing team <br className="hidden sm:inline" />
              behind Construcfy
            </h2>
          </div>

          {/* Right: CTA Buttons (Using Predefined Button Components) */}
          <div className="flex flex-wrap items-center gap-4 lg:pb-2">
            <Button
              variant="primary"
              size="md"
              showArrow
              onClick={onOpenQuote}
            >
              Join us
            </Button>

            <Button
              variant="outline"
              size="md"
              onClick={onOpenQuote}
            >
              Browse all team members
            </Button>
          </div>
        </div>

        {/* 3-Column Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-12 sm:mt-16">
          {teamMembersData.map((member) => (
            <div key={member.id} className="group flex flex-col justify-between">
              {/* Member Portrait Photo */}
              <div className="relative w-full h-[360px] sm:h-[400px] overflow-hidden bg-[#f3f3f3]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info & Bio */}
              <div className="pt-6">
                {/* Name */}
                <h3 className="text-2xl sm:text-[28px] font-['Mona_Sans:Medium',sans-serif] font-bold text-[#0e0e0e] mb-2">
                  {member.name}
                </h3>

                {/* Role & Social Icons Row */}
                <div className="flex items-center justify-between gap-4 pb-4">
                  <span className="text-[14px] font-['Mona_Sans:Medium',sans-serif] font-semibold tracking-[1.2px] uppercase text-[#0e0e0e]">
                    {member.role}
                  </span>
                  <SocialIcons theme="dark" size="sm" />
                </div>

                {/* Horizontal Divider */}
                <div className="border-t border-[#e7e7e7] pt-4">
                  <p className="text-[#646464] text-[16px] font-['Mona_Sans:Regular',sans-serif] leading-[26px]">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
