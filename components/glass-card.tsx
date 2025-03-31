"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
}

export default function GlassCard({ children, className = "", hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div
      className={`relative backdrop-blur-md bg-white/10 border border-white/20 shadow-xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={hoverEffect ? { y: -10, scale: 1.02 } : undefined}
      data-cursor-hover="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-inherit" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}