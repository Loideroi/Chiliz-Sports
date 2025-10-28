import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary-purple-dark border-t border-purple-900">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Brand */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/chiliz-sports-logo.svg"
                alt="Chiliz Sports"
                width={180}
                height={40}
              />
            </Link>
            <p className="text-neutral-gray-light text-sm">
              When Access Matters, We&apos;re Already Inside.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-gray-light hover:text-accent-pink transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-neutral-gray-light hover:text-accent-pink transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-gray-light hover:text-accent-pink transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">POLICIES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cookies-policy" className="text-neutral-gray-light hover:text-accent-pink transition-colors text-sm">
                  Cookies policy
                </Link>
              </li>
              <li>
                <Link href="/manage-cookies" className="text-neutral-gray-light hover:text-accent-pink transition-colors text-sm">
                  Manage cookies
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-neutral-gray-light hover:text-accent-pink transition-colors text-sm">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal Disclaimers */}
        <div className="mt-12 pt-8 border-t border-purple-900 text-neutral-gray-light text-sm space-y-4">
          <p className="text-center">
            © Copyright 2018 – 2025. All Rights Reserved.
          </p>
          <p className="text-center max-w-5xl mx-auto">
            The data and content provided on the Website, including but not limited to press releases, partnerships announcements, testimonials and other related information, may be obtained from third-party sources. Chiliz Sports and its operators do not warrant the completeness, reliability, or accuracy of the information on this Website and will not be liable for any errors, omissions, or any actions taken based on this information.
          </p>
          <p className="text-center max-w-5xl mx-auto">
            This website may include third-party content used with permission. Any reproduction, distribution, transformation, or any other use or form of exploitation of such content, in whole or in part, is strictly prohibited without prior written consent from the owner.
          </p>
        </div>
      </div>
    </footer>
  )
}
