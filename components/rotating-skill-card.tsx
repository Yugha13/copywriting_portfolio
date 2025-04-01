"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'

interface RotatingSkillCardProps {
  icon: string
  title: string
  description: string
  color: string
}

export default function RotatingSkillCard({
  icon,
  title,
  description,
  color,
}: RotatingSkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [25, -25])
  const rotateY = useTransform(x, [-100, 100], [-25, 25])
  const glowX = useTransform(mouseX, [-100, 100], [-50, 50])
  const glowY = useTransform(mouseY, [-100, 100], [-50, 50])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        mouseX.set(e.clientX - centerX)
        mouseY.set(e.clientY - centerY)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleCardMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  const handleCardMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative perspective-1000"
      onMouseMove={handleCardMouseMove}
      onMouseLeave={handleCardMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div
        className={`w-full h-full rounded-2xl p-8 transition-all duration-300 backdrop-blur-lg ${isHovered ? 'shadow-2xl' : 'shadow-lg'}`}
        style={{
          background: `linear-gradient(135deg, ${color}15, ${color}30)`,
          border: `1px solid ${color}20`,
          transform: 'translateZ(20px)',
        }}
      >
        <div className="flex flex-col items-center text-center space-y-6 relative z-10">
          <motion.div
            className="text-5xl p-6 rounded-full relative"
            style={{
              background: `linear-gradient(135deg, ${color}30, ${color}10)`,
              boxShadow: `0 10px 30px -10px ${color}40`,
              transform: 'translateZ(30px)',
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {icon}
          </motion.div>
          <motion.h3 
            className="text-2xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${color}, ${color}80)`,
              transform: 'translateZ(40px)',
            }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-gray-600 leading-relaxed"
            style={{ transform: 'translateZ(20px)' }}
          >
            {description}
          </motion.p>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, ${color}30 0%, transparent 70%)`,
                  zIndex: -1,
                }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `linear-gradient(135deg, ${color}05, ${color}15)`,
          opacity: isHovered ? 1 : 0,
          zIndex: -2,
          transform: 'translateZ(-20px)',
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
          filter: isHovered ? 'blur(12px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  )
}