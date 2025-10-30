'use client'

import { CookieConsentProvider } from '@/contexts/CookieConsentContext'
import CookieBanner from './CookieBanner'
import ConditionalScripts from './ConditionalScripts'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <CookieConsentProvider>
      {children}
      <CookieBanner />
      <ConditionalScripts />
    </CookieConsentProvider>
  )
}
