"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function ComingSoonModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Cek apakah user sudah pernah melihat modal
    const hasSeenModal = localStorage.getItem("hasSeenComingSoonModal")
    if (!hasSeenModal) {
      setIsOpen(true)
    }
  }, [])

  const handleCheckboxChange = (checked: boolean) => {
    if (checked) {
      // Simpan preferensi user ke localStorage
      localStorage.setItem("hasSeenComingSoonModal", "true")
    } else {
      localStorage.removeItem("hasSeenComingSoonModal")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-[#4CAF50]">
            🌱 Coming Soon!
          </DialogTitle>
          <DialogDescription className="text-center pt-4">
            <p className="mb-4">
              Terima kasih telah mengunjungi EcoRec! Saat ini kami sedang dalam tahap pengembangan
              untuk memberikan pengalaman terbaik dalam mengubah sampah menjadi reward digital.
            </p>
            <p className="mb-6">
              Pantau terus perkembangan kami untuk mendapatkan informasi terbaru tentang peluncuran platform.
            </p>
            <div className="flex items-center space-x-2 justify-center">
              <Checkbox
                id="dontShowAgain"
                onCheckedChange={handleCheckboxChange}
              />
              <Label
                htmlFor="dontShowAgain"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Jangan tampilkan lagi
              </Label>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
} 