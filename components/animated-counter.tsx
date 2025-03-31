"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  suffix?: string
  className?: string
  duration?: number
}

export default function AnimatedCounter({ end, suffix = "", className = "", duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const countRef = useRef(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)

      const startTime = Date.now()
      const endTime = startTime + duration

      const updateCount = () => {
        const now = Date.now()
        const progress = Math.min(1, (now - startTime) / duration)
        const currentCount = Math.floor(progress * end)

        if (currentCount !== countRef.current) {
          countRef.current = currentCount
          setCount(currentCount)
        }

        if (now < endTime) {
          requestAnimationFrame(updateCount)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(updateCount)
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <div ref={ref} className={className}>
      {count}
      {suffix}
    </div>
  )
}

