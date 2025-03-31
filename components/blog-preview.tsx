"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function BlogPreview() {
  const posts = [
    {
      title: "The Art of Conversion Copywriting: Turning Readers into Customers",
      excerpt:
        "Learn the psychological triggers and persuasive techniques that transform casual browsers into loyal customers through strategic copywriting.",
      date: "May 15, 2023",
      image: "/placeholder.svg?height=300&width=500",
      category: "Copywriting",
    },
    {
      title: "Modern Web Development: Building for Performance and Accessibility",
      excerpt:
        "Discover the latest techniques and best practices for creating websites that are both lightning-fast and accessible to all users.",
      date: "April 22, 2023",
      image: "/placeholder.svg?height=300&width=500",
      category: "Web Development",
    },
    {
      title: "Mobile App UX: Designing Experiences Users Love",
      excerpt:
        "Explore the principles of intuitive mobile app design that keeps users engaged and coming back for more.",
      date: "March 10, 2023",
      image: "/placeholder.svg?height=300&width=500",
      category: "App Development",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-medium">INSIGHTS & THOUGHTS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">From My Blog</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Sharing knowledge and insights on copywriting, development, and digital strategy to help you stay ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium group"
                >
                  Read More
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#" className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium group">
            View All Articles
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
        </div>
      </div>
    </section>
  )
}

