import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="shortcut icon" href="/favicon.jpeg" />
      </Head>
      <body className="bg-white text-slate-600 font-serif min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
