"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  description: string
  link: string
}

export default function ProjectCard({ title, category, image, description, link }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 flex items-end p-6"
          whileHover={{ opacity: 1 }}
        >
          <span className="text-white font-medium">{category}</span>
        </motion.div>
      </div>
      <div className="p-6">
        <div className="text-sm text-orange-500 font-medium mb-1">{category}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 500 }}>
          <Link
            href={link}
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium group"
          >
            View Project
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

