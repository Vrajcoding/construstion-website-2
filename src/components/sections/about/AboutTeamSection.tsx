import React from "react"
import SectionTag from "../../common/SectionTag"
import Button from "../../common/Button"
import SocialIcons from "../../common/SocialIcons"
import { teamMembersData } from "../../../data/siteData"

export interface AboutTeamSectionProps {
  onOpenQuote?: () => void
}

export default function AboutTeamSection({
  onOpenQuote,
}: AboutTeamSectionProps) {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title on Left, Action Buttons on Right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-10 sm:pb-14 border-b border-[#e7e7e7]">
          {/* Left: Tag & Headline */}
          <div className="space-y-4 max-w-2xl">
            <SectionTag text="OUR TEAM" theme="dark" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.1]">
              The amazing team <br className="hidden sm:inline" />
              behind Construcfy
            </h2>
          </div>

          {/* Right: CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto lg:pb-2">
            <Button variant="primary" size="md" showArrow fullWidthMobile onClick={onOpenQuote}>
              Join us
            </Button>

            <Button variant="outline" size="md" fullWidthMobile onClick={onOpenQuote}>
              Browse all team members
            </Button>
          </div>
        </div>

        {/* 3-Column Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-12 sm:mt-16">
          {teamMembersData.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col justify-between"
            >
              {/* Member Portrait Photo */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#f3f3f3]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info & Bio */}
              <div className="pt-6">
                {/* Name */}
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-['Mona_Sans:Medium',sans-serif] font-bold text-[#0e0e0e] mb-2">
                  {member.name}
                </h3>

                {/* Role & Social Icons Row */}
                <div className="flex items-center justify-between gap-4 pb-4">
                  <span className="text-[13px] sm:text-[14px] font-['Mona_Sans:Medium',sans-serif] font-semibold tracking-[1.2px] uppercase text-[#0e0e0e]">
                    {member.role}
                  </span>
                  <SocialIcons theme="dark" size="sm" />
                </div>

                {/* Horizontal Divider */}
                <div className="border-t border-[#e7e7e7] pt-4">
                  <p className="text-[#646464] text-[15px] sm:text-[16px] font-['Mona_Sans:Regular',sans-serif] leading-[26px]">
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
