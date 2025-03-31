"use client"

import { motion } from "framer-motion"

export default function SkillsSection() {
  const skills = [
    { name: "Copywriting", level: 95 },
    { name: "Web Development", level: 90 },
    { name: "App Development", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "SEO", level: 85 },
    { name: "Digital Marketing", level: 75 },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-medium">MY EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">Skills & Proficiency</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            A versatile skill set that combines creative writing with technical development, allowing me to deliver
            comprehensive solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div
            className="p-6 bg-gray-50 rounded-lg"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-2">Languages</h3>
            <p className="text-gray-600">HTML, CSS, JavaScript, TypeScript, Python</p>
          </motion.div>

          <motion.div
            className="p-6 bg-gray-50 rounded-lg"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-2">Frameworks</h3>
            <p className="text-gray-600">React, Next.js, Vue, Express, Django</p>
          </motion.div>

          <motion.div
            className="p-6 bg-gray-50 rounded-lg"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-2">Tools</h3>
            <p className="text-gray-600">Git, Figma, Adobe Suite, VS Code, Docker</p>
          </motion.div>

          <motion.div
            className="p-6 bg-gray-50 rounded-lg"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-2">Copywriting</h3>
            <p className="text-gray-600">Email, Landing Pages, SEO, Ad Copy, UX Writing</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

