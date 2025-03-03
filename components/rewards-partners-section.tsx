"use client"

import { useEffect, useRef } from "react"
import PartnersSection from "@/components/partners-section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function RewardsPartnersSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current

    if (section) {
      // Title animation
      gsap.fromTo(
        ".rewards-title",
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

      // Content animation
      gsap.fromTo(
        ".rewards-content > div",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".rewards-content",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // List items animation
      gsap.fromTo(
        ".rewards-list li",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".rewards-list",
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
    <section id="rewards" ref={sectionRef} className="py-20 bg-[#F5F5DC]/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8B5E3C] mb-16 rewards-title">
          Rewards & Partners
        </h2>

        <div className="grid md:grid-cols-2 gap-16 mb-16 rewards-content">
          <div>
            <h3 className="text-2xl font-bold text-[#4CAF50] mb-6">Rewards yang Bisa Kamu Dapatkan</h3>
            <ul className="space-y-4 rewards-list">
              {[
                "Voucher belanja di merchant partner",
                "Diskon produk ramah lingkungan",
                "Tiket masuk tempat wisata",
                "Pulsa & paket data",
                "Donasi untuk program lingkungan",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4CAF50] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#4CAF50] mb-6">Partner Kami</h3>
            <PartnersSection />
          </div>
        </div>
      </div>
    </section>
  )
}

