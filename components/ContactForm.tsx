'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms',
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Replace with actual API endpoint
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      console.log('Form submitted:', data)

      setSubmitStatus('success')
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-primary-purple-light rounded-lg p-8">
      <h2 className="heading-2 mb-2">Ready to Activate?</h2>
      <p className="text-neutral-gray-light mb-8">
        We know the global sports landscape inside out and we&apos;ll help you turn sponsorship into a smart, measurable, and inspiring brand move.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full name*"
            {...register('fullName')}
            className="w-full px-4 py-3 bg-transparent border-b-2 border-purple-700 text-white placeholder-neutral-gray-dark focus:outline-none focus:border-accent-pink transition-colors"
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
            className="w-full px-4 py-3 bg-transparent border-b-2 border-purple-700 text-white placeholder-neutral-gray-dark focus:outline-none focus:border-accent-pink transition-colors"
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
          <label htmlFor="agreeToTerms" className="text-sm text-neutral-gray-light">
            Yes, I&apos;d like to receive documentation and stay updated on the latest news, offers, and news. I can unsubscribe anytime. For more details, see our{' '}
            <a href="/privacy-policy" className="text-accent-pink hover:underline">
              privacy policy
            </a>
            . By clicking submit, you agree that the info you provide will be processed in accordance with our privacy policy and you consent to being contacted about this through the link in your emails. For more information, see our{' '}
            <a href="/privacy-policy" className="text-accent-pink hover:underline">
              privacy policy
            </a>
            .
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-sm text-accent-pink">{errors.agreeToTerms.message}</p>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
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
  )
}
