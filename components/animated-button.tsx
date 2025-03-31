"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface AnimatedButtonProps {
  href: string
  variant?: "primary" | "secondary" | "outline"
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
}

export default function AnimatedButton({
  href,
  variant = "primary",
  children,
  className = "",
  icon,
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
      case "secondary":
        return "bg-white hover:bg-gray-100 text-gray-800 border border-gray-300"
      case "outline":
        return "bg-transparent hover:bg-white/10 text-white border border-white/30"
      default:
        return "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
    }
  }

  return (
    <Link href={href} className="inline-block">
      <motion.div
        className={`relative px-8 py-3 rounded-full flex items-center justify-center overflow-hidden ${getVariantClasses()} ${className}`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        data-cursor-hover="true"
      >
        <motion.span
          className="absolute inset-0 bg-white/20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1.5 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          style={{ borderRadius: "100%" }}
        />
        <motion.div
          className="relative z-10 flex items-center"
          animate={{
            x: isHovered && icon ? 5 : 0,
          }}
        >
          <span>{children}</span>
          {icon && (
            <motion.span
              className="ml-2"
              animate={{
                x: isHovered ? 5 : 0,
                opacity: 1,
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {icon}
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </Link>
  )
}