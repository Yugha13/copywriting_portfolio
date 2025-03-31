"use client"

import { useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface ThreeDTextProps {
  text: string
  className?: string
  highlightColor?: string
}

export default function ThreeDText({ text, className = "", highlightColor = "#f97316" }: ThreeDTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-300, 300], [15, -15])
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-15, 15])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      x.set(event.clientX - centerX)
      y.set(event.clientY - centerY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const words = text.split(" ")

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`inline-block ${className}`}
      data-cursor-hover="true"
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-2 last:mr-0">
          {word.includes("|") ? (
            <span className="relative">
              <span style={{ color: highlightColor }} className="font-bold">
                {word.replace(/\|/g, "")}
              </span>
              <span
                className="absolute -left-1 -right-1 -bottom-1 -z-10"
                style={{ backgroundColor: `${highlightColor}20` }}
              ></span>
            </span>
          ) : (
            word
          )}
        </span>
      ))}
    </motion.div>
  )
}