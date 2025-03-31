"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ModernTestimonialCardProps {
  quote: string
  author: string
  position: string
  avatar: string
  index?: number
}

export default function ModernTestimonialCard({ 
  quote, 
  author, 
  position, 
  avatar,
  index = 0 
}: ModernTestimonialCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 p-8 shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      data-cursor-hover="true"
    >
      {/* Decorative elements */}
      <div className="absolute -right-8 -top-8 z-0 h-24 w-24 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-2xl" />
      
      {/* Quote icon */}
      <div className="mb-6 text-orange-500">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.33333 20H4L8 12H5.33333C4.97971 12 4.64057 11.8595 4.39052 11.6095C4.14048 11.3594 4 11.0203 4 10.6667V5.33333C4 4.97971 4.14048 4.64057 4.39052 4.39052C4.64057 4.14048 4.97971 4 5.33333 4H13.3333C13.687 4 14.0261 4.14048 14.2761 4.39052C14.5262 4.64057 14.6667 4.97971 14.6667 5.33333V16C14.6667 17.4145 14.1048 18.771 13.1046 19.7712C12.1044 20.7714 10.7478 21.3333 9.33333 21.3333V20ZM25.3333 20H20L24 12H21.3333C20.9797 12 20.6406 11.8595 20.3905 11.6095C20.1405 11.3594 20 11.0203 20 10.6667V5.33333C20 4.97971 20.1405 4.64057 20.3905 4.39052C20.6406 4.14048 20.9797 4 21.3333 4H29.3333C29.687 4 30.0261 4.14048 30.2761 4.39052C30.5262 4.64057 30.6667 4.97971 30.6667 5.33333V16C30.6667 17.4145 30.1048 18.771 29.1046 19.7712C28.1044 20.7714 26.7478 21.3333 25.3333 21.3333V20Z" fill="currentColor" fillOpacity="0.2"/>
        </svg>
      </div>
      
      {/* Quote text */}
      <p className="mb-6 text-gray-600 dark:text-gray-300 italic">"{quote}"</p>
      
      {/* Author info */}
      <div className="flex items-center">
        <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-orange-100 dark:border-orange-900/30">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={author}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-gray-900 dark:text-white">{author}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{position}</p>
        </div>
      </div>
    </motion.div>
  )
}