"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      // Check if the element or its parents have data-cursor-hover attribute
      let target = e.target as HTMLElement
      while (target) {
        if (target.dataset && target.dataset.cursorHover) {
          setIsHovering(true)
          return
        }
        target = target.parentElement as HTMLElement
        if (!target) break
      }
      setIsHovering(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
    },
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
      animate={isHovering ? "hover" : "default"}
      variants={variants}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-white rounded-full opacity-80" />
        <div className="absolute inset-2 bg-transparent border-2 border-white rounded-full" />
      </div>
    </motion.div>
  )
}