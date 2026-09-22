import React from "react"
import SectionTag from "../common/SectionTag"
import Button from "../common/Button"
import DecorativeGrid from "../common/DecorativeGrid"
import { blogPostsData } from "../../data/siteData"

export interface BlogSectionProps {
  onSelectArticle?: (title: string) => void
}

export default function BlogSection({ onSelectArticle }: BlogSectionProps) {
  return (
    <section id="blog" className="bg-white py-14 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Bottom-Right 4-Boxes Staircase Accent */}
      <div className="absolute bottom-0 right-0 pointer-events-none z-0">
        <DecorativeGrid pattern="four-boxes" fillColor="yellow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-2xl mx-auto mb-10 sm:mb-16">
          <SectionTag text="OUR BLOG" dualLines className="justify-center" />
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] sm:leading-[1.12]">
            Latest news & articles
          </h2>
        </div>

        {/* 3-Card Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12 sm:mb-16">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectArticle?.(post.title)}
              className="group cursor-pointer flex flex-col justify-between transition-all"
            >
              {/* Card Body */}
              <div className="flex flex-col">
                {/* Responsive Aspect Ratio Image */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-neutral-900 rounded-none mb-5 sm:mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500 rounded-none"
                  />
                </div>

                {/* Title & Excerpt */}
                <div className="flex flex-col gap-2.5 mb-5 sm:mb-6">
                  <h3 className="text-lg sm:text-xl lg:text-[22px] font-['Mona_Sans:Semi_Bold',sans-serif] font-semibold text-[#0e0e0e] group-hover:text-neutral-700 leading-snug sm:leading-[30px] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#646464] text-sm sm:text-base font-['Mona_Sans:Medium',sans-serif] font-medium leading-relaxed sm:leading-[24px] line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Horizontal Divider Line & Footer */}
              <div className="mt-auto pt-5 sm:pt-6 border-t border-[#e7e7e7] flex items-center justify-between">
                <div className="flex items-center text-xs sm:text-sm font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-[0.96px] uppercase">
                  <span>{post.category || "REMODELING"}</span>
                  <span className="inline-block w-6 sm:w-7 h-px bg-[#939393] mx-2.5 sm:mx-3" />
                  <span>{post.date}</span>
                </div>

                <div className="text-[#0e0e0e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Browse All Articles Action */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="lg"
            fullWidthMobile
            onClick={() => onSelectArticle?.("All Articles")}
          >
            Browse all articles
          </Button>
        </div>
      </div>
    </section>
  )
}
