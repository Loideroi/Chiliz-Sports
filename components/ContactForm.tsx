'use client'

import { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Script from 'next/script'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms',
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  showHeading?: boolean
  heading?: string
  description?: string
  variant?: 'light' | 'dark'
}

declare global {
  interface Window {
    turnstile?: {
      render: (element: string, options: any) => string
      reset: (widgetId: string) => void
    }
  }
}

// Get the site key at module level to ensure it's available
const TURNSTILE_SITE_KEY = (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAAB5Efhs5LNfYaT2Q').trim()

export default function ContactForm({
  showHeading = true,
  heading = "Ready to Activate?",
  description = "We know the global sports landscape inside out and we'll help you turn sponsorship into a smart, measurable, and inspiring brand move.",
  variant = 'light'
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileWidgetId, setTurnstileWidgetId] = useState<string | null>(null)
  const [turnstileLoaded, setTurnstileLoaded] = useState(false)
  const [turnstileError, setTurnstileError] = useState<string | null>(null)

  // Reset widget state on mount to handle navigation
  useEffect(() => {
    console.log('ContactForm mounted - resetting Turnstile state')
    setTurnstileWidgetId(null)
    setTurnstileToken(null)
    setTurnstileError(null)
    setTurnstileLoaded(false)

    // Check if script is already loaded
    if (window.turnstile) {
      console.log('Turnstile script detected on mount')
      setTurnstileLoaded(true)
    }
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  // Render Turnstile widget when script loads
  const renderTurnstile = useCallback(() => {
    try {
      // Check if Turnstile API is available
      if (!window.turnstile) {
        console.log('Turnstile API not available yet')
        return
      }

      // Check if DOM element exists
      const container = document.querySelector('#turnstile-widget')
      if (!container) {
        console.log('Turnstile container not found in DOM yet')
        return
      }

      // Don't render if already rendered
      if (turnstileWidgetId) {
        console.log('Turnstile widget already rendered with ID:', turnstileWidgetId)
        return
      }

      console.log('Rendering Turnstile widget with sitekey:', TURNSTILE_SITE_KEY)

      // Clear the container to avoid duplicates
      container.innerHTML = ''

      const widgetId = window.turnstile.render('#turnstile-widget', {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => {
          console.log('Turnstile token received')
          setTurnstileToken(token)
          setTurnstileError(null)
        },
        'error-callback': (error: any) => {
          console.error('Turnstile error:', error)
          setTurnstileError('Security verification failed. Please refresh the page.')
        },
        'expired-callback': () => {
          console.log('Turnstile token expired')
          setTurnstileToken(null)
          setTurnstileError('Security verification expired. Please try again.')
        },
      })
      setTurnstileWidgetId(widgetId)
      console.log('Turnstile widget rendered with ID:', widgetId)
    } catch (error) {
      console.error('Failed to render Turnstile widget:', error)
      setTurnstileError('Failed to load security verification. Please refresh the page.')
    }
  }, [turnstileWidgetId])

  // Effect to render Turnstile when script is loaded AND component is mounted
  useEffect(() => {
    // Check if Turnstile script is loaded
    if (window.turnstile) {
      console.log('Turnstile script already available, rendering widget')
      // Use a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        renderTurnstile()
      }, 100)
      return () => clearTimeout(timer)
    } else if (turnstileLoaded) {
      console.log('Turnstile script loaded via Script component, rendering widget')
      renderTurnstile()
    }
  }, [turnstileLoaded, renderTurnstile])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (window.turnstile && turnstileWidgetId) {
        try {
          window.turnstile.reset(turnstileWidgetId)
          console.log('Turnstile widget reset on unmount')
        } catch (e) {
          console.log('Error resetting Turnstile widget:', e)
        }
      }
    }
  }, [turnstileWidgetId])

  const onSubmit = async (data: ContactFormData) => {
    // Check if Turnstile token exists
    if (!turnstileToken) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          turnstileToken,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      console.log('Form submission response:', result)

      if (result.debug) {
        console.log('Email sent:', result.debug.emailSent)
        if (result.debug.emailError) {
          console.error('Email error:', result.debug.emailError)
        }
      }

      setSubmitStatus('success')
      reset()

      // Reset Turnstile widget
      if (window.turnstile && turnstileWidgetId) {
        window.turnstile.reset(turnstileWidgetId)
      }
      setTurnstileToken(null)

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerClass = variant === 'dark' ? '' : 'bg-primary-purple-light rounded-lg p-8'
  const inputClass = variant === 'dark'
    ? "w-full px-4 py-3 bg-transparent border-b-2 border-neutral-gray-light text-neutral-gray-light placeholder-neutral-gray-light focus:outline-none focus:border-accent-pink transition-colors"
    : "w-full px-4 py-3 bg-transparent border-b-2 border-purple-700 text-white placeholder-neutral-gray-dark focus:outline-none focus:border-accent-pink transition-colors"
  const labelClass = variant === 'dark' ? 'text-sm text-neutral-gray-light' : 'text-sm text-neutral-gray-light'

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log('Turnstile script loaded')
          setTurnstileLoaded(true)
        }}
        onError={(e) => {
          console.error('Failed to load Turnstile script:', e)
          setTurnstileError('Failed to load security verification. Please check your internet connection and refresh the page.')
        }}
      />

      <div className={containerClass}>
        {showHeading && (
          <>
            <h2 className="heading-2 mb-2">{heading}</h2>
            <p className="text-neutral-gray-light mb-8">
              {description}
            </p>
          </>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full name*"
            {...register('fullName')}
            className={inputClass}
          />
          {errors.fullName && (
            <p className="mt-2 text-sm text-accent-pink">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email*"
            {...register('email')}
            className={inputClass}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-accent-pink">{errors.email.message}</p>
          )}
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="agreeToTerms"
            {...register('agreeToTerms')}
            className="mt-1 mr-3 w-4 h-4 accent-accent-pink"
          />
          <label htmlFor="agreeToTerms" className={labelClass}>
            Yes, I&apos;d like to receive documentation and stay updated on the latest news, offers, and news. I can unsubscribe anytime. For more details, see our{' '}
            <a href="https://www.chiliz.com/privacy-policy/" className="text-accent-pink hover:underline" target="_blank" rel="noopener noreferrer">
              privacy policy
            </a>
            . By clicking submit, you agree that the info you provide will be processed in accordance with our privacy policy and you consent to being contacted about this through the link in your emails. For more information, see our{' '}
            <a href="https://www.chiliz.com/privacy-policy/" className="text-accent-pink hover:underline" target="_blank" rel="noopener noreferrer">
              privacy policy
            </a>
            .
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-sm text-accent-pink">{errors.agreeToTerms.message}</p>
        )}

        {/* Cloudflare Turnstile Widget */}
        <div>
          <div id="turnstile-widget" className="flex justify-center"></div>
          {turnstileError && (
            <p className="mt-2 text-sm text-accent-pink text-center">{turnstileError}</p>
          )}
          {!turnstileLoaded && !turnstileError && (
            <p className="text-sm text-neutral-gray-light text-center">Loading security verification...</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting || !turnstileToken}
            className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'SUBMITTING...' : 'LET\'S TALK'}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-900 bg-opacity-30 border border-green-500 rounded-lg">
            <p className="text-green-400">Thank you! We&apos;ll be in touch soon.</p>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="p-4 bg-red-900 bg-opacity-30 border border-red-500 rounded-lg">
            <p className="text-red-400">Something went wrong. Please try again.</p>
          </div>
        )}
        </form>
      </div>
    </>
  )
}
