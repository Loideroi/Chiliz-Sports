export const metadata = {
  title: 'Manage Cookies | Chiliz Sports',
}

export default function ManageCookies() {
  // Redirect to Chiliz privacy policy
  if (typeof window !== 'undefined') {
    window.location.href = 'https://www.chiliz.com/privacy-policy/'
  }

  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-1 mb-12">Manage Cookies</h1>
          <div className="space-y-6 text-neutral-gray-light">
            <p>Redirecting to manage your cookie preferences...</p>
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
