"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current

    if (section && image) {
      // Hero content animation
      gsap.fromTo(
        ".hero-content > *",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
      )

      // Image animation
      gsap.fromTo(image, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.4 })

      // Parallax effect on scroll
      gsap.to(".parallax-bg", {
        backgroundPositionY: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#F5F5DC] py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 parallax-bg"></div>
      <div className="container relative grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-6 hero-content">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#8B5E3C]">
            Ubah Sampah Jadi Reward!
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#4CAF50]">
            Bersihkan lingkungan & dapatkan manfaatnya dengan EcoRec.
          </p>
          <p className="text-muted-foreground">
            Platform yang menghubungkan aksi nyata untuk lingkungan dengan sistem reward digital yang menguntungkan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-[#4CAF50] hover:bg-[#3d8b3d] text-white text-lg py-6 px-8 hero-btn-primary">
              Mulai Sekarang
            </Button>
            <Button
              variant="outline"
              className="border-[#8B5E3C] text-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-white text-lg py-6 px-8 hero-btn-secondary"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
        <div
          ref={imageRef}
          className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-500"
        >
          <Image
            src="/placeholder.svg?height=500&width=600"
            alt="Orang membersihkan lingkungan"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

