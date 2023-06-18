import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="shortcut icon" href="/favicon.jpeg" />
          <title>Sai Charan Bodda</title>
      </Head>
      <body className="font-serif min-h-screen text-lg bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
