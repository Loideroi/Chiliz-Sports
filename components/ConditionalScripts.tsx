'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { useCookieConsent } from '@/contexts/CookieConsentContext'

export default function ConditionalScripts() {
  const { hasConsent, consent } = useCookieConsent()
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  // Listen for consent changes and update analytics consent mode
  useEffect(() => {
    const handleConsentUpdate = () => {
      if (typeof window.gtag !== 'undefined') {
        // Update consent mode when user changes preferences
        window.gtag('consent', 'update', {
          analytics_storage: hasConsent('statistics') ? 'granted' : 'denied',
          ad_storage: hasConsent('marketing') ? 'granted' : 'denied',
          ad_user_data: hasConsent('marketing') ? 'granted' : 'denied',
          ad_personalization: hasConsent('marketing') ? 'granted' : 'denied',
        })
        console.log('Analytics consent updated:', {
          statistics: hasConsent('statistics'),
          marketing: hasConsent('marketing')
        })
      }
    }

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate)
    return () => window.removeEventListener('cookieConsentUpdated', handleConsentUpdate)
  }, [hasConsent])

  // Only render analytics scripts if user has consented to statistics
  const showAnalytics = hasConsent('statistics')

  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID not configured')
    return null
  }

  return (
    <>
      {showAnalytics && (
        <>
          {/* Google Analytics - Consent Mode */}
          <Script id="google-analytics-consent" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              // Set default consent mode before loading GA
              gtag('consent', 'default', {
                'analytics_storage': 'granted',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
              });
            `}
          </Script>

          {/* Google Analytics - Main Script */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                anonymize_ip: true
              });
            `}
          </Script>
        </>
      )}
    </>
  )
}
