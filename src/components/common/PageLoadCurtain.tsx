import React, { useState } from "react"
import StaircaseAnimation from "./StaircaseAnimation"

export interface PageLoadCurtainProps {
  onComplete?: () => void
  duration?: number
  delay?: number
}

export default function PageLoadCurtain({
  onComplete,
  duration,
  delay,
}: PageLoadCurtainProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <StaircaseAnimation
      isCurtain={true}
      useGrid={true}
      duration={duration}
      staggerDelay={delay}
      showReplay={false}
      onComplete={() => {
        setIsVisible(false)
        onComplete?.()
      }}
    />
  )
}
