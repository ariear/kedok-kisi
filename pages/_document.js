import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='bg-[#2B3A55]'>
        <Nav />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}