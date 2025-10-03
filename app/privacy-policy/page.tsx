export const metadata = {
  title: 'Privacy Policy | Chiliz Sports',
}

export default function PrivacyPolicy() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-1 mb-12">Privacy Policy</h1>
          <div className="space-y-6 text-neutral-gray-light">
            <p>This privacy policy will be updated with your company&apos;s specific privacy terms.</p>
            <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
