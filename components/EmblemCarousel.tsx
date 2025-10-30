'use client'

import { useRef } from 'react'
import Image from 'next/image'

export default function EmblemCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const emblems = [
    { name: 'AC Milan', src: '/emblems/acm.webp' },
    { name: 'Arsenal', src: '/emblems/afc.webp' },
    { name: 'Barcelona', src: '/emblems/bar.webp' },
    { name: 'Inter Milan', src: '/emblems/int.webp' },
    { name: 'Juventus', src: '/emblems/juv.webp' },
    { name: 'Napoli', src: '/emblems/nap.webp' },
    { name: 'PSG', src: '/emblems/psg.webp' },
    { name: 'Tottenham', src: '/emblems/tot.webp' },
  ]

  // Duplicate emblems for extended scrolling
  const duplicatedEmblems = [...emblems, ...emblems, ...emblems, ...emblems]

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    isDragging.current = true
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft
    scrollLeft.current = scrollContainerRef.current.scrollLeft
    scrollContainerRef.current.style.cursor = 'grabbing'
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX.current) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk
  }

  const handleMouseUp = () => {
    isDragging.current = false
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab'
    }
  }

  const handleMouseLeave = () => {
    isDragging.current = false
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab'
    }
  }

  return (
    <div className="w-full">
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide cursor-grab"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="flex gap-6 py-4">
          {duplicatedEmblems.map((emblem, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="relative w-28 h-28 md:w-32 md:h-32">
                {/* Container background */}
                <div className="absolute inset-0">
                  <Image
                    src="/emblems/container.webp"
                    alt="Emblem container"
                    fill
                    className="object-contain"
                    draggable="false"
                  />
                </div>
                {/* Team emblem */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={emblem.src}
                      alt={emblem.name}
                      fill
                      className="object-contain"
                      draggable="false"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
