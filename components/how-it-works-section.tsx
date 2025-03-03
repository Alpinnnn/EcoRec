"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Scale, Coins } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current

    if (section) {
      // Title animation
      gsap.fromTo(
        ".how-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Cards animation
      gsap.fromTo(
        ".how-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".how-cards",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-[#F5F5DC]/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8B5E3C] mb-16 how-title">Cara Kerja</h2>

        <div className="grid md:grid-cols-3 gap-8 how-cards">
          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group how-card">
            <div className="h-2 bg-[#4CAF50]"></div>
            <CardContent className="pt-6 pb-8 px-6">
              <div className="w-16 h-16 rounded-full bg-[#4CAF50]/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-[#4CAF50]/20 transition-colors duration-300">
                <Camera className="w-8 h-8 text-[#4CAF50]" />
              </div>
              <h3 className="text-xl font-bold text-center text-[#8B5E3C] mb-4">Dokumentasikan</h3>
              <p className="text-center text-muted-foreground">
                Ambil foto lokasi sebelum dan sesudah Anda membersihkannya sebagai bukti kontribusi Anda.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group how-card">
            <div className="h-2 bg-[#4CAF50]"></div>
            <CardContent className="pt-6 pb-8 px-6">
              <div className="w-16 h-16 rounded-full bg-[#4CAF50]/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-[#4CAF50]/20 transition-colors duration-300">
                <Scale className="w-8 h-8 text-[#4CAF50]" />
              </div>
              <h3 className="text-xl font-bold text-center text-[#8B5E3C] mb-4">Laporkan</h3>
              <p className="text-center text-muted-foreground">
                Laporkan berat sampah yang berhasil Anda kumpulkan dan jenis-jenis sampahnya.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group how-card">
            <div className="h-2 bg-[#4CAF50]"></div>
            <CardContent className="pt-6 pb-8 px-6">
              <div className="w-16 h-16 rounded-full bg-[#4CAF50]/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-[#4CAF50]/20 transition-colors duration-300">
                <Coins className="w-8 h-8 text-[#4CAF50]" />
              </div>
              <h3 className="text-xl font-bold text-center text-[#8B5E3C] mb-4">Dapatkan Reward</h3>
              <p className="text-center text-muted-foreground">
                Terima koin digital yang dapat ditukarkan dengan berbagai hadiah menarik dari partner kami.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

