"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current

    if (section) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      tl.fromTo(".about-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }).fromTo(
        ".about-content",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3",
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-4 about-title">Tentang EcoRec</h2>
          <p className="text-muted-foreground about-content">
            EcoRec adalah platform inovatif yang menggabungkan kepedulian lingkungan dengan sistem reward digital. Kami
            percaya bahwa setiap tindakan kecil untuk lingkungan layak mendapatkan apresiasi.
          </p>
        </div>
      </div>
    </section>
  )
}

