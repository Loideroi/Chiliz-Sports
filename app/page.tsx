'use client'

import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Lazy load below-the-fold components for better performance
const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <div className="animate-pulse h-96 bg-gray-800/20 rounded-lg"></div>,
  ssr: false // Client-side only for form interactivity and Turnstile
})

const EmblemCarousel = dynamic(() => import('@/components/EmblemCarousel'), {
  loading: () => <div className="animate-pulse h-32 bg-gray-800/20 rounded-lg"></div>,
  ssr: false // Animation-heavy component, better on client
})

const CoreServices = dynamic(() => import('@/components/CoreServices'), {
  loading: () => <div className="animate-pulse h-96 bg-gray-800/20 rounded-lg"></div>,
  ssr: true // Static content, can benefit from SSR
})

export default function Home() {
  const sportsIcons = [
    { name: 'Football', icon: '⚽' },
    { name: 'Basketball', icon: '🏀' },
    { name: 'Baseball', icon: '⚾' },
    { name: 'Racing', icon: '🏎️' },
    { name: 'Tennis', icon: '🎾' },
    { name: 'MMA', icon: '🥊' },
    { name: 'Cricket', icon: '🏏' },
    { name: 'Rugby', icon: '🏉' },
  ]

  const testimonials = [
    {
      quote: "In today's fast-moving sports industry, timing and trust are everything. Daniel and the team at Chiliz Sports know how to connect brands with the right opportunities at exactly the right moment. If you want partnerships that are authentic and impactful, they're the ones to call.",
      author: "Fabio Cannavaro",
      role: "",
      image: "cannavaro.webp"
    },
    {
      quote: "My experience working with Daniel has been very positive. If you want to succeed in the complex world of elite level sports sponsorship, then get in touch with Chiliz Sports and let them find the right fit for you.",
      author: "Christian Vieri",
      role: "",
      image: "vieri.webp"
    },
    {
      quote: "The sports sponsorship industry can be a complex world to navigate. Daniel and the team at Chiliz Sports have seen it all, and can provide the essential guidance needed to ensure you create partnerships that really deliver.",
      author: "Kang in Lee",
      role: "",
      image: "kang.webp"
    },
    {
      quote: "If you want to make your next sports sponsorship a success, it's simple. Get in touch with Daniel and the team at Chiliz Sports.",
      author: "Javi Guerra",
      role: "",
      image: "javi.webp"
    },
  ]

  const caseStudies = [
    {
      title: "Inter announce Socios.com as new front of shirt partner.",
      description: "Read More",
      link: "https://www.socios.com/a-new-era-begins-inter-announce-socios-com-as-new-front-of-shirt-partner-for-2021-22-season/"
    },
    {
      title: "Official Partner of Liga Serie A",
      description: "Read More",
      link: "https://www.socios.com/lega-serie-a-announce-socios-com-partnership/"
    },
    {
      title: "Blockchain-powered fan engagement.-",
      description: "Read More",
      link: "https://www.socios.com/7-teams-in-7-days-blockchain-powered-fan-engagement-giants-socios-com-set-for-major-us-growth/"
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '578px' }}>
        {/* Background Image (Fans/Crowd) */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/hero-image-1.webp"
              alt="Chiliz Sports - Passionate fans at sporting event"
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

        <div className="relative z-20 container-custom text-center" style={{ paddingTop: '176px', paddingBottom: '120px' }}>
          {/* Main Brand Heading */}
          <h1 className="mb-6 flex items-center justify-center">
            <Image
              src="/chiliz-sports-logo.svg"
              alt="Chiliz Sports"
              width={458}
              height={91}
              priority
              className="w-auto h-16 md:h-20 lg:h-24"
            />
          </h1>

          {/* Tagline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-tight uppercase">
            When Access Matters, We&apos;re Already Inside.
          </h2>

          <p className="text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            Sports sponsorship isn&apos;t about luck. It&apos;s about knowing who to call, what to say, and how to close. At Chiliz Sports, we&apos;ve sat on your side of the table, so we know the risks, the shortcuts, and the people who actually move the needle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="btn-primary">
              LET&apos;S TALK
            </Link>
            <Link href="#access-is-everything" className="btn-secondary inline-flex items-center gap-2">
              LEARN MORE
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="animate-bounce">
                <path d="M8 12L3 7L4.4 5.6L8 9.2L11.6 5.6L13 7L8 12Z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Tap Our Sports Network */}
      <section className="section-padding" style={{
        background: 'linear-gradient(180deg, #0b0518 0%, #0b0518 100%)'
      }}>
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">
            TAP OUR SPORTS NETWORK.
          </h2>
          <p className="text-center mb-12 max-w-3xl mx-auto text-lg">
            We work with 70+ of the biggest names in sport.
          </p>

          <div className="mb-8">
            <EmblemCarousel />
          </div>

          <p className="text-center text-neutral-gray-light max-w-4xl mx-auto">
            Leverage our deep connections to the industry&apos;s commercial leaders, gain direct access to rights and talent, and realise the true business potential of every sports partnership.
          </p>
        </div>
      </section>

      {/* Access is Everything */}
      <section id="access-is-everything" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/access-is-everything-2.webp"
                alt="Access is Everything - Chiliz Sports team connections"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="heading-1 mb-6 text-primary-purple">
                ACCESS IS EVERYTHING.
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Most agencies only promise it. We deliver.
                </p>
                <p>
                  Our team has lived the challenges of sponsorship first-hand.
                </p>
                <p>
                  We know how easy it is to waste months chasing introductions, hitting dead ends, or signing misaligned deals. That&apos;s why we go straight to the decision-makers, define clear goals, and build activations that stick.
                </p>
              </div>
              <Link href="#contact" className="btn-primary inline-block mt-8">
                BOOK A CALL
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by the best */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/abstract-5.webp"
            alt="Abstract gradient background"
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(11, 5, 24, 0.3) 0%, rgba(11, 5, 24, 0.5) 100%)'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <h2 className="heading-1 mb-12">
            TRUSTED BY THE BEST.
          </h2>

          {/* Horizontal Scrolling Carousel */}
          <div className="relative overflow-x-auto scrollbar-hide" id="testimonials-carousel">
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div className="flex gap-8 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-[320px] md:w-[380px] rounded-lg overflow-hidden" style={{ backgroundColor: 'rgba(49, 0, 77, 0.5)' }}>
                  {/* Portrait Image */}
                  <div className="relative aspect-video w-full">
                    <Image
                      src={`/${testimonial.image}`}
                      alt={`${testimonial.author} portrait`}
                      fill
                      sizes="(max-width: 768px) 320px, 380px"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex gap-4">
                      {/* Quote text */}
                      <p className="text-sm flex-1">{testimonial.quote}</p>
                      {/* Comma Icon aligned to right */}
                      <div className="flex-shrink-0">
                        <svg width="32" height="32" viewBox="0 0 56 56" fill="#FF0052">
                          <path d="M14 35C14 29.4772 18.4772 25 24 25V14C12.9543 14 4 22.9543 4 35C4 40.5228 8.47715 46 14 46H24V35H14Z"/>
                          <path d="M42 35C42 29.4772 46.4772 25 52 25V14C40.9543 14 32 22.9543 32 35C32 40.5228 36.4772 46 42 46H52V35H42Z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="font-semibold">{testimonial.author}</p>
                      {testimonial.role && <p className="text-sm text-neutral-gray-light">{testimonial.role}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => {
                const carousel = document.getElementById('testimonials-carousel')
                if (carousel) carousel.scrollBy({ left: -400, behavior: 'smooth' })
              }}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => {
                const carousel = document.getElementById('testimonials-carousel')
                if (carousel) carousel.scrollBy({ left: 400, behavior: 'smooth' })
              }}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Insider Expertise */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-1 mb-4 text-primary-purple">
                INSIDER EXPERTISE.<br />REAL RESULTS.
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We&apos;ve been the sponsor, the negotiator, and the client — and along the way we&apos;ve built the trust of 70+ of the biggest names in sport.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Those relationships give us credibility where it counts: with clubs, leagues, talent, and the people making the calls. Others are still pitching to get in the room. We&apos;re already there.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Now, we put that advantage to work for you — helping brands navigate the sports maze and secure partnerships that deliver.
              </p>
              <Link href="#contact" className="btn-primary">
                GET STRAIGHT ANSWERS
              </Link>
            </div>

            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/insider-expertise.webp"
                alt="Insider Expertise - Chiliz Sports team at work"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deals That Deliver */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/deals-that-delivers.webp"
                alt="Deals That Deliver - Chiliz Sports"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-purple uppercase">
                DEALS THAT DELIVER.
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Sports sponsorship is crowded, messy, and full of dead ends. We clear the path.
                Chiliz Sports connects you straight to the clubs, leagues, and talent that matter — with insider access you won&apos;t find anywhere else.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                No guesswork. No wasted time. Just the right deal, done right.
              </p>
              <Link href="#contact" className="btn-primary">
                LET&apos;S TALK
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <CoreServices />

      {/* Our Case Studies */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/abstract-5.webp"
            alt="Abstract background"
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(11, 5, 24, 0.88) 0%, rgba(11, 5, 24, 0.92) 100%)'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <h2 className="heading-1 mb-12">
            OUR CASE STUDIES.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <a
                key={index}
                href={caseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
              >
                <div className="relative aspect-video">
                  <Image
                    src={`/case-study-${index + 1}.webp`}
                    alt={caseStudy.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-white" style={{ fontSize: '16px', fontWeight: '600' }}>{caseStudy.title}</h3>
                  <p className="text-sm text-accent-pink">{caseStudy.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us - See it. Feel it. Live it. */}
      <section id="contact" className="relative section-padding overflow-hidden" style={{ backgroundColor: '#0B0518' }}>
        {/* Removed background image */}

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-base font-normal mb-4" style={{color: 'rgb(255, 0, 82)'}}>
                CONTACT US
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white uppercase">
                SEE IT. FEEL IT. LIVE IT.
              </h2>
              <p className="text-neutral-gray-light mb-8 leading-relaxed">
                Want to know how your brand could partner with a sports giant? Don&apos;t just hear about it — experience it.
              </p>
              <p className="text-neutral-gray-light mb-8 leading-relaxed">
                Join us for a live game, see the action up close, and let us show you exactly how partnerships come to life when you&apos;ve got the right access.
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
