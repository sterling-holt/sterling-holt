import React from 'react'
import type { AppProps } from 'next/app'


import 'the-new-css-reset'
import 'lib/scss/app.scss'

//	----

import { Shell } from '../components/templates'

export default function App({ Component, pageProps,  }: AppProps) {

  	return <Shell>
		<Component {...pageProps} />
  	</Shell>
}