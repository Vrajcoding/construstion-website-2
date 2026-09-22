import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
    <div className={`border-t-0 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className={`group ${
              isDark ? "border-b border-[#222222]" : "border-b border-[#e7e7e7]"
            }`}
          >
            {/* Smooth rightward glide on hover for desktop */}
            <div className="transition-transform duration-300 ease-out sm:group-hover:translate-x-3">
              <button
                onClick={() => toggleItem(index)}
                className={`w-full ${
                  index === 0 ? "pt-0" : "pt-12 sm:pt-[60px]"
                } ${
                  isOpen ? "pb-6 sm:pb-[30px]" : "pb-12 sm:pb-[60px]"
                } flex items-center justify-between text-left gap-4 sm:gap-6 cursor-pointer transition-[padding] duration-300 ease-out relative z-10 ${
                  isDark ? "bg-[#0e0e0e]" : "bg-white"
                }`}
                aria-expanded={isOpen}
              >
                <span
                  className={`text-lg sm:text-2xl lg:text-[38px] font-['Mona_Sans:Medium',sans-serif] font-medium leading-snug sm:leading-[38px] lg:leading-[46px] transition-colors duration-200 ${
                    isDark
                      ? "text-white group-hover:text-[#ffd43e]"
                      : "text-[#0e0e0e] group-hover:text-black"
                  }`}
                >
                  {item.question}
                </span>
                <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-400 ease-out ${
                      isOpen ? "rotate-90" : ""
                    } ${
                      isDark
                        ? "text-white group-hover:text-[#ffd43e]"
                        : "text-[#0e0e0e] group-hover:text-black"
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

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{
                      duration: 0.42,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="overflow-hidden relative z-0"
                  >
                    <motion.div
                      initial={{ y: -24, scale: 0.94, opacity: 0 }}
                      animate={{ y: 0, scale: 1, opacity: 1 }}
                      exit={{ y: -16, scale: 0.94, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                        opacity: { duration: 0.28 },
                        scale: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
                      }}
                      style={{ transformOrigin: "top left" }}
                      className="pb-8 sm:pb-10 lg:pb-12 pr-12 sm:pr-16 lg:pr-24"
                    >
                      <p
                        className={`text-[17px] sm:text-[19px] font-['Mona_Sans:Regular',sans-serif] leading-[30px] sm:leading-[32px] max-w-4xl text-left ${
                          isDark ? "text-[#a0a0a0]" : "text-[#646464]"
                        }`}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )
      })}
    </div>
  )
}
