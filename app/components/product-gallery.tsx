"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <>
      <div className="relative group">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-4 rounded-t-lg flex items-center justify-center overflow-hidden">
          <img
            src={images[currentImage] || "/placeholder.svg"}
            alt={`${productName} - Image ${currentImage + 1}`}
            className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => setIsOpen(true)}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>

        {images.length > 1 && (
          <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/50 hover:bg-white/80 rounded-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={prevImage}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/50 hover:bg-white/80 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={nextImage}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentImage === index ? "bg-blue-600 w-4" : "bg-gray-300"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        )}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <div className="relative">
            <img
              src={images[currentImage] || "/placeholder.svg"}
              alt={`${productName} - Image ${currentImage + 1}`}
              className="w-full object-contain max-h-[70vh]"
            />

            {images.length > 1 && (
              <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-black/20 hover:bg-black/40 rounded-full"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-black/20 hover:bg-black/40 rounded-full"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  className={`border-2 rounded-md overflow-hidden ${
                    currentImage === index ? "border-blue-600" : "border-transparent"
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <img src={img || "/placeholder.svg"} alt="" className="w-16 h-16 object-cover" />
                </button>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
