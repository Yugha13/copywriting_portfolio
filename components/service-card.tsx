"use client"

import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-gray-900 p-8 rounded-lg h-full flex flex-col"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="mt-auto">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <svg
                className="w-4 h-4 text-orange-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-300">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

