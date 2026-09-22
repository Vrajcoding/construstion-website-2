import React from "react"
import { motion } from "framer-motion"

export interface DecorativeGridProps {
  pattern?:
    | "hero-checker"
    | "top-left"
    | "top-right"
    | "bottom-right"
    | "yellow-corner"
    | "dual-diagonal"
    | "corner-triplet"
    | "triplet-top-right"
    | "staircase"
    | "diagonal-tl-br"
    | "four-boxes"
    | "grid-3x2"
    | "footer-3x2"
    | "grid-3x2-right"
    | "cta-top-right"
    | "cta-bottom-right"
    | "staircase-br"
  className?: string
  fillColor?: "white" | "yellow" | "dark"
}

export default function DecorativeGrid({
  pattern = "hero-checker",
  className = "",
  fillColor = "white",
}: DecorativeGridProps) {
  const getBgColor = () => {
    if (fillColor === "yellow") return "bg-[#ffd43e]"
    if (fillColor === "dark") return "bg-[#0e0e0e]"
    return "bg-white"
  }

  const bg = getBgColor()

  // 3x2 Grid Pattern (3 columns x 2 rows)
  if (
    pattern === "grid-3x2" ||
    pattern === "footer-3x2" ||
    pattern === "grid-3x2-right" ||
    pattern === "cta-bottom-right"
  ) {
    const isRightTwo = pattern === "grid-3x2-right"
    const isCtaBottomRight = pattern === "cta-bottom-right"

    const cells3x2 = isCtaBottomRight
      ? [
          // Row 1 (Top)
          { id: 1, filled: false, delay: 0.24 }, // Top-Left: transparent
          { id: 2, filled: true, delay: 0.24 },  // Top-Center: filled (yellow)
          { id: 3, filled: false, delay: 0.3 },  // Top-Right: transparent
          // Row 2 (Bottom)
          { id: 4, filled: true, delay: 0.08 },  // Bottom-Left: filled (yellow)
          { id: 5, filled: false, delay: 0.14 }, // Bottom-Center: transparent
          { id: 6, filled: true, delay: 0.14 },  // Bottom-Right: filled (yellow)
        ]
      : [
          // Row 1 (Top)
          { id: 1, filled: true, delay: 0.24 }, // Top-Left
          { id: 2, filled: false, delay: 0.24 }, // Top-Center
          { id: 3, filled: true, delay: 0.3 }, // Top-Right
          // Row 2 (Bottom)
          { id: 4, filled: !isRightTwo, delay: 0.08 }, // Bottom-Left (filled if left side two boxes)
          { id: 5, filled: true, delay: 0.14 }, // Bottom-Center
          { id: 6, filled: isRightTwo, delay: 0.14 }, // Bottom-Right (filled if right side two boxes)
        ]

    return (
      <div
        className={`grid grid-cols-3 grid-rows-2 w-[120px] h-[80px] sm:w-60 sm:h-40 md:w-72 md:h-48 lg:w-[300px] lg:h-[200px] pointer-events-none z-10 ${className}`}
        aria-hidden="true"
      >
        {cells3x2.map((cell) =>
          cell.filled ? (
            <motion.div
              key={cell.id}
              initial={{ opacity: 0, scale: 0.82, y: 14 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.52,
                delay: cell.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`w-full h-full ${bg} border-none shadow-none`}
            />
          ) : (
            <div
              key={cell.id}
              className="w-full h-full bg-transparent border-none"
            />
          )
        )}
      </div>
    )
  }

  // 4-boxes staircase pattern (4 columns with staggered ascending heights)
  if (pattern === "four-boxes") {
    const boxes = [
      { id: 1, height: "40%", delay: 0.08 },
      { id: 2, height: "70%", delay: 0.16 },
      { id: 3, height: "55%", delay: 0.24 },
      { id: 4, height: "100%", delay: 0.32 },
    ]

    return (
      <div
        className={`flex items-end w-[160px] h-[160px] sm:w-44 sm:h-44 md:w-52 md:h-52 pointer-events-none z-10 ${className}`}
        aria-hidden="true"
      >
        {boxes.map((b) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{
              opacity: 1,
              scaleY: 1,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.52,
              delay: b.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ height: b.height, transformOrigin: "bottom" }}
            className={`w-1/4 ${bg} border-none shadow-none`}
          />
        ))}
      </div>
    )
  }

  // 2x2 Grid Layout:
  // Row 1 (Top):    Cell 1 (Top-Left),    Cell 2 (Top-Right)
  // Row 2 (Bottom): Cell 3 (Bottom-Left), Cell 4 (Bottom-Right)
  const isCell1Filled =
    pattern === "top-left" ||
    pattern === "dual-diagonal" ||
    pattern === "corner-triplet" ||
    pattern === "triplet-top-right" ||
    pattern === "staircase" ||
    pattern === "diagonal-tl-br"

  const isCell2Filled =
    pattern === "hero-checker" ||
    pattern === "corner-triplet" ||
    pattern === "triplet-top-right" ||
    pattern === "staircase" ||
    pattern === "cta-top-right" ||
    pattern === "staircase-br" ||
    pattern === "top-right"

  const isCell3Filled =
    pattern === "hero-checker" ||
    pattern === "dual-diagonal" ||
    pattern === "staircase-br" ||
    pattern === "corner-triplet"

  const isCell4Filled =
    pattern === "bottom-right" ||
    pattern === "yellow-corner" ||
    pattern === "triplet-top-right" ||
    pattern === "staircase-br" ||
    pattern === "diagonal-tl-br"

  // Bottom row cells animate first (0.08s delay), Top row cells animate second (0.24s delay)
  const cells = [
    { id: 1, filled: isCell1Filled, isTop: true, delay: 0.24 },
    { id: 2, filled: isCell2Filled, isTop: true, delay: 0.24 },
    { id: 3, filled: isCell3Filled, isTop: false, delay: 0.08 },
    { id: 4, filled: isCell4Filled, isTop: false, delay: 0.08 },
  ]

  return (
    <div
      className={`grid grid-cols-2 grid-rows-2 w-[80px] h-[80px] sm:w-40 sm:h-40 md:w-48 md:h-48 pointer-events-none z-10 ${className}`}
      aria-hidden="true"
    >
      {cells.map((cell) =>
        cell.filled ? (
          <motion.div
            key={cell.id}
            initial={{ opacity: 0, scale: 0.82, y: 14 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.52,
              delay: cell.delay,
              ease: [0.16, 1, 0.3, 1], // Smooth, cinematic spring deceleration curve
            }}
            className={`w-full h-full ${bg} border-none shadow-none`}
          />
        ) : (
          <div key={cell.id} className="w-full h-full bg-transparent border-none" />
        )
      )}
    </div>
  )
}
