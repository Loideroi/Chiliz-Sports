import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-purple-dark border-t border-purple-900">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="text-accent-pink text-3xl font-bold">
                <span className="inline-block transform -skew-x-12">)</span>
              </div>
              <span className="text-white text-xl font-bold">
                chiliz <span className="font-light">sports</span>
              </span>
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
            © Copyright {currentYear} - {currentYear + 7}. All Rights Reserved. Madlane Enterprises Limited registered in Malta and its subsidiaries.
          </p>
          <p className="mt-2 text-xs">
            We may use content disclosed on Madlane Sports (including any projects or brands associated with this name) by you with your prior written consent, but such consent or the extent or manner in which we use such information may not be deemed or considered or otherwise implied to be any form of endorsement from you towards Madlane or the way we use such information. If at any time you feel uncomfortable with the way we may use any content provided by you or disclosed on Madlane Sports or if for any reason you feel that your earlier provided consent should be withdrawn, please contact the administration of the site via this website or any other contact provided to you and any content or use of content that you have highlighted without further prior written consent or where further consult without such written consent or disclosure would be withdrawn shall cease to be utilized or publicized without further prior written consent.
          </p>
        </div>
      </div>
    </footer>
  )
}
