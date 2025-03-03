"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { gsap } from "gsap"

const testimonials = [
  {
    id: 1,
    name: "Mas Amba (Dreamybull)",
    role: "Streamer",
    content:
      "EcoRec membuat kegiatan bersih-bersih lingkungan jadi lebih menyenangkan. Saya bisa mendapatkan reward sambil berkontribusi untuk bumi!",
    avatar: "https://static.wikia.nocookie.net/thugsauce/images/0/0f/Dreamy.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "Rocky Gerung",
    role: "Akademikus dan filsuf Indonesia",
    content:
      "Sebagai Akademikus dan filsuf Indonesia, EcoRec memberikan saya cara untuk mendapatkan penghasilan tambahan sambil melakukan hal baik untuk lingkungan. Win-win!",
    avatar: "https://awsimages.detik.net.id/community/media/visual/2018/04/20/b4d85399-a743-4a81-a7cd-d82b5c619e58_169.jpeg?w=1200",
    rating: 5,
  },
  {
    id: 3,
    name: "Agus Buntung",
    role: "Mahasiswa",
    content:
      "Saya menggunakan EcoRec di akhir pekan bersama keluarga. Ini cara yang bagus untuk mengajarkan anak-anak tentang pentingnya menjaga lingkungan.",
    avatar: "https://asset-2.tstatic.net/tribunnews/foto/bank/images/Agus-Buntung-Tersangka-Pelecehan-Seksual-di-Mataram-NTB.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Dewi Lestari",
    role: "Ibu Rumah Tangga",
    content:
      "Voucher belanja yang saya dapatkan dari EcoRec sangat membantu untuk kebutuhan sehari-hari. Terima kasih EcoRec!",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 5,
    name: "Rudi Hartono",
    role: "Pelajar SMA",
    content:
      "Saya mengajak teman-teman sekolah untuk bergabung dengan EcoRec. Sekarang kami rutin membersihkan pantai setiap bulan.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0 ? Math.max(0, testimonials.length - itemsPerPage) : prevIndex - itemsPerPage,
    )
  }

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

  useEffect(() => {
    // Animate cards when they change
    gsap.fromTo(
      ".testimonial-card",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
    )
  }, [])

  return (
    <div className="relative">
      <div className="grid md:grid-cols-3 gap-6">
        {currentTestimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 testimonial-card"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#8B5E3C]">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                  />
                ))}
              </div>

              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`block w-2 h-2 rounded-full ${currentIndex / itemsPerPage === i ? "bg-[#4CAF50]" : "bg-gray-300"}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

