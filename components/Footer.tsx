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
                <Link href="/what-we-offer" className="text-neutral-gray-light hover:text-accent-pink transition-colors text-sm">
                  What We Offer
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-neutral-gray-light hover:text-accent-pink transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies-policy" className="text-neutral-gray-light hover:text-accent-pink transition-colors text-sm">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link href="/manage-cookies" className="text-neutral-gray-light hover:text-accent-pink transition-colors text-sm">
                  Manage Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-purple-900 text-center text-neutral-gray-light text-sm">
          <p>
            © Copyright 2018 – 2025. All Rights Reserved. Mediarex Enterprises Limited registered in Malta and its subsidiaries.
          </p>
        </div>
      </div>
    </footer>
  )
}
