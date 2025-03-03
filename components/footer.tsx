"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const footer = footerRef.current

    if (footer) {
      gsap.fromTo(
        ".footer-content > div",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <footer ref={footerRef} className="bg-[#8B5E3C] text-white/90 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 footer-content">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-md flex items-center justify-center">
                <img src="/logo-black.png" alt="EcoRec" className="w-10 h-10" />
              </div>
              <span className="text-xl font-bold text-white">EcoRec</span>
            </div>
            <p className="text-white/80">
              Platform yang menghubungkan aksi nyata untuk lingkungan dengan sistem reward digital.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {["Beranda", "Tentang Kami", "Cara Kerja", "Testimoni", "Rewards"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Kontak</h3>
            <ul className="space-y-2 text-white/80">
              <li>twntyfve@gmail.com</li>
              <li>+62 858 8816 7591</li>
              <li>Jl. Budi Utomo No.7, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Ikuti Kami</h3>
            <div className="flex gap-4">
              {["facebook", "twitter", "instagram", "youtube"].map((social, index) => (
                <Link
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          &copy; {new Date().getFullYear()} EcoRec. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  )
}

