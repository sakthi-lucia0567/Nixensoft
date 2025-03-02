import Link from "next/link"

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p>
          Welcome to Nixensoft. These Terms and Conditions govern your use of our website and services. By accessing our
          website, you agree to comply with these terms. If you do not agree, please refrain from using our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Use of Our Website</h2>
        <ul className="list-disc pl-6">
          <li>You must be at least 18 years old to use our services.</li>
          <li>You agree not to use our website for any unlawful activities.</li>
          <li>Unauthorized access, modification, or distribution of website content is prohibited.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property Rights</h2>
        <ul className="list-disc pl-6">
          <li>
            All content on this website, including text, graphics, and logos, is the property of Nixensoft and is
            protected by copyright laws.
          </li>
          <li>You may not use, reproduce, or distribute our content without prior written permission.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
        <ul className="list-disc pl-6">
          <li>
            Nixensoft shall not be liable for any direct, indirect, or consequential damages resulting from your use of
            our website or services.
          </li>
          <li>We do not guarantee uninterrupted or error-free access to our website.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. User Obligations</h2>
        <ul className="list-disc pl-6">
          <li>You agree to provide accurate and truthful information when using our services.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. Nixensoft is not responsible for the content or privacy
          practices of these external sites.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Privacy Policy</h2>
        <p>
          Your use of our website is also governed by our Privacy Policy, which outlines how we collect, use, and
          protect your personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Modifications to Terms</h2>
        <p>
          We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page
          with an updated effective date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
        <p>
          We may terminate or suspend your access to our website if you violate these terms or engage in unlawful
          activities.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
        <p className="mt-2">
          Nixensoft
          <br />
          Phone: 9940759291
          <br />
          Email: contact@nixensoft.com
          <br />
          Website:{" "}
          <Link href="https://www.nixensoft.com" className="text-blue-600 hover:underline">
            www.nixensoft.com
          </Link>
        </p>
      </section>
    </div>
  )
}

