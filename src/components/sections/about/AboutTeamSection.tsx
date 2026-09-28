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
    <section className="bg-white pt-0 pb-[120px] sm:pt-0 sm:pb-20 lg:pt-0 lg:pb-56">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title on Left, Action Buttons on Right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-10 sm:pb-14 border-b border-[#e7e7e7]">
          {/* Left: Tag & Headline (62px on large display) */}
          <div className="space-y-4 max-w-2xl">
            <SectionTag text="OUR TEAM" theme="dark" textClassName="text-[14px] sm:text-[16px]" />
            <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] lg:leading-[1.1]">
              The amazing team <br className="hidden sm:inline" />
              behind Construcfy
            </h2>
          </div>

          {/* Right: CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto lg:pb-2">
            <Button
              variant="primary"
              size="md"
              showArrow
              fullWidthMobile
              className="text-[16px] lg:text-[18px]"
              onClick={onOpenQuote}
            >
              Join us
            </Button>

            <Button
              variant="outline"
              size="md"
              fullWidthMobile
              className="text-[16px] lg:text-[18px]"
              onClick={onOpenQuote}
            >
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
              {/* Member Portrait Photo (360x360 on mobile) with signature Construcfy card hover tilt & dark shadow */}
              <div className="card-image-wrap relative w-[360px] h-[360px] max-w-full aspect-square mx-auto sm:mx-0 sm:w-full sm:h-auto sm:aspect-[3/4] bg-[#0e0e0e]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale contrast-105"
                />
                <div className="card-image-shadow" />
              </div>

              {/* Info & Bio */}
              <div className="pt-6">
                {/* Name */}
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-['Mona_Sans:Medium',sans-serif] font-bold text-[#0e0e0e] group-hover:text-[#ffd43e] transition-colors mb-2">
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
