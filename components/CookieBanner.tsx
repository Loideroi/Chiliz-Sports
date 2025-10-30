'use client'

import { useState } from 'react'
import { useCookieConsent } from '@/contexts/CookieConsentContext'
import CookieSettingsModal from './CookieSettingsModal'

export default function CookieBanner() {
  const { showBanner, acceptAll, rejectAll } = useCookieConsent()
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!showBanner) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 animate-slide-up">
        <div className="bg-primary-purple border-t border-white/20 shadow-xl">
          <div className="container-custom py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8">
              {/* Message */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  We Value Your Privacy
                </h3>
                <p className="text-sm text-neutral-gray-light leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                  By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                  You can manage your preferences or learn more in our{' '}
                  <a href="/cookies-policy" className="text-accent-pink hover:underline">
                    Cookie Policy
                  </a>
                  .
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={acceptAll}
                  className="btn-primary whitespace-nowrap px-6"
                >
                  Accept All
                </button>
                <button
                  onClick={rejectAll}
                  className="btn-secondary whitespace-nowrap px-6"
                >
                  Reject All
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-white border border-white/30 hover:border-white/50 px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap uppercase text-sm"
                >
                  Manage Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      <CookieSettingsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </>
  )
}
