import React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "outline-white" | "yellow" | "white"
  size?: "sm" | "md" | "lg"
  showArrow?: boolean
  arrowPosition?: "left" | "right"
  fullWidthMobile?: boolean
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Button({
  variant = "primary",
  size = "lg",
  showArrow = false,
  arrowPosition = "right",
  fullWidthMobile = false,
  children,
  className = "",
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles =
    'group inline-flex items-center justify-center font-["Mona_Sans:Bold",sans-serif] font-bold rounded-full transition-all duration-200 cursor-pointer select-none active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd43e] disabled:opacity-50 disabled:pointer-events-none'

  const variantStyles = {
    primary:
      "bg-[#0e0e0e] hover:bg-[#222222] text-white border border-[#0e0e0e] shadow-sm",
    outline:
      'bg-transparent hover:bg-[#0e0e0e] hover:text-white text-[#0e0e0e] border border-[#0e0e0e] font-["Mona_Sans:Regular",sans-serif] font-normal hover:font-medium',
    "outline-white":
      'bg-transparent hover:bg-white hover:text-[#0e0e0e] text-white border border-white font-["Mona_Sans:Regular",sans-serif] font-normal hover:font-medium',
    yellow:
      "bg-[#ffd43e] hover:bg-[#f0c430] text-[#0e0e0e] border border-[#ffd43e] shadow-sm",
    white:
      "bg-white hover:bg-neutral-100 text-[#0e0e0e] border border-white shadow-sm",
  }

  const sizeStyles = {
    sm: "px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm gap-2 min-h-[38px]",
    md: "px-5 sm:px-7 py-2.5 sm:py-3.5 text-sm sm:text-base gap-2.5 min-h-[46px]",
    lg: "px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg gap-2.5 sm:gap-3 min-h-[50px] sm:min-h-[54px]",
  }

  const mobileWidthClass = fullWidthMobile ? "w-full sm:w-auto" : ""

  const arrowIcon = (
    <svg
      className={`w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-200 ${
        arrowPosition === "left"
          ? "group-hover:-translate-x-1"
          : "group-hover:translate-x-1"
      } shrink-0`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${mobileWidthClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {showArrow && arrowPosition === "left" && arrowIcon}
      <span>{children}</span>
      {showArrow && arrowPosition === "right" && arrowIcon}
    </button>
  )
}
