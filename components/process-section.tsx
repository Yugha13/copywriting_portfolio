"use client"

import { motion } from "framer-motion"

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "I start by understanding your business, goals, and target audience to create a tailored strategy.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Based on research, I develop a comprehensive plan that aligns with your objectives and timeline.",
    },
    {
      number: "03",
      title: "Creation",
      description:
        "I craft compelling copy and develop robust code that works together to deliver your message effectively.",
    },
    {
      number: "04",
      title: "Refinement",
      description:
        "Through collaborative feedback and testing, I refine the solution until it perfectly meets your needs.",
    },
    {
      number: "05",
      title: "Launch",
      description: "Your project goes live with my support to ensure a smooth transition and optimal performance.",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-medium">HOW I WORK</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">My Process</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            A structured approach that ensures clarity, collaboration, and exceptional results for every project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block h-16 border-l border-dashed border-gray-300 ml-8 my-4"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

