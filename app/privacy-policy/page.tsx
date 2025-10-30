export const metadata = {
  title: 'Privacy Policy | Chiliz Sports',
  description: 'Read our privacy policy to understand how Chiliz Sports collects, uses, and protects your personal information in accordance with data protection regulations.',
}

export default function PrivacyPolicy() {
  // Redirect to Chiliz privacy policy
  if (typeof window !== 'undefined') {
    window.location.href = 'https://www.chiliz.com/privacy-policy/'
  }

  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-1 mb-12">Privacy Policy</h1>
          <div className="space-y-6 text-neutral-gray-light">
            <p>Redirecting to our privacy policy...</p>
            <p>
              If you are not redirected automatically, please{' '}
              <a
                href="https://www.chiliz.com/privacy-policy/"
                className="text-accent-pink hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                click here
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
