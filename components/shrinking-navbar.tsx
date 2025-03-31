"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ShrinkingNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    if (href && href.startsWith("#")) {
      const targetId = href.substring(1)
      const element = document.getElementById(targetId)
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: offsetTop - 100, // Adjust for navbar height
          behavior: "smooth",
        })
        setMobileMenuOpen(false)
      }
    }
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`mx-auto transition-all duration-300 ${scrolled ? "w-[95%] px-4" : "container px-6"}`}>
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <motion.div
                className={`flex items-center justify-center bg-orange-500 rounded-full transition-all duration-300 ${
                  scrolled ? "h-9 w-9" : "h-12 w-12"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-bold text-white">YU</span>
              </motion.div>
              <span
                className={`font-bold transition-all duration-300 ${
                  scrolled ? "text-lg ml-2 text-gray-800" : "text-2xl ml-3 text-white"
                }`}
              >
                Yugha
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {["services", "portfolio", "about", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  onClick={handleLinkClick}
                  className={`hover:text-orange-500 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  onClick={handleLinkClick}
                  className={`px-5 py-2 rounded-full transition-colors ${
                    scrolled
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  Hire Me
                </Link>
              </motion.div>
            </div>

            <button className="md:hidden text-gray-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg
                className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-white"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-white pt-20 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <div className="flex flex-col space-y-4">
            {["services", "portfolio", "about", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                onClick={handleLinkClick}
                className="text-gray-800 hover:text-orange-500 transition-colors py-3 text-lg border-b border-gray-100"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className="bg-orange-500 text-white hover:bg-orange-600 transition-colors py-3 text-center rounded-full mt-4"
            >
              Hire Me
            </Link>
          </div>
        </motion.div>
      )}
    </>
  )
}

