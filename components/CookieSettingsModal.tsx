'use client'

import { useState, useEffect } from 'react'
import { useCookieConsent } from '@/contexts/CookieConsentContext'

interface CookieSettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CookieSettingsModal({ isOpen, onClose }: CookieSettingsModalProps) {
  const { consent, updateConsent } = useCookieConsent()

  const [preferences, setPreferences] = useState({
    functional: true,      // Always true
    preferences: false,
    statistics: false,
    marketing: false,
  })

  // Load current consent state when modal opens
  useEffect(() => {
    if (isOpen && consent) {
      setPreferences({
        functional: true,  // Always true
        preferences: consent.preferences,
        statistics: consent.statistics,
        marketing: consent.marketing,
      })
    }
  }, [isOpen, consent])

  const handleSave = () => {
    updateConsent(preferences)
    onClose()
  }

  const handleToggle = (category: 'preferences' | 'statistics' | 'marketing') => {
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <h2 id="modal-title" className="text-2xl font-bold mb-4 text-primary-purple uppercase">
            Cookie Settings
          </h2>

          <p className="text-gray-700 mb-6">
            We use cookies to enhance your browsing experience and analyze our traffic. You can choose which categories of cookies to accept.
            Please note that blocking some types of cookies may impact your experience on our website.
          </p>

          {/* Cookie Categories */}
          <div className="space-y-6">
            {/* Functional Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">Functional Cookies</h3>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-gray-200 text-gray-700">
                    Always Active
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot disable these cookies.
              </p>
            </div>

            {/* Preferences Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Preferences Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.preferences}
                    onChange={() => handleToggle('preferences')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-pink"></div>
                </label>
              </div>
              <p className="text-sm text-gray-600">
                These cookies allow the website to remember choices you make (such as your cookie preferences) and provide enhanced, more personal features.
              </p>
            </div>

            {/* Statistics Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Statistics Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.statistics}
                    onChange={() => handleToggle('statistics')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-pink"></div>
                </label>
              </div>
              <p className="text-sm text-gray-600">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website.
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Marketing Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => handleToggle('marketing')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-pink"></div>
                </label>
              </div>
              <p className="text-sm text-gray-600">
                These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleSave}
              className="btn-primary flex-1"
            >
              Save Preferences
            </button>
            <button
              onClick={onClose}
              className="btn-secondary flex-1"
            >
              Cancel
            </button>
          </div>

          {/* Cookie Policy Link */}
          <p className="text-sm text-gray-600 text-center mt-6">
            For more information, read our{' '}
            <a href="/cookies-policy" className="text-accent-pink hover:underline">
              Cookie Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
