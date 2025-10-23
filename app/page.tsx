'use client'

import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import EmblemCarousel from '@/components/EmblemCarousel'

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
      image: "cannavaro.png"
    },
    {
      quote: "My experience working with Daniel has been very positive. If you want to succeed in the complex world of elite level sports sponsorship, then get in touch with Chiliz Sports and let them find the right fit for you.",
      author: "Christian Vieri",
      role: "",
      image: "vieri.png"
    },
    {
      quote: "The sports sponsorship industry can be a complex world to navigate. Daniel and the team at Chiliz Sports have seen it all, and can provide the essential guidance needed to ensure you create partnerships that really deliver.",
      author: "Kang in Lee",
      role: "",
      image: "kang.png"
    },
    {
      quote: "If you want to make your next sports sponsorship a success, it's simple. Get in touch with Daniel and the team at Chiliz Sports.",
      author: "Javi Guerra",
      role: "",
      image: "javi.png"
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image - Desktop */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src="/hero-background.png"
            alt="Hero background with abstract flowing design"
            fill
            priority
            className="object-cover"
            quality={100}
          />
        </div>

        {/* Background Image - Mobile */}
        <div className="absolute inset-0 z-0 md:hidden">
          <Image
            src="/hero-background-mobile.png"
            alt="Hero background mobile with abstract flowing design"
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
          <h1 className="heading-hero mb-4">
            Chiliz Sports
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            When Access Matters, We&apos;re Already Inside.
          </h2>
          <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Sports sponsorship isn&apos;t about luck. It&apos;s about knowing who to call, what to say, and how to close. At Chiliz Sports, we&apos;ve sat on your side of the table, so we know the risks, the shortcuts, and the people who actually move the needle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              LET&apos;S TALK
            </Link>
            <Link href="#how-it-works" className="btn-secondary">
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Tap Our Sports Network */}
      <section className="section-padding bg-primary-purple">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">
            Tap Our Sports Network.
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
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/access-is-everything.png"
                alt="Access is Everything - Chiliz Sports team connections"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="heading-1 mb-6">
                Access is Everything.
              </h2>
              <div className="space-y-4 text-neutral-gray-light leading-relaxed">
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
              <Link href="/contact" className="btn-primary inline-block mt-8">
                BOOK A CALL
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by the best */}
      <section className="section-padding bg-primary-purple-light">
        <div className="container-custom">
          <h2 className="heading-1 mb-12">
            Trusted by the best.
          </h2>

          {/* Horizontal Scrolling Carousel */}
          <div className="relative overflow-hidden">
            <style jsx>{`
              @keyframes scroll-testimonials {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }

              .animate-scroll-testimonials {
                animation: scroll-testimonials 40s linear infinite;
              }

              .animate-scroll-testimonials:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="flex animate-scroll-testimonials gap-8">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-[320px] md:w-[380px] bg-primary-purple rounded-lg overflow-hidden">
                  {/* Portrait Image */}
                  <div className="relative aspect-video w-full">
                    <Image
                      src={`/${testimonial.image}`}
                      alt={`${testimonial.author} portrait`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="text-accent-pink text-4xl mb-4">&ldquo;</div>
                    <p className="text-sm mb-4 min-h-[120px]">{testimonial.quote}</p>
                    <div className="mt-4">
                      <p className="font-semibold">{testimonial.author}</p>
                      {testimonial.role && <p className="text-sm text-neutral-gray-light">{testimonial.role}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-start mt-8 space-x-2">
            <button className="w-3 h-3 rounded-full bg-white" aria-label="Slide 1"></button>
            <button className="w-3 h-3 rounded-full bg-neutral-gray-dark" aria-label="Slide 2"></button>
          </div>
        </div>
      </section>

      {/* Insider Expertise */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-1 mb-4">
                Insider Expertise.<br />Real Results.
              </h2>
              <p className="text-neutral-gray-light mb-6 leading-relaxed">
                We&apos;ve been the sponsor, the negotiator, and the client — and along the way we&apos;ve built the trust of 70+ of the biggest names in sport.
              </p>
              <p className="text-neutral-gray-light mb-6 leading-relaxed">
                Those relationships give us credibility where it counts: with clubs, leagues, talent, and the people making the calls. Others are still pitching to get in the room. We&apos;re already there.
              </p>
              <p className="text-neutral-gray-light mb-8 leading-relaxed">
                Now, we put that advantage to work for you — helping brands navigate the sports maze and secure partnerships that deliver.
              </p>
              <Link href="/what-we-offer" className="btn-primary">
                GET STRAIGHT ANSWERS
              </Link>
            </div>

            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/insider-expertise.png"
                alt="Insider Expertise - Chiliz Sports team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deals That Deliver */}
      <section className="section-padding bg-primary-purple">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/deals-that-delivers.png"
                alt="Deals That Deliver - Chiliz Sports"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                Deals That Deliver.
              </h3>
              <p className="text-neutral-gray-light mb-8 leading-relaxed">
                Sports sponsorship is crowded, messy, and full of dead ends. We clear the path.
                Chiliz Sports connects you straight to the clubs, leagues, and talent that matter — with insider access you won&apos;t find anywhere else.
              </p>
              <p className="text-neutral-gray-light mb-8 leading-relaxed">
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
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">
            Core Services.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Direct Access */}
            <div className="bg-primary-purple-light rounded-lg p-8">
              <h3 className="heading-3 mb-4">Direct Access</h3>
              <p className="text-neutral-gray-light leading-relaxed">
                Go straight to the decision-makers from 70+ top clubs and leagues. We know who matters and we know how to get you in front of them. Whether it&apos;s club owners, league executives, or athletes, we make sure your brand connects directly with the people who can say yes.
              </p>
            </div>

            {/* Brand Protection & Contract Management */}
            <div className="bg-primary-purple-light rounded-lg p-8">
              <h3 className="heading-3 mb-4">Brand Protection & Contract Management</h3>
              <p className="text-neutral-gray-light leading-relaxed">
                Your brand deserves protection at every stage. We review contracts, negotiate terms, and safeguard your interests so you avoid costly mistakes and legal pitfalls.
              </p>
            </div>

            {/* Custom Sponsored Packages */}
            <div className="bg-primary-purple-light rounded-lg p-8">
              <h3 className="heading-3 mb-4">Custom Sponsored Packages</h3>
              <p className="text-neutral-gray-light leading-relaxed">
                No cookie-cutter deals. We design partnerships tailored to your brand&apos;s objectives, audience, and budget — from jersey sponsorships to stadium naming rights and exclusive fan experiences.
              </p>
            </div>

            {/* Athlete Ambassadors */}
            <div className="bg-primary-purple-light rounded-lg p-8">
              <h3 className="heading-3 mb-4">Athlete Ambassadors</h3>
              <p className="text-neutral-gray-light leading-relaxed">
                Connect with the right athletes to represent your brand. We match you with talent that aligns with your values and reaches your target market authentically.
              </p>
            </div>

            {/* Insider Knowledge. First-Look Opportunities */}
            <div className="bg-primary-purple-light rounded-lg p-8">
              <h3 className="heading-3 mb-4">Insider Knowledge. First-Look Opportunities</h3>
              <p className="text-neutral-gray-light leading-relaxed">
                Be first in line for emerging opportunities. Our network gives you early access to sponsorship deals before they hit the market, giving your brand a competitive edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Case Studies */}
      <section className="section-padding bg-primary-purple-light">
        <div className="container-custom">
          <h2 className="heading-1 mb-12">
            Our Case Studies.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <a
                key={index}
                href={caseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-purple rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
              >
                <div className="relative aspect-video">
                  <Image
                    src={`/case-study-${index + 1}.png`}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="heading-3 mb-2">{caseStudy.title}</h3>
                  <p className="text-sm text-neutral-gray-light">{caseStudy.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us - See it. Feel it. Live it. */}
      <section id="contact" className="section-padding bg-primary-purple">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="heading-1 mb-2">
                CONTACT US
              </h2>
              <p className="text-2xl md:text-3xl font-semibold mb-6 text-neutral-gray-light">
                See It. Feel It. Live It.
              </p>
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
