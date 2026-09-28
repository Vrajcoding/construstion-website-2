import React, { useState, useEffect } from "react"

export interface StaircaseAnimationProps {
  onComplete?: () => void
  isCurtain?: boolean
  showReplay?: boolean
  duration?: number
  staggerDelay?: number
  columns?: number
  columnColor?: string
  useGrid?: boolean
}

export default function StaircaseAnimation({
  onComplete,
  isCurtain = true,
  showReplay = false,
  duration = 0.55,
  staggerDelay = 0.07,
  columns = 4,
  columnColor = "#ffffff",
}: StaircaseAnimationProps = {}) {
  const [replayKey, setReplayKey] = useState(0)
  const [isDone, setIsDone] = useState(false)

  const colsArray = Array.from({ length: columns }, (_, i) => i)
  const totalDuration = staggerDelay * (columns - 1) + duration

  useEffect(() => {
    setIsDone(false)
    const timer = setTimeout(() => {
      setIsDone(true)
      if (onComplete) onComplete()
    }, (totalDuration + 0.08) * 1000)

    return () => clearTimeout(timer)
  }, [replayKey, totalDuration, onComplete])

  const replay = () => {
    setIsDone(false)
    setReplayKey((k) => k + 1)
  }

  if (isDone && !showReplay) {
    return null
  }

  return (
    <div
      key={replayKey}
      id="staircase-fullpage-curtain"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        width: "100vw",
        height: "100vh",
        pointerEvents: isDone ? "none" : "auto",
        display: isDone ? "none" : "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        overflow: "hidden",
      }}
    >
      {colsArray.map((i) => (
        <div
          key={i}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: columnColor,
            border: "none",
            boxShadow: "none",
            boxSizing: "border-box",
            willChange: "transform",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translate3d(0, 0, 0)",
            animation: `staircaseSlideUp ${duration}s cubic-bezier(0.65, 0, 0.35, 1) ${
              i * staggerDelay
            }s forwards`,
          }}
        />
      ))}

      {showReplay && isDone && (
        <button
          onClick={replay}
          style={{
            position: "fixed",
            bottom: "24px",
            left: "24px",
            zIndex: 10000,
            padding: "10px 20px",
            backgroundColor: "#0e0e0e",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            fontWeight: 600,
            fontSize: "14px",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
          }}
        >
          Replay Staircase
        </button>
      )}

      <style>{`
        @keyframes staircaseSlideUp {
          0% {
            transform: translate3d(0, 0%, 0);
          }
          100% {
            transform: translate3d(0, -100%, 0);
          }
        }
      `}</style>
    </div>
  )
}
