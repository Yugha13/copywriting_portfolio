"use client"

import { motion } from "framer-motion"

interface ModernServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
  index?: number
}

export default function ModernServiceCard({ 
  icon, 
  title, 
  description, 
  features,
  index = 0 
}: ModernServiceCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      data-cursor-hover="true"
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-purple-500/20 to-blue-500/30 opacity-50 blur-xl" />
      
      <div className="relative h-full rounded-lg bg-gray-900 p-8 backdrop-blur-xl">
        {/* Icon with animated background */}
        <div className="relative mb-4 inline-flex">
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 blur-md"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.9, 0.7]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800 text-4xl shadow-lg">
            {icon}
          </div>
        </div>
        
        {/* Title with gradient text */}
        <h3 className="mb-3 text-xl font-bold">
          <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h3>
        
        <p className="mb-6 text-gray-400">{description}</p>
        
        {/* Features list with staggered animation */}
        <div className="mt-auto">
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/20">
                  <svg
                    className="h-4 w-4 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-300">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}