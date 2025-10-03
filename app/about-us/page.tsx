import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export default function AboutUs() {
  const testimonials = [
    {
      quote: "We know sports clubs very well. We know sports clubs and are aware understand this well. We know the reality of how tricky sponsorships can be and what athletes want. Our team has been navigating these relationships for a decade.",
      author: "Alexandre Dreyfus",
      role: ""
    },
    {
      quote: "Fostering synergies and opportunities. We deeply understand how sports partnership branding works—the nuances, the expectations, and the obstacles. That insight allows us to craft smarter deals, mitigate risk, and open doors other agencies can't. We've been doing this for years, and it shows.",
      author: "Daniel Madjetko",
      role: ""
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
            THE SPORTS PARTNERSHIP INSIDERS
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="image-placeholder aspect-square">
              <div className="text-white text-2xl font-bold">
                PLACEHOLDER-WHO-WE-ARE-IMAGE
                <div className="text-sm mt-2">Large purple gradient visual</div>
              </div>
            </div>

            <div>
              <h2 className="heading-1 mb-6">
                Who We Are?
              </h2>
              <p className="text-neutral-gray-light mb-4">
                Led by Chiliz Marketing, a globally experienced commercial leader in the sports industry, Chiliz Sports isn&apos;t a traditional agency. We&apos;re insiders who built our reputation one deal at a time, working directly with leagues, clubs, athletes, and major brands—and we can do it all for you too.
              </p>
              <p className="text-neutral-gray-light mb-4">
                We act on de-light years of the team. We&apos;ve been in locker rooms, sat in boardrooms, managed real negotiations, and seen up close what drives (or derails) major deals. That perspective gives us an edge: we understand both sides and can maneuver between them with confidence.
              </p>
              <p className="text-neutral-gray-light mb-6">
                We do a lot more with these commercial relationships, helping both sides navigate their needs and expectations in a much more nuanced way than you&apos;ll find elsewhere.
              </p>
              <Link href="/contact" className="btn-primary">
                LET&apos;S TALK
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-primary-purple-light">
        <div className="container-custom">
          <h2 className="heading-1 mb-6">
            What We Do ?
          </h2>
          <div className="max-w-4xl">
            <p className="text-neutral-gray-light mb-4">
              We act through the power of the sports commercial realm. With direct access to high-level connections and decision-making networks, we help you secure the partnerships that matter.
            </p>
            <p className="text-neutral-gray-light mb-6">
              From athletes your objectives by negotiating and executing deals, we break down barriers to deliver measurable impact, evolving both sides. We secure your objectives by negotiating and executing deals that build long-term brand equity and drive performance-based impact, evolving both sides.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex gap-6">
                <div className="text-accent-pink text-6xl leading-none">&ldquo;</div>
                <div className="flex-1">
                  <p className="text-neutral-gray-light mb-6">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full flex-shrink-0 overflow-hidden">
                      <Image
                        src={`/portrait-${index + 5}.png`}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part of The Chiliz Group */}
      <section className="section-padding bg-primary-purple-light">
        <div className="container-custom">
          <h2 className="heading-1 mb-6">
            Part of The Chiliz Group
          </h2>
          <p className="text-neutral-gray-light max-w-4xl mb-8">
            Chiliz is the global leader in blockchain for sport and entertainment. Our parent company has partnerships with the biggest teams in the world—FC Barcelona, Paris Saint-Germain, Juventus, Manchester City, UFC, and many more. Our unique access and sports ecosystem, partnerships, and access with the world&apos;s biggest clubs, including FC Barcelona, PSG, Manchester City, Juventus, and Inter Milan.
          </p>
          <p className="text-neutral-gray-light max-w-4xl">
            That global network isn&apos;t window dressing. It&apos;s active, ongoing, and directly accessible through Chiliz Sports. We leverage those relationships to open doors, accelerate negotiations, and deliver results that independent agencies simply can&apos;t match.
          </p>
        </div>
      </section>

      {/* Get A Winning Edge */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-1 mb-6">
            Get A Winning Edge
          </h2>
          <p className="text-neutral-gray-light mb-12">
            The global sports landscape moves fast and we&apos;ve been part of it for years. Whether you need introductions, deal structuring, negotiations, or activation strategy, Chiliz Sports brings the commercial expertise and access you need to win. Don&apos;t settle for hype seating. When sports partnerships really matter to your business, go with the insiders who&apos;ve already built the connections you&apos;ll need.
          </p>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
