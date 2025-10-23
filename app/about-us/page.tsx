import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export default function AboutUs() {
  const testimonials = [
    {
      title: "We know sports clubs very well.",
      quote: "We know sports clubs and sports properties very well because we've been serving them and their fans for over six years.",
      author: "Alexandre Dreyfus",
      role: "",
      image: "alex.png"
    },
    {
      title: "Fostering synergies and opportunities.",
      quote: "Our existing partners know how valuable our network is because we've been fostering synergies and opportunities between them since our foundation.\n\nNow, through Chiliz Sports more clubs, rights holders and brands from sports, crypto and beyond will be able to tap into our remarkable network.",
      author: "Daniel Maglietta",
      role: "",
      image: "daniel.png"
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
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
          <h1 className="heading-hero mb-6">
            The Sports<br />Partnership Insiders.
          </h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We know the game because we&apos;ve played it. From global brands to elite clubs and athletes, we&apos;ve been on every side of the sponsorship table. That experience — and our unrivalled network — is what makes us different.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/who-we-are.png"
                alt="Who We Are - Chiliz Sports team"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="heading-1 mb-6">
                Who We Are?
              </h2>
              <p className="text-neutral-gray-light mb-6 leading-relaxed">
                Led by Daniel Maglietta, a vastly experienced commercial leader in the sports industry, Chiliz Sports isn&apos;t a traditional agency. We&apos;re insiders who&apos;ve built one of the most powerful sports networks in the world — and now we use it to unlock opportunities for brands, clubs, and athletes.
              </p>
              <p className="text-neutral-gray-light mb-8 leading-relaxed">
                We&apos;ve sat on both sides of the table. We&apos;ve been the sponsor, the negotiator, and the rights holder. That experience gives us a unique perspective on how to create partnerships that work — not just on paper, but in practice.
              </p>
              <Link href="/contact" className="btn-primary">
                Let&apos;s TALK
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-primary-purple-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-1 mb-6">
                What We Do?
              </h2>
              <p className="text-neutral-gray-light mb-6 leading-relaxed">
                We cut through the noise of the sports sponsorship maze. With direct access to clubs, leagues, talent, and investors, we connect brands with the decision-makers that matter.
              </p>
              <p className="text-neutral-gray-light mb-6 leading-relaxed">
                From defining your objectives to negotiating and activating deals, we make sure every partnership delivers measurable impact and long-term value.
              </p>
            </div>

            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/what-we-do.png"
                alt="What We Do - Chiliz Sports services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-primary-purple-light rounded-lg p-8">
                <h3 className="heading-3 mb-4">{testimonial.title}</h3>
                <p className="text-neutral-gray-light mb-6 leading-relaxed whitespace-pre-line">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full flex-shrink-0 overflow-hidden">
                    <Image
                      src={`/${testimonial.image}`}
                      alt={`${testimonial.author} portrait`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    {testimonial.role && <p className="text-sm text-neutral-gray-light">{testimonial.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part of The Chiliz Group */}
      <section className="section-padding bg-primary-purple-light">
        <div className="container-custom">
          <h2 className="heading-1 mb-6">
            Part of The Chiliz Group.
          </h2>
          <p className="text-neutral-gray-light max-w-4xl leading-relaxed">
            Chiliz is the global leader in blockchain for sport and entertainment. We pioneered Fan Tokens™ and Socios.com - the platform where fans hold and trade 70+ Fan Tokens™ and unlock exclusive rewards, experiences, and access with the world&apos;s biggest clubs, including FC Barcelona, PSG, Manchester City, Juventus, and Inter Milan.
          </p>
        </div>
      </section>

      {/* Contact Us - Get A Winning Edge */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-base font-normal mb-4" style={{color: 'rgb(255, 0, 82)'}}>
                CONTACT US
              </h2>
              <p className="text-2xl md:text-3xl font-semibold mb-6 text-primary-purple">
                Get A Winning Edge.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Drive real business impact, unlock global audiences, and create moments that fans never forget. We&apos;re waiting to hear from you.
              </p>
            </div>

            <div>
              <ContactForm showHeading={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
