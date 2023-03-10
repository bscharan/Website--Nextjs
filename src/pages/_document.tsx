import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="shortcut icon" href="/favicon.jpeg" />
      </Head>
      <body className=" bg-fuchsia-50 text-slate-600 font-serif min-h-screen text-base sm:text- sm:mx-auto sm:w-3/4 ">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
