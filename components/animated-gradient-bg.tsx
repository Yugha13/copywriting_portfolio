"use client"

import { useEffect, useRef } from "react"

interface AnimatedGradientBgProps {
  children: React.ReactNode
  className?: string
}

export default function AnimatedGradientBg({ children, className = "" }: AnimatedGradientBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Create gradient points
    const points = [
      { x: width * 0.1, y: height * 0.1, vx: 0.3, vy: 0.2, color: "#f97316" }, // Orange
      { x: width * 0.8, y: height * 0.3, vx: -0.2, vy: 0.3, color: "#7c3aed" }, // Purple
      { x: width * 0.5, y: height * 0.8, vx: 0.2, vy: -0.3, color: "#0ea5e9" }, // Blue
      { x: width * 0.2, y: height * 0.6, vx: 0.3, vy: -0.2, color: "#f97316" }, // Orange
    ]

    const animate = () => {
      // Clear canvas with a very subtle background
      ctx.fillStyle = "rgba(255, 255, 255, 0.01)"
      ctx.fillRect(0, 0, width, height)

      // Update points position
      points.forEach((point) => {
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges
        if (point.x < 0 || point.x > width) point.vx *= -1
        if (point.y < 0 || point.y > height) point.vy *= -1
      })

      // Draw gradients
      const createGradient = (p1: typeof points[0], p2: typeof points[0]) => {
        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
        gradient.addColorStop(0, `${p1.color}10`)
        gradient.addColorStop(0.5, `${p1.color}30`)
        gradient.addColorStop(1, `${p2.color}10`)
        return gradient
      }

      // Draw connections between points
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          ctx.beginPath()
          const gradient = createGradient(points[i], points[j])
          ctx.fillStyle = gradient
          
          // Create a bezier curve area between points
          const midX = (points[i].x + points[j].x) / 2
          const midY = (points[i].y + points[j].y) / 2
          const controlX = midX + (Math.random() * 100 - 50)
          const controlY = midY + (Math.random() * 100 - 50)
          
          ctx.moveTo(points[i].x, points[i].y)
          ctx.quadraticCurveTo(controlX, controlY, points[j].x, points[j].y)
          ctx.quadraticCurveTo(controlX + 50, controlY - 50, points[i].x, points[i].y)
          ctx.fill()
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10 opacity-30"
      />
      {children}
    </div>
  )
}