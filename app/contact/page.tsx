import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Us | Chiliz Sports',
  description: 'Get in touch with Chiliz Sports for partnership opportunities',
}

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-1 mb-6 text-center">Get In Touch</h1>
          <p className="text-center text-neutral-gray-light mb-12">
            Ready to activate? Let&apos;s talk about how we can help you achieve your sports partnership goals.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
