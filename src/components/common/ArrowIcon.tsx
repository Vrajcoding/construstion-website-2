import React from "react"

export interface ArrowIconProps {
  className?: string
  strokeWidth?: number | string
}

export default function ArrowIcon({
  className = "w-5 h-5",
  strokeWidth = 2.2,
}: ArrowIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  )
}
