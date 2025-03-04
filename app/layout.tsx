"use client"

import type React from "react"

import "./globals.css"
import { useEffect } from "react"
import { Inter } from "next/font/google"
import { Lenis as ReactLenis } from "@studio-freight/react-lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ComingSoonModal } from "@/components/coming-soon-modal"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger)

    // Refresh ScrollTrigger when the page is fully loaded
    const refreshScrollTrigger = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener("load", refreshScrollTrigger)

    return () => {
      window.removeEventListener("load", refreshScrollTrigger)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const lenisOptions = {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
  }

  return (
    <html lang="id">
      <head>
        <title>EcoRec - Ubah Sampah Jadi Reward</title>
        <meta
          name="description"
          content="Platform yang menghubungkan aksi nyata untuk lingkungan dengan sistem reward digital yang menguntungkan."
        />
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/logo.png" color="#4CAF50" />
        <meta name="msapplication-TileColor" content="#4CAF50" />
        <meta name="theme-color" content="#4CAF50" />
      </head>
      <body className={inter.className}>
        <ReactLenis
          root
          options={lenisOptions}
          ref={(lenisInstance: any) => {
            window.__lenis = lenisInstance?.lenis
          }}
        >
          {children}
          <ComingSoonModal />
        </ReactLenis>
      </body>
    </html>
  )
}
