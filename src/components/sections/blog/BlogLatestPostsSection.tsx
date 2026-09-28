import React, { useState } from "react"
import { blogPostsData } from "../../../data/siteData"

export default function BlogLatestPostsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL")

  const categories = ["ALL", "REMODELING", "DESIGN", "CONSTRUCTION"]

  const filteredPosts =
    activeCategory === "ALL"
      ? blogPostsData
      : blogPostsData.filter(
        (post) =>
          post.category?.toUpperCase() === activeCategory.toUpperCase(),
      )

  return (
    <section className="bg-white py-[93px] sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title on Left, Filter Tabs on Right */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-0 sm:pb-8 md:pb-12 border-b-0 md:border-b border-[#e7e7e7]">
          {/* Headline */}
          <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[56px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.1] mb-2 sm:mb-0">
            Latest posts
          </h2>

          {/* Category Filter Tabs (Vertical list on mobile matching Image 1, horizontal with dividers on desktop matching Image 2) */}
          <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-5 lg:gap-6 select-none w-full md:w-auto">
            {categories.map((cat, idx) => {
              const isActive = activeCategory === cat
              const isLast = idx === categories.length - 1
              return (
                <React.Fragment key={cat}>
                  {idx > 0 && (
                    <span
                      className="hidden md:inline-block w-[1px] h-3.5 bg-[#c5c5c5] self-center"
                      aria-hidden="true"
                    />
                  )}
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[14px] tracking-[1px] uppercase transition-all cursor-pointer text-left md:text-center py-3.5 md:py-1 ${
                      !isLast ? "border-b border-[#e7e7e7] md:border-b-0" : ""
                    } ${
                      isActive
                        ? "text-[#0e0e0e] font-['Mona_Sans:Bold',sans-serif] font-bold"
                        : "text-[#0e0e0e] md:text-[#777777] hover:text-[#0e0e0e] font-['Mona_Sans:Medium',sans-serif] font-medium"
                    }`}
                  >
                    {cat}
                  </button>
                </React.Fragment>
              )
            })}
          </div>
        </div>

        {/* 3-Column Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-10 sm:mt-16">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Post Image with signature Construcfy card hover tilt & dark shadow */}
                <div className="card-image-wrap relative w-full aspect-[4/3] bg-[#0e0e0e] shadow-md">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale contrast-105"
                  />
                  <div className="card-image-shadow" />
                </div>


                {/* Title (22px on mobile, 24px on desktop) */}
                <h3 className="text-[22px] sm:text-[22px] lg:text-[24px] font-['Mona_Sans:Semi_Bold',sans-serif] font-semibold text-[#0e0e0e] mt-6 mb-3 group-hover:text-[#ffd43e] transition-colors leading-[1.34] lg:leading-[34px] line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt (16px on mobile, 18px on desktop) */}
                <p className="text-[#646464] text-[16px] lg:text-[18px] font-['Mona_Sans:Regular',sans-serif] font-normal leading-[26px] lg:leading-[30px] line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              {/* Footer Meta Row: Category & Date (14px on mobile, 16px on desktop) with Arrow */}
              <div className="pt-6 mt-6 border-t border-[#e7e7e7] flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-[14px] lg:text-[16px] font-['Mona_Sans:Medium',sans-serif] font-medium tracking-[1px] uppercase text-[#0e0e0e]">
                  <span>{post.category}</span>
                  <span className="w-5 h-[1.5px] bg-[#0e0e0e]/40 rounded-full" />
                  <span className="font-['Mona_Sans:Regular',sans-serif] font-normal text-[#646464]">
                    {post.date}
                  </span>
                </div>

                <span className="text-[#0e0e0e] text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
