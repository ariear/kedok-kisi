import { Html, Head, Main, NextScript } from 'next/document'
import Nav from '../components/Nav'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='bg-[#2B3A55]'>
        <Nav />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}