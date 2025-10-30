'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

export type CookieCategory = 'functional' | 'preferences' | 'statistics' | 'marketing'

export interface CookieConsent {
  functional: boolean      // Always true (required)
  preferences: boolean
  statistics: boolean
  marketing: boolean
  timestamp: string
  version: string
}

interface CookieConsentContextType {
  consent: CookieConsent | null
  hasConsent: (category: CookieCategory) => boolean
  updateConsent: (preferences: Partial<CookieConsent>) => void
  acceptAll: () => void
  rejectAll: () => void
  clearConsent: () => void
  isConsentGiven: boolean
  showBanner: boolean
  setShowBanner: (show: boolean) => void
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

const CONSENT_KEY = 'chiliz-sports-cookie-consent'
const CONSENT_VERSION = '1.0'
const CONSENT_EXPIRY_DAYS = 365 // 12 months

const defaultConsent: CookieConsent = {
  functional: true,      // Always true - required for website operation
  preferences: false,
  statistics: false,
  marketing: false,
  timestamp: new Date().toISOString(),
  version: CONSENT_VERSION,
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  // Load consent from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      const stored = localStorage.getItem(CONSENT_KEY)

      if (stored) {
        const parsed: CookieConsent = JSON.parse(stored)

        // Check if consent is expired (older than CONSENT_EXPIRY_DAYS)
        const consentDate = new Date(parsed.timestamp)
        const daysSinceConsent = (Date.now() - consentDate.getTime()) / (1000 * 60 * 60 * 24)

        // Check if version matches
        const isExpired = daysSinceConsent > CONSENT_EXPIRY_DAYS
        const isOutdated = parsed.version !== CONSENT_VERSION

        if (isExpired || isOutdated) {
          // Consent expired or outdated - clear and show banner
          localStorage.removeItem(CONSENT_KEY)
          setConsent(null)
          setShowBanner(true)
        } else {
          // Valid consent found
          setConsent(parsed)
          setShowBanner(false)
        }
      } else {
        // No consent found - show banner
        setShowBanner(true)
      }
    } catch (error) {
      console.error('Error loading cookie consent:', error)
      setShowBanner(true)
    } finally {
      setIsInitialized(true)
    }
  }, [])

  // Save consent to localStorage
  const saveConsent = useCallback((newConsent: CookieConsent) => {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(newConsent))
      setConsent(newConsent)
      setShowBanner(false)

      // Dispatch custom event for other components to react to consent changes
      window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: newConsent }))
    } catch (error) {
      console.error('Error saving cookie consent:', error)
    }
  }, [])

  // Check if user has consented to a specific category
  const hasConsent = useCallback((category: CookieCategory): boolean => {
    if (!consent) return category === 'functional' // Only functional allowed without consent
    return consent[category] === true
  }, [consent])

  // Update consent preferences
  const updateConsent = useCallback((preferences: Partial<CookieConsent>) => {
    const newConsent: CookieConsent = {
      ...defaultConsent,
      ...preferences,
      functional: true, // Always true
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    }
    saveConsent(newConsent)
  }, [saveConsent])

  // Accept all categories
  const acceptAll = useCallback(() => {
    const newConsent: CookieConsent = {
      functional: true,
      preferences: true,
      statistics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    }
    saveConsent(newConsent)
  }, [saveConsent])

  // Reject all non-essential categories
  const rejectAll = useCallback(() => {
    const newConsent: CookieConsent = {
      functional: true,      // Required
      preferences: false,
      statistics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    }
    saveConsent(newConsent)
  }, [saveConsent])

  // Clear consent (triggers banner to show again)
  const clearConsent = useCallback(() => {
    try {
      localStorage.removeItem(CONSENT_KEY)
      setConsent(null)
      setShowBanner(true)

      // Dispatch event
      window.dispatchEvent(new CustomEvent('cookieConsentCleared'))
    } catch (error) {
      console.error('Error clearing cookie consent:', error)
    }
  }, [])

  const value: CookieConsentContextType = {
    consent,
    hasConsent,
    updateConsent,
    acceptAll,
    rejectAll,
    clearConsent,
    isConsentGiven: consent !== null,
    showBanner: showBanner && isInitialized,
    setShowBanner,
  }

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  }
  return context
}
