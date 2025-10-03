export const metadata = {
  title: 'Cookies Policy | Chiliz Sports',
}

export default function CookiesPolicy() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-1 mb-12">Cookies Policy</h1>
          <div className="space-y-6 text-neutral-gray-light">
            <p>This cookies policy will be updated with your company&apos;s specific cookie usage terms.</p>
            <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
