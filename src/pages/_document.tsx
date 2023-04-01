import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="shortcut icon" href="/favicon.jpeg" />
      </Head>
      <body className="font-serif min-h-screen text-lg">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
