"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import RotatingSkillCard from './rotating-skill-card'
import ParticleBackground from './particle-background'

export default function SkillsSection() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const skills = [
    {
      icon: '✍️',
      title: 'Strategic Copywriting',
      description: 'Transform your message into a compelling story that captivates, convinces, and converts your audience into loyal customers.',
      color: '#f97316'
    },
    {
      icon: '💻',
      title: 'Elite Web Development',
      description: 'Elevate your digital presence with blazing-fast, pixel-perfect websites that turn visitors into customers.',
      color: '#8b5cf6'
    },
    {
      icon: '📱',
      title: 'App Innovation',
      description: 'Create game-changing mobile experiences that keep users coming back and drive business growth.',
      color: '#06b6d4'
    },
    {
      icon: '🎨',
      title: 'High-Converting Pages',
      description: 'Design stunning landing pages that not only look beautiful but deliver exceptional conversion rates.',
      color: '#ec4899'
    }
  ]

  return (
    <section className="py-32 relative overflow-hidden min-h-screen flex items-center">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95 backdrop-blur-sm z-1" />

      <motion.div style={{ opacity }} className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-orange-500 font-medium text-lg bg-orange-50 px-6 py-2 rounded-full inline-block mb-4"
          >
            EXPERTISE THAT DELIVERS RESULTS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mt-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          >
            Transforming Ideas Into Digital Success
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed"
          >
            Unlock your business's full potential with our blend of strategic creativity and technical mastery.
            We don't just build digital solutions – we craft experiences that drive growth and deliver measurable results.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <RotatingSkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              color={skill.color}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}