'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about-us' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-primary-purple"
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6">
              <Link href="/" className="flex items-center" onClick={onClose}>
                <Image
                  src="/chiliz-sports-logo.svg"
                  alt="Chiliz Sports"
                  width={180}
                  height={36}
                  priority
                />
              </Link>
              <button
                onClick={onClose}
                className="text-white"
                aria-label="Close menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col items-center justify-center space-y-8">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`text-3xl font-bold ${
                      isActive(item.href)
                        ? 'text-accent-pink'
                        : 'text-white hover:text-accent-pink'
                    } transition-colors`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="p-6 flex justify-center">
              <Link href="#contact" onClick={onClose} className="btn-primary w-full max-w-xs text-center">
                CONTACT US
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
