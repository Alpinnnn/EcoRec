"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current

    if (section) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      tl.fromTo(".cta-title", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" })
        .fromTo(".cta-text", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .fromTo(".cta-form", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4")

      // Button hover animation
      const button = document.querySelector(".cta-button")
      if (button) {
        button.addEventListener("mouseenter", () => {
          gsap.to(".arrow-icon", { x: 5, duration: 0.3, ease: "power2.out" })
        })

        button.addEventListener("mouseleave", () => {
          gsap.to(".arrow-icon", { x: 0, duration: 0.3, ease: "power2.out" })
        })
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-[#4CAF50]">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 cta-title">Mulai Bersihkan, Dapatkan Reward!</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-10 cta-text">
          Bergabunglah dengan ribuan orang yang telah berkontribusi untuk lingkungan dan mendapatkan manfaatnya. Daftar
          sekarang dan mulai perjalanan Anda bersama EcoRec.
        </p>

        <div className="max-w-md mx-auto cta-form">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Masukkan email Anda"
              className="bg-white/90 border-0 focus-visible:ring-2 focus-visible:ring-white"
            />
            <Button className="bg-[#8B5E3C] hover:bg-[#6d4a30] text-white cta-button">
              Daftar <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
            </Button>
          </div>
          <p className="text-white/80 text-sm mt-3">
            Dengan mendaftar, Anda menyetujui Syarat & Ketentuan serta Kebijakan Privasi kami.
          </p>
        </div>
      </div>
    </section>
  )
}

