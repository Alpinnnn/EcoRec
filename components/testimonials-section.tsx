"use client"

import { useEffect, useRef } from "react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current

    if (section) {
      // Title animation
      gsap.fromTo(
        ".testimonials-title",
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

      // Carousel animation
      gsap.fromTo(
        ".testimonials-carousel",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
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
    <section id="testimonials" ref={sectionRef} className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8B5E3C] mb-16 testimonials-title">
          Apa Kata Mereka
        </h2>
        <div className="testimonials-carousel">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  )
}

