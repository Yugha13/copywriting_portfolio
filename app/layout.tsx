import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Playfair_Display } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"], variable: "--font-poppins" })
const playfair = Playfair_Display({ weight: ["400", "500", "700"], subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Yugha – Copywriter | Web & App Developer",
  description: "Portfolio of Yugha, a versatile creator with expertise in copywriting and full-stack development."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} ${playfair.variable} font-sans`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}