"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { useSmoothScroll } from "@/app/hooks/useSmoothScroll"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollTo } = useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    // Animation
    gsap.fromTo(".header-content", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    scrollTo(target)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        isScrolled ? "bg-background/95 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between header-content">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="EcoRec Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-xl font-bold text-[#4CAF50]">EcoRec</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="text-sm font-medium hover:text-[#4CAF50] transition-colors"
          >
            Beranda
          </Link>
          <Link
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className="text-sm font-medium hover:text-[#4CAF50] transition-colors"
          >
            Tentang Kami
          </Link>
          <Link
            href="#how-it-works"
            onClick={(e) => handleNavClick(e, "#how-it-works")}
            className="text-sm font-medium hover:text-[#4CAF50] transition-colors"
          >
            Cara Kerja
          </Link>
          <Link
            href="#testimonials"
            onClick={(e) => handleNavClick(e, "#testimonials")}
            className="text-sm font-medium hover:text-[#4CAF50] transition-colors"
          >
            Testimoni
          </Link>
          <Link
            href="#rewards"
            onClick={(e) => handleNavClick(e, "#rewards")}
            className="text-sm font-medium hover:text-[#4CAF50] transition-colors"
          >
            Rewards
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:flex border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white"
          >
            Masuk
          </Button>
          <Button className="bg-[#4CAF50] hover:bg-[#3d8b3d] text-white">Daftar</Button>
        </div>
      </div>
    </header>
  )
}

