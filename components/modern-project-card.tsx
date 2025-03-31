"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModernProjectCardProps {
  title: string
  category: string
  description: string
  image: string
  link: string
  index?: number
  className?: string
  isVideo?: boolean
}

export default function ModernProjectCard({
  title,
  category,
  description,
  image,
  link,
  index = 0,
  className,
  isVideo = false,
}: ModernProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl",
        className
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full overflow-hidden">
        {isVideo ? (
          <video
            src={image}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="relative z-10 p-6">
        <div className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
          {category}
        </div>
        <h3 className="mb-2 text-xl font-bold transition-colors duration-300 group-hover:text-orange-500">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>

        <motion.div
          className="mt-4 flex items-center text-orange-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {category === "Email Marketing & Copywriting" && (
            <a
              href={link}
              className="flex items-center font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
              <ExternalLink className="ml-1" size={16} />
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}