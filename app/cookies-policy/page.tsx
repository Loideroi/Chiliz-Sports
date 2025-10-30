export const metadata = {
  title: 'Cookies Policy | Chiliz Sports',
  description: 'Learn about how Chiliz Sports uses cookies on our website. Understand what cookies are, why we use them, and how you can control your cookie settings.',
}

export default function CookiesPolicy() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary-purple uppercase">
            Cookies Policy
          </h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Last Updated */}
            <p className="text-sm text-gray-500">
              <strong>Last updated:</strong> January 2025
            </p>

            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary-purple uppercase">
                What Are Cookies?
              </h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
              <p className="mt-4">
                At Chiliz Sports, we use cookies and similar technologies to enhance your browsing experience,
                analyze site traffic, and understand where our visitors are coming from.
              </p>
            </div>

            {/* How We Use Cookies */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary-purple uppercase">
                How We Use Cookies
              </h2>
              <p>
                We use cookies for several important reasons:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>To remember your cookie consent preferences</li>
                <li>To protect our website from spam and abuse</li>
                <li>To understand how visitors use our website</li>
                <li>To improve our website and services</li>
                <li>To show you relevant content and communications</li>
              </ul>
            </div>

            {/* Cookie Categories */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary-purple uppercase">
                Types of Cookies We Use
              </h2>

              {/* Functional Cookies */}
              <div className="mb-6 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  1. Functional Cookies (Always Active)
                </h3>
                <p className="mb-3">
                  These cookies are essential for the website to function properly. They enable core functionality
                  such as security, network management, and accessibility. You cannot disable these cookies.
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-sm text-gray-700 mb-2">Examples:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Cookie Consent Preferences:</strong> Stored in browser localStorage to remember your cookie choices</li>
                    <li><strong>Cloudflare Turnstile:</strong> Security cookies to protect our contact form from spam and abuse</li>
                    <li><strong>Session Cookies:</strong> Essential for maintaining your session while browsing our website</li>
                  </ul>
                </div>
              </div>

              {/* Preferences Cookies */}
              <div className="mb-6 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  2. Preferences Cookies
                </h3>
                <p>
                  These cookies allow the website to remember choices you make (such as your language preference or region)
                  and provide enhanced, more personalized features. These cookies do not track your browsing activity on other websites.
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-sm text-gray-700 mb-2">Examples:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Language Preferences:</strong> Remember your preferred language</li>
                    <li><strong>UI Preferences:</strong> Remember your display preferences</li>
                  </ul>
                </div>
              </div>

              {/* Statistics Cookies */}
              <div className="mb-6 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  3. Statistics Cookies (Analytics)
                </h3>
                <p>
                  These cookies help us understand how visitors interact with our website by collecting and reporting
                  information anonymously. This helps us improve our website performance and user experience.
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-sm text-gray-700 mb-2">What we collect:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm mb-4">
                    <li><strong>Google Analytics (GA4):</strong> We use Google Analytics to understand how visitors use our website. This includes:
                      <ul className="list-circle pl-6 mt-2 space-y-1">
                        <li>Page views and navigation patterns</li>
                        <li>Session duration and bounce rates</li>
                        <li>Geographic location (country, region, city)</li>
                        <li>Device type, browser, and operating system</li>
                        <li>Traffic sources (how you found our website)</li>
                        <li>Form submission events (success/failure, not form content)</li>
                        <li>Anonymized IP addresses (IP anonymization enabled)</li>
                      </ul>
                    </li>
                    <li><strong>Performance Monitoring:</strong> Helps us identify and fix technical issues</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    Google Analytics data is processed in accordance with Google&apos;s privacy policy. We do not collect personally identifiable information through analytics cookies. For more information, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google&apos;s Privacy Policy</a>.
                  </p>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="mb-6 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  4. Marketing Cookies
                </h3>
                <p>
                  These cookies are used to track visitors across websites. The intention is to display communications
                  that are relevant and engaging for individual users, thereby making them more valuable for publishers and third-party advertisers.
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-sm text-gray-700 mb-2">Examples:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Social Media Pixels:</strong> Enable social media features and track campaign effectiveness</li>
                    <li><strong>Advertising Cookies:</strong> Used to show you relevant ads based on your interests</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary-purple uppercase">
                How to Control and Manage Cookies
              </h2>
              <p className="mb-4">
                You have the right to decide whether to accept or reject cookies (except for functional cookies which are
                essential for the website to work). You can manage your cookie preferences through:
              </p>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">1. Our Cookie Banner</h3>
                <p>
                  When you first visit our website, you&apos;ll see a cookie banner where you can accept all cookies,
                  reject non-essential cookies, or customize your preferences.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">2. Cookie Settings</h3>
                <p>
                  You can change your cookie preferences at any time by clicking &quot;Manage cookies&quot; in the footer of our website.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">3. Browser Settings</h3>
                <p className="mb-2">
                  Most web browsers allow you to control cookies through their settings. You can typically find these settings
                  in the &quot;Options&quot; or &quot;Preferences&quot; menu of your browser. Here are links to cookie settings for popular browsers:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><a href="https://support.google.com/chrome/answer/95647" className="text-accent-pink hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-accent-pink hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" className="text-accent-pink hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-accent-pink hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                </ul>
              </div>

              <p className="mt-4 text-sm text-gray-600">
                Please note that blocking certain types of cookies may impact your experience on our website and
                limit the services we can provide.
              </p>
            </div>

            {/* Third-Party Cookies */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary-purple uppercase">
                Third-Party Cookies
              </h2>
              <p>
                Some cookies on our website are placed by third-party services that appear on our pages. We do not control
                these third-party cookies and recommend that you check the third-party websites for more information about
                how they use cookies.
              </p>
            </div>

            {/* Updates to This Policy */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary-purple uppercase">
                Updates to This Cookies Policy
              </h2>
              <p>
                We may update this Cookies Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. Please check this page periodically for updates.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary-purple uppercase">
                Your Rights Under GDPR
              </h2>
              <p className="mb-3">
                If you are located in the European Economic Area (EEA), you have certain data protection rights under the
                General Data Protection Regulation (GDPR), including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to rectify inaccurate personal data</li>
                <li>The right to request deletion of your personal data</li>
                <li>The right to restrict processing of your personal data</li>
                <li>The right to data portability</li>
                <li>The right to object to processing of your personal data</li>
                <li>The right to withdraw consent at any time</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary-purple uppercase">
                Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions/comments about this Cookies Policy please contact Us by sending an email to the following address{' '}
                <a href="mailto:dataprotection@chiliz.com?subject=COOKIES%20POLICY%20REQUEST" className="text-accent-pink hover:underline">
                  dataprotection@chiliz.com
                </a>
                {' '}with the subject &quot;COOKIES POLICY REQUEST&quot; or by writing to:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>DATA PROTECTION OFFICER</strong></p>
                <p className="mb-2">The Chiliz Group Limited,</p>
                <p className="mb-2">Level 6, Wembley Business Centre, 179</p>
                <p className="mb-2">Rue D&apos;Argens</p>
                <p>Msida MSD 1360, Malta</p>
              </div>
            </div>

            {/* Related Policies */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Related Policies</h3>
              <div className="flex flex-wrap gap-4">
                <a href="/privacy-policy" className="text-accent-pink hover:underline">Privacy Policy</a>
                <span className="text-gray-400">|</span>
                <a href="/legal-notice" className="text-accent-pink hover:underline">Legal Notice</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
