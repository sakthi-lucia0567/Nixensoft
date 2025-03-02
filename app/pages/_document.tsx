import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* SEO Meta Tags */}
        <meta
          name="title"
          content="Best Digital Marketing Agency in Coimbatore | Nixensoft"
        />
        <meta
          name="description"
          content="Nixensoft is a Best Digital Marketing Agency in Coimbatore. We offer expert SEO, Social Media Marketing, Web development, and testing solutions."
        />
        <meta
          name="keywords"
          content={`"Digital Marketing Agency in Coimbatore","digital marketing solutions in Coimbatore", "IT company in Coimbatore", "top digital marketing experts in Coimbatore"`}
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="author" content="Nixensoft" />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HKW4Q5QYXW"
        ></Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HKW4Q5QYXW');
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
