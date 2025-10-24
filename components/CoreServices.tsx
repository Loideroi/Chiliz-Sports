'use client'

import { useState } from 'react'

interface Service {
  id: string
  title: string
  content: string
  bullets?: string[]
}

export default function CoreServices() {
  const services: Service[] = [
    {
      id: 'direct-access',
      title: 'Direct Access',
      content: 'Go straight to the decision-makers from 70+ top clubs and leagues.\n\nWe know who matters and we know how to get you in front of them. Whether it\'s club owners, league executives, or athletes, we make sure your brand connects directly with the people who can say yes.',
    },
    {
      id: 'brand-protection',
      title: 'Brand Protection & Contract Management',
      content: 'We cut out the fine-print traps and manage contracts so your spend is safe and every deal works in your favour, by',
      bullets: [
        'Negotiating contract terms',
        'Protecting against reputation risks',
        'Ensuring deliverables and fallback options are enforced'
      ]
    },
    {
      id: 'custom-packages',
      title: 'Custom Sponsored Packages',
      content: 'Tailored to your objectives, with clear goals and measurable impact, covering:',
      bullets: [
        'branding (jersey sponsorship, LED boards, training kits)',
        'digital (co-branded content, influencer-led social campaigns)',
        'VIP, fan and player experiences',
        'and innovative mobile, CSR activations'
      ]
    },
    {
      id: 'athlete-ambassadors',
      title: 'Athlete Ambassadors',
      content: 'From one-off campaigns to long-term partnerships, we pair your brand with the right faces—authentic, credible, and powerful connections with global audiences.\n\nHandling negotiations and approvals, content planning and delivery.',
    },
    {
      id: 'insider-knowledge',
      title: 'Insider Knowledge. First-Look Opportunities',
      content: 'Because we\'re already in the rooms where deals are shaped, we can broker opportunities before they\'re public, giving your brand the edge with exclusive insight into upcoming sponsorship inventory.',
    },
  ]

  const [activeService, setActiveService] = useState(services[0].id)

  const currentService = services.find(s => s.id === activeService) || services[0]

  return (
    <section className="section-padding" style={{ backgroundColor: 'rgb(11, 5, 24)' }}>
      <div className="container-custom">
        <h2 className="heading-2 mb-12">
          Core Services.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Navigation */}
          <div className="lg:col-span-3">
            <div className="border border-white/20 rounded-lg p-6">
              <nav className="space-y-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-sm ${
                      activeService === service.id
                        ? 'text-accent-pink font-semibold'
                        : 'text-white hover:text-accent-pink'
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title Card */}
              <div className="bg-gradient-to-br from-purple-900/50 to-purple-950/50 border border-white/10 rounded-lg p-8 flex items-center justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase text-center">
                  {currentService.title}
                </h3>
              </div>

              {/* Content Card */}
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border border-white/10 rounded-lg p-8">
                <div className="text-neutral-gray-light leading-relaxed whitespace-pre-line">
                  {currentService.content}
                </div>
                {currentService.bullets && (
                  <ul className="mt-4 space-y-2">
                    {currentService.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent-pink mt-1">•</span>
                        <span className="text-neutral-gray-light">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
