import React, { useState } from "react"
import { FaqItem } from "../../types"

export interface FaqAccordionProps {
  items: FaqItem[]
  theme?: "light" | "dark"
  className?: string
}

export default function FaqAccordion({
  items,
  theme = "light",
  className = "",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  const isDark = theme === "dark"

  return (
    <div
      className={`${isDark ? "border-t border-[#222222]" : "border-t border-[#e7e7e7]"
        } ${className}`}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className={isDark ? "border-b border-[#222222]" : "border-b border-[#e7e7e7]"}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full py-8 sm:py-10 lg:py-12 flex items-center justify-between text-left gap-6 group cursor-pointer"
              aria-expanded={isOpen}
            >
              <span
                className={`text-xl sm:text-2xl lg:text-[30px] font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.3] transition-colors ${isDark
                    ? "text-white group-hover:text-[#ffd43e]"
                    : "text-[#0e0e0e] group-hover:text-black"
                  }`}
              >
                {item.question}
              </span>
              <div
                className={`shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-90" : ""
                  }`}
              >
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? "text-white" : "text-[#0e0e0e]"
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>

            {isOpen && (
              <div className="pb-8 sm:pb-10 animate-in fade-in slide-in-from-top-2 duration-200">
                <p
                  className={`text-[17px] sm:text-[19px] font-['Mona_Sans:Regular',sans-serif] leading-[30px] sm:leading-[32px] max-w-4xl ${isDark ? "text-[#a0a0a0]" : "text-[#646464]"
                    }`}
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
