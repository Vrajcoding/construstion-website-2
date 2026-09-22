import React from "react"

export interface LogoProps {
  theme?: "dark" | "light" | "yellow"
  showText?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function Logo({
  theme = "dark",
  showText = false,
  size = "md",
  className = "",
}: LogoProps) {
  const fillColor =
    theme === "yellow" ? "#FFD43E" : theme === "light" ? "#FFFFFF" : "#0E0E0E"
  const textColor = theme === "light" ? "text-white" : "text-[#0e0e0e]"

  const sizeMap = {
    sm: { box: 28, text: "text-lg" },
    md: { box: 38, text: "text-2xl" },
    lg: { box: 48, text: "text-3xl" },
  }

  const currentSize = sizeMap[size]

  return (
    <a
      href="#home"
      className={`inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-85 ${className}`}
      aria-label="Construcfy Home"
    >
      <div
        style={{ width: currentSize.box, height: currentSize.box }}
        className="relative shrink-0"
      >
        <svg
          viewBox="0 0 42 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full block"
        >
          {/* Top-Left */}
          <rect x="0" y="0.89" width="14" height="14" fill={fillColor} />
          {/* Top-Right */}
          <rect x="28" y="0.89" width="14" height="14" fill={fillColor} />
          {/* Center */}
          <rect x="14" y="14.89" width="14" height="14" fill={fillColor} />
          {/* Bottom-Left */}
          <rect x="0" y="28.89" width="14" height="14" fill={fillColor} />
          {/* Bottom-Right */}
          <rect x="28" y="28.89" width="14" height="14" fill={fillColor} />
        </svg>
      </div>

      {showText && (
        <span
          className={`font-['Mona_Sans:Bold',sans-serif] font-bold tracking-tight ${currentSize.text} ${textColor}`}
        >
          Construcfy
        </span>
      )}
    </a>
  )
}
