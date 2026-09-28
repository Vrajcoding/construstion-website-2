import React from "react"
import { blogCategoriesData } from "../../../data/siteData"

import {
  svgRemodeling,
  svgDesign,
  svgConstruction,
} from "../../../assets"

export interface BlogCategoriesSectionProps {
  onCategoryClick?: (category: string) => void
}

export default function BlogCategoriesSection({
  onCategoryClick,
}: BlogCategoriesSectionProps) {
  const categoryIcons: Record<string, string> = {
    remodeling: svgRemodeling,
    design: svgDesign,
    construction: svgConstruction,
  }

  return (
    <section className="bg-white py-[93px] sm:py-20 lg:py-[160px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header with full-width underline */}
        <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight pb-8 sm:pb-12 border-b border-[#e7e7e7]">
          Articles by category
        </h2>

        {/* 3-Column Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mt-10 sm:mt-14">
          {blogCategoriesData.map((category) => (
            <div
              key={category.id}
              onClick={() => onCategoryClick?.(category.id)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* SVG Icon with Subtle Hover Lift */}
                <div className="mb-5 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <img
                    src={categoryIcons[category.iconType] || svgRemodeling}
                    alt={category.title}
                    className="w-[54px] h-[54px] sm:w-14 sm:h-14 object-contain"
                  />
                </div>

                {/* Category Title */}
                <h3 className="text-[20px] sm:text-2xl lg:text-[28px] font-['Mona_Sans:Semi_Bold',sans-serif] font-semibold text-[#0e0e0e] group-hover:text-[#ffd43e] transition-colors duration-200 mb-2 sm:mb-3">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-[#646464] text-[16px] sm:text-base lg:text-[18px] lg:leading-[30px] font-['Mona_Sans:Regular',sans-serif] font-normal leading-[24px] sm:leading-[28px] mb-6 sm:mb-8 line-clamp-2">
                  {category.description}
                </p>
              </div>

              {/* Horizontal Divider Line centered between paragraph and button */}
              <div className="pt-5 sm:pt-6 border-t border-[#e7e7e7]">
                <span className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] lg:text-[16px] font-['Mona_Sans:Semi_Bold',sans-serif] font-semibold tracking-[1.2px] uppercase text-[#0e0e0e] transition-colors">
                  <span>BROWSE ARTICLES</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 ease-out shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
