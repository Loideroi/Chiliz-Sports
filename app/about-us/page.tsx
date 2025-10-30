import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import Script from 'next/script'

// Lazy load contact form for better performance
const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <div className="animate-pulse h-96 bg-gray-800/20 rounded-lg"></div>
})

export const metadata: Metadata = {
  title: 'About Us | Sports Partnership Insiders',
  description: 'Meet the team behind 70+ major sports partnerships. Former sponsors, negotiators & rights holders delivering insider access to clubs, leagues and talent worldwide.',
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: 'About Chiliz Sports | Sports Partnership Insiders',
    description: 'Meet the team behind 70+ major sports partnerships. Former sponsors, negotiators & rights holders.',
    url: 'https://www.chiliz-sports.com/about-us',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Chiliz Sports Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Chiliz Sports | Sports Partnership Insiders',
    description: 'Meet the team behind 70+ major sports partnerships.',
    images: ['/og-image.jpg'],
  },
}

export default function AboutUs() {
  const testimonials = [
    {
      title: "We know sports clubs very well.",
      quote: "We know sports clubs and sports properties very well because we've been serving them and their fans for over six years.",
      author: "Alexandre Dreyfus",
      role: "",
      image: "alex.webp"
    },
    {
      title: "Fostering synergies and opportunities.",
      quote: "Our existing partners know how valuable our network is because we've been fostering synergies and opportunities between them since our foundation.\n\nNow, through Chiliz Sports more clubs, rights holders and brands from sports, crypto and beyond will be able to tap into our remarkable network.",
      author: "Daniel Maglietta",
      role: "",
      image: "daniel.webp"
    },
  ]

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://www.chiliz-sports.com/about-us',
    url: 'https://www.chiliz-sports.com/about-us',
    name: 'About Chiliz Sports',
    description: 'Meet the team behind 70+ major sports partnerships. Former sponsors, negotiators & rights holders delivering insider access to clubs, leagues and talent worldwide.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.chiliz-sports.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'About Us',
          item: 'https://www.chiliz-sports.com/about-us',
        },
      ],
    },
    mainEntity: {
      '@type': 'Organization',
      '@id': 'https://www.chiliz-sports.com/#organization',
    },
  }

  return (
    <>
      {/* Structured Data - About Page Schema */}
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '446px' }}>
        {/* Background Image (Stadium) */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/about-page-hero.webp"
              alt="Chiliz Sports - Stadium atmosphere"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover"
              quality={60}
            />
            {/* Gradient overlay matching Figma design */}
            <div className="absolute inset-0 z-10" style={{
              background: 'linear-gradient(180deg, rgba(11, 5, 24, 0) 0%, rgb(11, 5, 24) 100%)'
            }}></div>
          </div>
        </div>

        <div className="relative z-10 container-custom text-center pt-32">
          <h1 className="heading-hero mb-6">
            The Sports<br />Partnership Insiders.
          </h1>
          <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            We know the game because we&apos;ve played it. From global brands to elite clubs and athletes, we&apos;ve been on every side of the sponsorship table. That experience — and our unrivalled network — is what makes us different.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/who-we-are.webp"
                alt="Who We Are - Chiliz Sports team"
                fill
                className="object-contain"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="heading-1 mb-6">
                WHO WE ARE?
              </h2>
              <p className="text-neutral-gray-light mb-6 leading-relaxed text-base">
                Led by Daniel Maglietta, a vastly experienced commercial leader in the sports industry, Chiliz Sports isn&apos;t a traditional agency. We&apos;re insiders who&apos;ve built one of the most powerful sports networks in the world — and now we use it to unlock opportunities for brands, clubs, and athletes.
              </p>
              <p className="text-neutral-gray-light mb-8 leading-relaxed text-base">
                We&apos;ve sat on both sides of the table. We&apos;ve been the sponsor, the negotiator, and the rights holder. That experience gives us a unique perspective on how to create partnerships that work — not just on paper, but in practice.
              </p>
              <Link href="#contact" className="btn-primary">
                LET&apos;S TALK
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-1 mb-6 text-primary-purple">
                WHAT WE DO?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We cut through the noise of the sports sponsorship maze. With direct access to clubs, leagues, talent, and investors, we connect brands with the decision-makers that matter.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From defining your objectives to negotiating and activating deals, we make sure every partnership delivers measurable impact and long-term value.
              </p>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/what-we-do.webp"
                alt="What We Do - Chiliz Sports services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/abstract-gradient-bg.webp"
            alt="Abstract gradient background"
            fill
            className="object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(11, 5, 24, 0.75) 0%, rgba(11, 5, 24, 0.85) 100%)'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative rounded-2xl p-8 overflow-hidden"
                style={{
                  background: 'rgba(11, 5, 24, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Content Layout with Icon, Image, and Text aligned */}
                <div className="flex gap-4 items-start">
                  {/* Profile Image with Pink Glow */}
                  <div className="relative w-24 h-24 rounded-full flex-shrink-0 overflow-hidden"
                    style={{
                      border: '3px solid #FF0052',
                      boxShadow: '0 0 40px rgba(255, 0, 82, 0.5), 0 0 80px rgba(255, 0, 82, 0.3)'
                    }}>
                    <Image
                      src={`/${testimonial.image}`}
                      alt={`${testimonial.author} portrait`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-white">{testimonial.title}</h3>
                    <p className="text-sm text-neutral-gray-light mb-6 leading-relaxed whitespace-pre-line">{testimonial.quote}</p>
                    <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                    {testimonial.role && <p className="text-sm text-neutral-gray-light mt-1">{testimonial.role}</p>}
                  </div>

                  {/* Smaller Quotation Mark aligned to right */}
                  <div className="flex-shrink-0">
                    <svg width="40" height="40" viewBox="0 0 80 80" fill="none">
                      <path d="M20 50C20 41.7157 26.7157 35 35 35V20C17.8792 20 4 33.8792 4 50C4 58.2843 10.7157 65 20 65H35V50H20Z" fill="#FF0052"/>
                      <path d="M60 50C60 41.7157 66.7157 35 75 35V20C57.8792 20 44 33.8792 44 50C44 58.2843 50.7157 65 60 65H75V50H60Z" fill="#FF0052"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part of The Chiliz Group */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square order-2 lg:order-1 rounded-lg overflow-hidden">
              <Image
                src="/chiliz-3d-logo.webp"
                alt="Chiliz 3D Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="heading-1 mb-6 text-primary-purple">
                PART OF THE CHILIZ GROUP.
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Chiliz is the global leader in blockchain for sport and entertainment. We pioneered Fan Tokens™ and Socios.com - the platform where fans hold and trade 70+ Fan Tokens™ and unlock exclusive rewards, experiences, and access with the world&apos;s biggest clubs, including FC Barcelona, PSG, Manchester City, Juventus, and Inter Milan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us - Get A Winning Edge */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/fans-background.webp"
            alt="Contact Chiliz Sports"
            fill
            className="object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(11, 5, 24, 0.85) 0%, rgba(11, 5, 24, 0.90) 100%)'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-base font-normal mb-4" style={{color: 'rgb(255, 0, 82)'}}>
                CONTACT US
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white uppercase">
                GET A WINNING EDGE.
              </h2>
              <p className="text-neutral-gray-light mb-8 leading-relaxed">
                Drive real business impact, unlock global audiences, and create moments that fans never forget. We&apos;re waiting to hear from you.
              </p>
            </div>

            <div>
              <ContactForm showHeading={false} variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
