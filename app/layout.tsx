import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientProviders from '@/components/ClientProviders'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.chiliz-sports.com'),
  title: {
    default: 'Chiliz Sports | When Access Matters, We\'re Already Inside',
    template: '%s | Chiliz Sports'
  },
  description: 'The sports partnership insiders. Access to rights & talent from global brands to clubs, athletes, and influencers.',
  authors: [{ name: 'Chiliz Sports' }],
  creator: 'Chiliz Sports',
  publisher: 'Chiliz Sports',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.chiliz-sports.com',
    siteName: 'Chiliz Sports',
    title: 'Chiliz Sports | Sports Partnership Insiders',
    description: 'Access 70+ elite sports partnerships. Direct connections to clubs, leagues & talent.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chiliz Sports - When Access Matters, We\'re Already Inside',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chiliz Sports | Sports Partnership Insiders',
    description: 'Access 70+ elite sports partnerships. Direct connections to clubs, leagues & talent.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Enhanced Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://www.chiliz-sports.com/#organization',
    name: 'Chiliz Sports',
    alternateName: 'Chiliz Sports Agency',
    url: 'https://www.chiliz-sports.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.chiliz-sports.com/chiliz-sports-logo.svg',
      width: '458',
      height: '91',
    },
    image: 'https://www.chiliz-sports.com/og-image.jpg',
    description: 'Sports partnership and sponsorship agency providing insider access to elite clubs, leagues, and talent worldwide.',
    slogan: 'When Access Matters, We\'re Already Inside.',
    foundingDate: '2018',
    areaServed: 'Worldwide',
    serviceType: [
      'Sports Sponsorship',
      'Brand Partnerships',
      'Athlete Ambassadors',
      'Sports Marketing',
      'Contract Management',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Business Inquiries',
      url: 'https://www.chiliz-sports.com/contact',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://www.linkedin.com/company/chiliz',
      'https://twitter.com/chiliz',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Chiliz Group',
      url: 'https://www.chiliz.com',
    },
  }

  // WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.chiliz-sports.com/#website',
    url: 'https://www.chiliz-sports.com',
    name: 'Chiliz Sports',
    description: 'Sports partnership insiders with access to 70+ elite clubs, leagues and talent worldwide.',
    publisher: {
      '@id': 'https://www.chiliz-sports.com/#organization',
    },
    inLanguage: 'en-US',
  }

  // Service Schemas
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Direct Access to Sports Partnerships',
        description: 'Direct connections to decision-makers from 70+ top clubs and leagues worldwide.',
        provider: {
          '@id': 'https://www.chiliz-sports.com/#organization',
        },
        areaServed: 'Worldwide',
        serviceType: 'Sports Partnership Consulting',
      },
      {
        '@type': 'Service',
        name: 'Brand Protection & Contract Management',
        description: 'Expert contract negotiation and brand protection for sports sponsorship deals.',
        provider: {
          '@id': 'https://www.chiliz-sports.com/#organization',
        },
        areaServed: 'Worldwide',
        serviceType: 'Contract Management',
      },
      {
        '@type': 'Service',
        name: 'Custom Sponsored Packages',
        description: 'Tailored sponsorship packages including branding, digital campaigns, and VIP experiences.',
        provider: {
          '@id': 'https://www.chiliz-sports.com/#organization',
        },
        areaServed: 'Worldwide',
        serviceType: 'Sports Sponsorship',
      },
      {
        '@type': 'Service',
        name: 'Athlete Ambassadors',
        description: 'Connect your brand with elite athletes for authentic, powerful partnerships.',
        provider: {
          '@id': 'https://www.chiliz-sports.com/#organization',
        },
        areaServed: 'Worldwide',
        serviceType: 'Athlete Management',
      },
      {
        '@type': 'Service',
        name: 'Insider Knowledge & First-Look Opportunities',
        description: 'Exclusive early access to upcoming sponsorship opportunities before they\'re public.',
        provider: {
          '@id': 'https://www.chiliz-sports.com/#organization',
        },
        areaServed: 'Worldwide',
        serviceType: 'Sports Marketing Intelligence',
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        {/* Viewport and Performance Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Resource Hints for Performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://figma-alpha-api.s3.us-west-2.amazonaws.com" />
        <link rel="dns-prefetch" href="https://s3-alpha.figma.com" />
        <link rel="dns-prefetch" href="https://challenges.cloudflare.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://figma-alpha-api.s3.us-west-2.amazonaws.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://challenges.cloudflare.com" crossOrigin="anonymous" />

        {/* Critical Image Preloading - LCP Image */}
        <link
          rel="preload"
          href="/hero-image-1.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Font Preloading - Preload critical body text fonts (AtypText) */}
        <link
          rel="preload"
          href="/fonts/atyp-text/AtypText-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/atyp-text/AtypText-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/atyp-text/AtypText-Semibold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/atyp-text/AtypText-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Structured Data - Organization/ProfessionalService Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Structured Data - WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Structured Data - Services Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />

        {/* Google Analytics - Replace 'G-XXXXXXXXXX' with your actual Measurement ID */}
        {/* Uncomment and add your GA ID to enable analytics */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        /> */}
      </head>
      <body>
        <ClientProviders>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
