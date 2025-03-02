import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p>
          Welcome to Nixensoft. Your privacy is important to us, and we are committed to protecting the personal
          information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your
          information when you visit our website or use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            Personal Information: Name, email address, phone number (9940759291), and other details you provide when
            contacting us or using our services.
          </li>
          <li>
            Usage Data: Information about your interactions with our website, including IP address, browser type, pages
            visited, and time spent on our website.
          </li>
          <li>
            Cookies and Tracking Technologies: We use cookies and similar technologies to enhance user experience and
            analyze website traffic.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
        <p>We use the collected information for the following purposes:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>To provide and improve our services.</li>
          <li>To respond to your inquiries and provide customer support.</li>
          <li>To send updates, promotional content, and other communications related to our services.</li>
          <li>To enhance website security and prevent fraudulent activities.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Sharing of Information</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. However, we may share your
          information with:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Service providers who assist us in operating our website and services.</li>
          <li>Legal authorities if required by law or to protect our rights and safety.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
        <p>
          We implement security measures to protect your personal information from unauthorized access, alteration,
          disclosure, or destruction. However, no online transmission is 100% secure, and we cannot guarantee absolute
          security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Access, update, or delete your personal information.</li>
          <li>Opt-out of receiving marketing communications.</li>
          <li>Request information about how we process your data.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for their privacy practices, and
          we encourage you to review their privacy policies before providing any information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
          effective date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle your information, please contact us at:
        </p>
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

