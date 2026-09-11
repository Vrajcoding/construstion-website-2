import React from "react"

export interface SectionTagProps {
  text: string
  theme?: "dark" | "light" | "yellow"
  className?: string
  dualLines?: boolean
  hideLine?: boolean
}

export default function SectionTag({
  text,
  theme = "dark",
  className = "",
  dualLines = false,
  hideLine = false,
}: SectionTagProps) {
  const lineColors = {
    dark: "bg-[#0e0e0e]",
    light: "bg-white",
    yellow: "bg-[#ffd43e]",
  }

  const textColors = {
    dark: "text-[#0e0e0e]",
    light: "text-white",
    yellow: "text-[#ffd43e]",
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {!hideLine && (
        <span className={`w-7 h-[1.5px] ${lineColors[theme]} rounded-full`} />
      )}
      <span
        className={`font-['Mona_Sans:Medium',sans-serif] text-[15px] sm:text-[16px] font-medium tracking-[0.96px] uppercase ${textColors[theme]}`}
      >
        {text}
      </span>
      {dualLines && !hideLine && (
        <span className={`w-7 h-[1.5px] ${lineColors[theme]} rounded-full`} />
      )}
    </div>
  )
}
