'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export default function WhatWeOffer() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const services = [
    {
      title: "Access to Rights & Talent",
      icon: "ICON-1",
      description: "Go straight to the decision-makers from 70+ top clubs and leagues.",
      details: "We know who matters and we and we know how to get you a foot at the door. If it's a league, a club, or a high-demand athlete, our network cuts through layers of bureaucracy. You get to people who can say yes, and we can tell you.",
    },
    {
      title: "Brand Protection & Contract Management",
      icon: "ICON-2",
      description: "",
      details: "Contracts in sports marketing are complex and full of pitfalls. We review terms, manage obligations, and protect your investment from start to finish.",
    },
    {
      title: "Athlete Ambassadors",
      icon: "ICON-3",
      description: "",
      details: "We connect brands with the right athletes who align with your values and audience. Authentic partnerships that drive engagement and brand loyalty.",
    },
    {
      title: "Insider Knowledge: First-Look Opportunities",
      icon: "ICON-4",
      description: "",
      details: "Early access to emerging opportunities before they hit the open market. Our insider network keeps you ahead of competitors.",
    },
    {
      title: "Strategic Sponsorship Planning",
      icon: "ICON-5",
      description: "",
      details: "We help you design sponsorship strategies that align with your business goals, maximize ROI, and create lasting brand impact.",
    },
    {
      title: "Custom Sponsorship Packages",
      icon: "ICON-6",
      description: "",
      details: "One-size-fits-all doesn't work in sports marketing. We craft bespoke packages tailored to your brand objectives and budget.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.png"
            alt="Hero background with abstract flowing design"
            fill
            priority
            className="object-cover"
            quality={100}
          />
        </div>

        {/* Player Silhouette - Right Side */}
        <div className="absolute right-0 bottom-0 z-[5] w-1/2 h-2/3 hidden md:block">
          <Image
            src="/player.png"
            alt="Football player silhouette"
            fill
            priority
            className="object-contain object-bottom-right"
          />
        </div>

        <div className="relative z-10 container-custom text-center">
          <h1 className="heading-hero mb-6">
            WHAT WE OFFER
          </h1>
        </div>
      </section>

      {/* Deals That Deliver */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="image-placeholder aspect-square">
              <div className="text-white text-2xl font-bold">
                PLACEHOLDER-DEALS-THAT-DELIVER-IMAGE
                <div className="text-sm mt-2">Large purple gradient visual</div>
              </div>
            </div>

            <div>
              <h2 className="heading-1 mb-6">
                Deals That Deliver.
              </h2>
              <p className="text-neutral-gray-light mb-4">
                Sports sponsorship is crowded, messy, and full of dead ends. We clear the path. Chiliz sports connects you straight to the clubs, leagues, and talent that matter with insider access you won&apos;t find anywhere else.
              </p>
              <p className="text-neutral-gray-light mb-6">
                No guesswork. No wasted time. Just the right deal, done right.
              </p>
              <Link href="/contact" className="btn-primary">
                LET&apos;S TALK
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-primary-purple-light">
        <div className="container-custom">
          <h2 className="heading-1 mb-12">
            Core Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-primary-purple rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className="image-placeholder w-24 h-24 rounded-lg mb-4">
                      <div className="text-white text-xs font-bold">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="heading-3 text-center">{service.title}</h3>
                  </div>

                  {service.description && (
                    <p className="text-sm text-neutral-gray-light mb-2">
                      {service.description}
                    </p>
                  )}

                  <div className="flex justify-center mt-4">
                    <svg
                      className={`w-6 h-6 text-accent-pink transition-transform ${
                        openAccordion === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {openAccordion === index && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-neutral-gray-light border-t border-purple-800 pt-4">
                      {service.details}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-1 mb-4">
            Ready to Activate?
          </h2>
          <p className="text-neutral-gray-light mb-12">
            We know the global sports landscape inside out and we&apos;ll help you turn sponsorship into a smart, measurable, and inspiring brand move.
          </p>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
