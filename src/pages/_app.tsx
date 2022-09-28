import React from 'react'
import type { AppProps } from 'next/app'


//	----
import 'the-new-css-reset/css/reset.css'

export default function App({ Component, pageProps }: AppProps) {

  	return <>
  	  	<Component {...pageProps} />
  	</>
}


async () => {}