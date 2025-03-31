"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  avatar: string
}

export default function TestimonialCard({ quote, author, position, avatar }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-center mb-6">
        <svg
          className="w-10 h-10 text-orange-500 opacity-20"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={author}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-gray-600 text-sm">{position}</p>
        </div>
      </div>
    </motion.div>
  )
}

