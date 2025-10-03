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
      role: ""
    },
    {
      quote: "The sports sponsorship industry can be a complex world to navigate. Daniel and the team at Chiliz Sports have seen it all, and can provide the essential guidance needed to ensure you create partnerships that really deliver.",
      author: "Christian Vieri",
      role: ""
    },
    {
      quote: "If you want to make your next sports sponsorship a success, it's simple. Get in touch with Daniel and the team at Chiliz Sports.",
      author: "Kang in Lee",
      role: ""
    },
    {
      quote: "In today's fast-moving sports industry, timing and trust are everything. Daniel and the team at Chiliz Sports know how to connect brands with the right opportunities at exactly the right moment. If you want partnerships that are authentic and impactful, they're the ones to call.",
      author: "Javi Guerra",
      role: ""
    },
  ]

  const caseStudies = [
    {
      title: "Inter announce Socios.com as new front of shirt partner",
      description: "Inter announce Socios.com as new front of shirt partner."
    },
    {
      title: "Official Partner of Liga Serie A",
      description: "Official Partner of Liga Serie A."
    },
    {
      title: "Blockchain-powered fan engagement",
      description: "Blockchain-powered fan engagement."
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
            Get The Winning Perspective
          </h2>
          <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            When Access Matters, We&apos;re Already Inside. Sports sponsorship isn&apos;t about luck. It&apos;s about knowing who to call, what to say, and how to close. At Chiliz Sports, we&apos;ve sat on your side of the table, so we know the risks, the shortcuts, and the people who actually move the needle. Tap into insider knowledge, real connections, and proven experience to secure partnerships that elevate your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              LET&apos;S TALK
            </Link>
            <Link href="#how-it-works" className="btn-secondary">
              HOW IT WORKS
            </Link>
          </div>
        </div>
      </section>

      {/* Tap Our Sports Network */}
      <section className="section-padding bg-primary-purple">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">
            Tap Our Sports Network
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
            <div className="image-placeholder aspect-square">
              <div className="text-white text-2xl font-bold">
                PLACEHOLDER-ACCESS-IS-EVERYTHING-IMAGE
                <div className="text-sm mt-2">Large purple gradient box with abstract design</div>
              </div>
            </div>

            <div>
              <h2 className="heading-1 mb-6">
                Access is Everything
              </h2>
              <div className="space-y-4 text-neutral-gray-light">
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
                LET&apos;S TALK
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-primary-purple rounded-lg p-6">
                {/* Portrait Image */}
                <div className="relative aspect-square mb-4 rounded-full overflow-hidden w-24 h-24 mx-auto">
                  <Image
                    src={`/portrait-${index + 1}.png`}
                    alt={`${testimonial.author} portrait`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="text-accent-pink text-4xl mb-4">&ldquo;</div>
                <p className="text-sm mb-4">{testimonial.quote}</p>
                <div className="mt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  {testimonial.role && <p className="text-sm text-neutral-gray-light">{testimonial.role}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
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
              <p className="text-neutral-gray-light mb-6">
                We&apos;ve been the sponsor, the negotiator, and the client  and along the way we&apos;ve built the trust of 70+ of the biggest names in sport.
              </p>
              <p className="text-neutral-gray-light mb-6">
                Those relationships give us credibility where it counts: with clubs, leagues, talent, and the people making the calls. Others are still pitching to get in the room. We&apos;re already there.
              </p>
              <p className="text-neutral-gray-light mb-8">
                Now, we put that advantage to work for you — helping brands navigate the sports maze and secure partnerships that deliver.
              </p>
              <Link href="/what-we-offer" className="btn-primary">
                SEE WHAT WE DO
              </Link>
            </div>

            <div className="image-placeholder aspect-square">
              <div className="text-white text-2xl font-bold">
                PLACEHOLDER-INSIDER-EXPERTISE-IMAGE
                <div className="text-sm mt-2">Purple gradient visual</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Case Studies */}
      <section className="section-padding bg-primary-purple-light">
        <div className="container-custom">
          <h2 className="heading-1 mb-12">
            Our Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-primary-purple rounded-lg overflow-hidden">
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
              </div>
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
                Contact Us
              </h2>
              <p className="text-2xl md:text-3xl font-semibold mb-6 text-neutral-gray-light">
                See It. Feel It. Live It.
              </p>
              <p className="text-neutral-gray-light mb-8">
                We don&apos;t just pitch you on the surface. We dig deeper. Through immersive brand experiences, behind-the-scenes access, and on-ground activations, we show brands and stakeholders the full potential of sports marketing. Walk the locker room. Meet the players. Feel the energy of gameday. That&apos;s when brands stop thinking and start believing.
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
