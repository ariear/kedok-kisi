import '../styles/style.css'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NextNProgress color='#A3A0C3' />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
