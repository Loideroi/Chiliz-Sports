'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

// Lazy load mobile menu - only loaded when user opens it
const MobileMenu = dynamic(() => import('./MobileMenu'), {
  ssr: false
})

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about-us' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(11, 5, 24, 0.8)', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <nav className="container-custom py-4">
          {/* Desktop Layout - 3 columns */}
          <div className="hidden md:grid grid-cols-3 items-center">
            {/* Logo - Left */}
            <div className="flex justify-start">
              <Link href="/" className="flex items-center">
                <Image
                  src="/chiliz-sports-logo.svg"
                  alt="Chiliz Sports"
                  width={120}
                  height={24}
                  priority
                />
              </Link>
            </div>

            {/* Navigation - Center */}
            <div className="flex items-center justify-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors uppercase ${
                    isActive(item.href)
                      ? 'text-accent-pink'
                      : 'text-white hover:text-accent-pink'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Contact Button - Right */}
            <div className="flex justify-end">
              <Link
                href="#contact"
                className="text-sm py-2 px-6 rounded-full font-medium transition-colors uppercase"
                style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(11, 5, 24)' }}
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/chiliz-sports-logo.svg"
                alt="Chiliz Sports"
                width={120}
                height={24}
                priority
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="text-white"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
