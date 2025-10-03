export const metadata = {
  title: 'Cookies Policy | Chiliz Sports',
}

export default function CookiesPolicy() {
  // Redirect to Chiliz privacy policy (cookies section)
  if (typeof window !== 'undefined') {
    window.location.href = 'https://www.chiliz.com/privacy-policy/'
  }

  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-1 mb-12">Cookies Policy</h1>
          <div className="space-y-6 text-neutral-gray-light">
            <p>Redirecting to our cookies policy...</p>
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
