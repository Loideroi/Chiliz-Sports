'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import CookieSettingsModal from '@/components/CookieSettingsModal'

export default function ManageCookies() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleClose = () => {
    setIsModalOpen(false)
    // Redirect to home page after closing
    router.push('/')
  }

  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary-purple uppercase">
            Manage Cookies
          </h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Use the cookie settings modal to manage your preferences. You can choose which categories
              of cookies you want to accept.
            </p>
            <p>
              Functional cookies are always active as they are essential for the website to work properly.
            </p>
            <div className="mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                Open Cookie Settings
              </button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm">
                For more information about how we use cookies, please see our{' '}
                <a href="/cookies-policy" className="text-accent-pink hover:underline">
                  Cookie Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Settings Modal */}
      <CookieSettingsModal
        isOpen={isModalOpen}
        onClose={handleClose}
      />
    </div>
  )
}
