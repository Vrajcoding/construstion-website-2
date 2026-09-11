import React from "react"
import { blogCategoriesData } from "../../../data/siteData"

export interface BlogCategoriesSectionProps {
  onCategoryClick?: (category: string) => void
}

export default function BlogCategoriesSection({
  onCategoryClick,
}: BlogCategoriesSectionProps) {
  const renderCategoryIcon = (type: string) => {
    switch (type) {
      case "remodeling":
        // Circular arrows with triangle (Remodeling)
        return (
          <div className="w-14 h-14 text-[#0e0e0e]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              {/* Counter-clockwise arc with triangle */}
              <path d="M12 24C12 17.3726 17.3726 12 24 12C28.2 12 31.8 14.2 33.8 17.5" />
              <path d="M12 17L12 24L19 24" />
              {/* Clockwise bottom arc */}
              <path d="M36 24C36 30.6274 30.6274 36 24 36C19.8 36 16.2 33.8 14.2 30.5" />
              <path d="M36 31L36 24L29 24" />
              {/* Inner Triangle */}
              <polygon
                points="24,18 30,28 18,28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        )

      case "design":
        // 3 Overlapping Venn Diagram Circles (Design)
        return (
          <div className="w-14 h-14 text-[#0e0e0e]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <circle cx="24" cy="18" r="10" />
              <circle cx="17" cy="29" r="10" />
              <circle cx="31" cy="29" r="10" />
            </svg>
          </div>
        )

      case "construction":
        // Builder Hammer / Mallet Icon (Construction)
        return (
          <div className="w-14 h-14 text-[#0e0e0e]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              {/* Angled hammer head */}
              <path d="M16 14L22 8L34 20L28 26Z" />
              {/* Handle */}
              <line x1="25" y1="23" x2="38" y2="36" />
              <line x1="28" y1="26" x2="41" y2="39" />
              <path d="M38 36L41 39" />
            </svg>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section className="bg-white py-20 sm:py-28 lg:py-[160px]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header with full-width underline */}
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight pb-10 sm:pb-14 border-b border-[#e7e7e7]">
          Articles by category
        </h2>

        {/* 3-Column Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 mt-12 sm:mt-16">
          {blogCategoriesData.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col justify-between"
            >
              <div>
                {/* SVG Icon with Subtle Hover Lift */}
                <div className="mb-6 transform group-hover:-translate-y-1 transition-transform duration-300">
                  {renderCategoryIcon(category.iconType)}
                </div>

                {/* Category Title */}
                <h3 className="text-2xl sm:text-[28px] font-['Mona_Sans:Medium',sans-serif] font-bold text-[#0e0e0e] mb-3">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-[#646464] text-[16px] sm:text-[17px] font-['Mona_Sans:Regular',sans-serif] leading-[28px] sm:leading-[30px] mb-8">
                  {category.description}
                </p>
              </div>

              {/* Browse Articles Action Button / Link */}
              <div>
                <button
                  onClick={() => onCategoryClick?.(category.id)}
                  className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-['Mona_Sans:Bold',sans-serif] font-bold tracking-[1.2px] uppercase text-[#0e0e0e] hover:text-neutral-700 transition-colors cursor-pointer group-hover:underline"
                >
                  <span>BROWSE ARTICLES</span>
                  <span className="text-base group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
