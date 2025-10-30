'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CookieSettingsModal from './CookieSettingsModal'

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="flex flex-col gap-6 md:flex-row md:gap-20 items-start">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/chiliz-sports-logo.svg"
                alt="Chiliz Sports"
                width={180}
                height={36}
              />
            </Link>
          </div>

          {/* Policies Links - 80px margin on web (gap-20 = 5rem = 80px) */}
          <div className="mt-6 md:mt-0">
            <div className="font-semibold mb-4 uppercase" style={{ color: 'rgb(207, 133, 255)' }}>Policies</div>
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm uppercase">
              <Link href="/cookies-policy" className="hover:text-accent-pink transition-colors" style={{ color: 'rgb(38, 10, 64)' }}>
                Cookies policy
              </Link>
              <Link href="/legal-notice" className="hover:text-accent-pink transition-colors" style={{ color: 'rgb(38, 10, 64)' }}>
                Legal Notice
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="hover:text-accent-pink transition-colors"
                style={{ color: 'rgb(38, 10, 64)' }}
              >
                MANAGE COOKIES
              </button>
              <a href="https://www.chiliz.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-pink transition-colors" style={{ color: 'rgb(38, 10, 64)' }}>
                Privacy policy
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Legal Disclaimers */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-sm space-y-2" style={{ color: 'rgb(38, 10, 64)' }}>
          <p>
            © Copyright 2018 – 2025. All Rights Reserved.
          </p>
          <p>
            The data and content provided on the Website, including but not limited to press releases, partnerships announcements, testimonials and other related information, may be obtained from third-party sources. Chiliz Sports and its operators do not warrant the completeness, reliability, or accuracy of the information on this Website and will not be liable for any errors, omissions, or any actions taken based on this information.
          </p>
          <p>
            This website may include third-party content used with permission. Any reproduction, distribution, transformation, or any other use or form of exploitation of such content, in whole or in part, is strictly prohibited without prior written consent from the owner.
          </p>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      <CookieSettingsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </footer>
  )
}
