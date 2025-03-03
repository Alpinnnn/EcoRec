"use client"

import { useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"

const partners = [
  { id: 1, name: "Eco Store", logo: "/placeholder.svg?height=80&width=120" },
  { id: 2, name: "Green Market", logo: "/placeholder.svg?height=80&width=120" },
  { id: 3, name: "Nature Shop", logo: "/placeholder.svg?height=80&width=120" },
  { id: 4, name: "Eco Travel", logo: "/placeholder.svg?height=80&width=120" },
  { id: 5, name: "Clean Energy", logo: "/placeholder.svg?height=80&width=120" },
  { id: 6, name: "Recycle Co", logo: "/placeholder.svg?height=80&width=120" },
]

export default function PartnersSection() {
  useEffect(() => {
    // Hover animation for partner logos
    gsap.utils.toArray(".partner-logo").forEach((logo: any) => {
      logo.addEventListener("mouseenter", () => {
        gsap.to(logo, { y: -5, scale: 1.05, duration: 0.3, ease: "power2.out" })
      })

      logo.addEventListener("mouseleave", () => {
        gsap.to(logo, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" })
      })
    })
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {partners.map((partner) => (
        <div
          key={partner.id}
          className="bg-white rounded-lg p-4 flex items-center justify-center h-24 shadow-sm hover:shadow-md transition-shadow duration-300 partner-logo"
        >
          <div className="relative w-full h-full">
            <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
          </div>
        </div>
      ))}
    </div>
  )
}

