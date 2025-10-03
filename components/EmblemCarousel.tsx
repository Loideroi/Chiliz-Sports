'use client'

import Image from 'next/image'

export default function EmblemCarousel() {
  const emblems = [
    { name: 'AC Milan', src: '/emblems/acm.png' },
    { name: 'Arsenal', src: '/emblems/afc.png' },
    { name: 'Barcelona', src: '/emblems/bar.png' },
    { name: 'Inter Milan', src: '/emblems/int.png' },
    { name: 'Juventus', src: '/emblems/juv.png' },
    { name: 'Napoli', src: '/emblems/nap.png' },
    { name: 'PSG', src: '/emblems/psg.png' },
    { name: 'Tottenham', src: '/emblems/tot.png' },
  ]

  // Duplicate emblems for seamless loop
  const duplicatedEmblems = [...emblems, ...emblems, ...emblems]

  return (
    <div className="relative overflow-hidden w-full">
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex animate-scroll">
        {duplicatedEmblems.map((emblem, index) => (
          <div key={index} className="flex-shrink-0 mx-4">
            <div className="relative w-24 h-24 md:w-28 md:h-28">
              {/* Container background */}
              <div className="absolute inset-0">
                <Image
                  src="/emblems/container.png"
                  alt="Emblem container"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Team emblem */}
              <div className="absolute inset-0 flex items-center justify-center p-3">
                <div className="relative w-full h-full">
                  <Image
                    src={emblem.src}
                    alt={emblem.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
