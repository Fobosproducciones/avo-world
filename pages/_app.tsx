import { AppProps } from 'next/app'
import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import '../global.css'

import CartProvider from '@store/Cart'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <>
      <Head>
        <title>Avo World</title>
      </Head>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  )
}

export default MyApp
