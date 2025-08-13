import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"
import ColorModeProvider from "@/provider/ThemeProvider"
import Navbar from "@/components/globals/navbar"
import LenisWrapper from "@/components/wrappers/lenis-wrapper"

const averta = localFont({
  src: "../fonts/averta/id-averta-2.woff",
  variable: "--font-averta",
  display: "swap",
})

const avertaSemibold = localFont({
  src: "../fonts/averta/id-averta-1.woff",
  variable: "--font-averta-semibold",
  display: "swap",
})

const avertaBold = localFont({
  src: "../fonts/averta/id-averta-3.woff",
  variable: "--font-averta-bold",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sulav Baral",
  description: "Sulav Baral's personal website",
  keywords: [
    "Sulav Baral",
    "Sulav",
    "Baral",
    "Sulav Baral's personal website",
    "Fullstack Developer",
    "Software Engineer",
    "React Developer",
    "React",
    "ReactJS",
    "React Native",
    "React Native Developer",
    "Frontend Developer",
    "Backend Developer",
    "NodeJS Developer",
    "NodeJS",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${averta.variable} ${avertaSemibold.variable} ${avertaBold.variable}`}>
        <LenisWrapper>
          <ColorModeProvider>
            <Navbar />
            {children}
          </ColorModeProvider>
        </LenisWrapper>
      </body>
    </html>
  )
}
