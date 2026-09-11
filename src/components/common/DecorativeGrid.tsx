import React from "react"

export interface DecorativeGridProps {
  pattern?: "hero-checker" | "top-left" | "bottom-right" | "yellow-corner" | "dual-diagonal"
  className?: string
  fillColor?: "white" | "yellow" | "dark"
}

export default function DecorativeGrid({
  pattern = "hero-checker",
  className = "",
  fillColor = "white",
}: DecorativeGridProps) {
  const getBgColor = () => {
    if (fillColor === "yellow") return "bg-[#ffd43e] border-[#ffd43e]"
    if (fillColor === "dark") return "bg-[#0e0e0e] border-[#0e0e0e]"
    return "bg-white border-white"
  }

  const bg = getBgColor()

  return (
    <div
      className={`grid grid-cols-2 grid-rows-2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 pointer-events-none z-10 ${className}`}
      aria-hidden="true"
    >
      {/* Cell 1: Top-Left */}
      <div
        className={`w-full h-full border border-white/20 transition-all ${
          pattern === "top-left" || pattern === "dual-diagonal"
            ? `${bg} border`
            : "bg-transparent"
        }`}
      />

      {/* Cell 2: Top-Right */}
      <div
        className={`w-full h-full border border-white/20 transition-all ${
          pattern === "hero-checker" ? `${bg} border` : "bg-transparent"
        }`}
      />

      {/* Cell 3: Bottom-Left */}
      <div
        className={`w-full h-full border border-white/20 transition-all ${
          pattern === "hero-checker" || pattern === "dual-diagonal"
            ? `${bg} border`
            : "bg-transparent"
        }`}
      />

      {/* Cell 4: Bottom-Right */}
      <div
        className={`w-full h-full border border-white/20 transition-all ${
          pattern === "bottom-right" || pattern === "yellow-corner"
            ? `${bg} border`
            : "bg-transparent"
        }`}
      />
    </div>
  )
}
