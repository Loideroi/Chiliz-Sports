import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

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
      quote: "They know sports clubs very well. We know sports clubs and are aware understand this well. They know the reality of how tricky sponsorships can be and what athletes want. Our team has been navigating these relationships for a decade.",
      author: "Trusted Partner 1",
      role: "Public Comments"
    },
    {
      quote: "We know sports clubs very well. We know sports clubs and are aware understand this well. They know the reality of how tricky sponsorships can be and what athletes want.",
      author: "Christian Toni",
      role: ""
    },
    {
      quote: "We know sports clubs very well. We know sports clubs and are aware understand this well. They know the reality of how tricky sponsorships can be and what athletes want.",
      author: "Sports Inc.",
      role: ""
    },
    {
      quote: "We know sports clubs very well. We know sports clubs and are aware understand this well. They know the reality of how tricky sponsorships can be and what athletes want.",
      author: "Josh Johnson",
      role: ""
    },
  ]

  const caseStudies = [
    {
      title: "Everton Case Study",
      description: "Premier League partnership success story"
    },
    {
      title: "Santos FC Case Study",
      description: "Brazilian football club collaboration"
    },
    {
      title: "Barcelona Ambassador Campaign",
      description: "Global brand ambassador program"
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
            chiliz sports
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            When Access Matters, We&apos;re Already Inside.
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
          <p className="text-center mb-12 max-w-3xl mx-auto">
            We don&apos;t work with one niche or category. From global brands to clubs, athletes, and influencers, we thrive on variety.
          </p>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 mb-8">
            {sportsIcons.map((sport) => (
              <div key={sport.name} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-purple-light border-2 border-accent-pink flex items-center justify-center text-3xl md:text-4xl mb-2">
                  {sport.icon}
                </div>
                <span className="text-xs text-center">{sport.name}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-neutral-gray-light max-w-4xl mx-auto">
            Leverage our deep connections to the sports space we&apos;ve spent years carving out. Our network covers multiple major sports. Find a demographic. We&apos;ll help you activate.
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
                  We&apos;ve been the commercial go-betweens for sports partnerships for over a decade. While business is cut-throat, we don&apos;t burn our bridges. Those relationships count. Our strong relationships with athletes and club decision-makers help you cut through red tape and get deals done fast.
                </p>
                <p>
                  We act as a bridge between brands and the sports world—bridging the gap between ambitious visions and complex realities.
                </p>
                <p>
                  Sponsorships that elevate your objectives by negotiating and executing deals, we break down barriers to deliver measurable impact, evolving both sides.
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
                {/* Portrait Image Placeholder */}
                <div className="image-placeholder aspect-square mb-4 rounded-full overflow-hidden w-24 h-24 mx-auto">
                  <div className="text-white text-xs font-bold">
                    PORTRAIT-{index + 1}
                  </div>
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
          <h2 className="heading-1 mb-4">
            Insider Expertise. Real Results.
          </h2>
          <p className="text-neutral-gray-light mb-8 max-w-3xl">
            Brand and sports partnerships are complicated. They&apos;re equal parts art and hard-nosed business, with risk lurking behind every deal. We understand both. Years of direct experience have taught us what works, where the landmines are, and how to de-risk your sponsorship strategy. We&apos;ve watched too many deals go nowhere because the fundamentals were ignored.
          </p>
          <p className="text-neutral-gray-light mb-8 max-w-3xl">
            That won&apos;t happen here. You want insider savvy, market realism, and measurable outcomes. We deliver it—because we&apos;ve been there before.
          </p>
          <Link href="/what-we-offer" className="btn-primary">
            SEE WHAT WE DO
          </Link>
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
                <div className="image-placeholder aspect-video">
                  <div className="text-white text-lg font-bold">
                    CASE-STUDY-{index + 1}
                  </div>
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

      {/* See it. Feel it. Live it. */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-1 mb-6">
                See it. Feel it. Live it.
              </h2>
              <p className="text-neutral-gray-light mb-8">
                We don&apos;t just pitch you on the surface. We dig deeper. Through immersive brand experiences, behind-the-scenes access, and on-ground activations, we show brands and stakeholders the full potential of sports marketing. Walk the locker room. Meet the players. Feel the energy of gameday. That&apos;s when brands stop thinking and start believing.
              </p>
              <Link href="/contact" className="btn-primary">
                LET&apos;S TALK
              </Link>
            </div>

            <div className="image-placeholder aspect-video">
              <div className="text-white text-2xl font-bold">
                PLACEHOLDER-SEE-IT-FEEL-IT-IMAGE
                <div className="text-sm mt-2">Event/stadium experience visual</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding bg-primary-purple-light">
        <div className="container-custom max-w-4xl">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
