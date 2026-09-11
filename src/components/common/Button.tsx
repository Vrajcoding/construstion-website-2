import React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "outline-white" | "yellow" | "white"
  size?: "sm" | "md" | "lg"
  showArrow?: boolean
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Button({
  variant = "primary",
  size = "lg",
  showArrow = false,
  children,
  className = "",
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles =
    'group inline-flex items-center justify-center font-["Mona_Sans:Bold",sans-serif] font-bold rounded-full transition-all duration-200 cursor-pointer select-none active:scale-[0.98] whitespace-nowrap'

  const variantStyles = {
    primary:
      "bg-[#0e0e0e] hover:bg-[#222222] text-white border border-[#0e0e0e] shadow-sm",
    outline:
      'bg-transparent hover:bg-[#0e0e0e] hover:text-white text-[#0e0e0e] border border-[#0e0e0e] font-["Mona_Sans:Regular",sans-serif] font-normal',
    "outline-white":
      'bg-transparent hover:bg-white hover:text-[#0e0e0e] text-white border border-white font-["Mona_Sans:Regular",sans-serif] font-normal',
    yellow:
      "bg-[#ffd43e] hover:bg-[#f0c430] text-[#0e0e0e] border border-[#ffd43e]",
    white: "bg-white hover:bg-neutral-100 text-[#0e0e0e] border border-white",
  }

  const sizeStyles = {
    sm: "px-7 py-3.5 text-[15px] gap-2",
    md: "px-9 py-5 text-[17px] gap-2.5",
    lg: "px-10 py-6 sm:px-10 sm:py-[26px] text-[18px] gap-2.5",
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <svg
          className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      )}
    </button>
  )
}
