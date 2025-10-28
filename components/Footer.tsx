import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div>

          {/* Policies Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'rgb(207, 133, 255)' }}>POLICIES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cookies-policy" className="hover:text-accent-pink transition-colors text-sm" style={{ color: 'rgb(38, 10, 64)' }}>
                  Cookies policy
                </Link>
              </li>
              <li>
                <Link href="/manage-cookies" className="hover:text-accent-pink transition-colors text-sm" style={{ color: 'rgb(38, 10, 64)' }}>
                  Manage cookies
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-accent-pink transition-colors text-sm" style={{ color: 'rgb(38, 10, 64)' }}>
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal Disclaimers */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-sm space-y-4" style={{ color: 'rgb(38, 10, 64)' }}>
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
