//
//	description of file
//
//	------------------------
//	i.  imports
import React, { MutableRefObject } from 'react'
import type { AppProps } from 'next/app'
//	------------------------
//	import * as dotenv from 'dotenv'
//	dotenv.config()
//	------------------------
//
//	ii.  stylesheets
//	------------------------
import 'the-new-css-reset'
//	------------------------
import { Shell } from 'lib/shell'
//	------------------------

export default function App({ Component, pageProps }: AppProps) {

	//	--------------------

  	return <Shell>
		<Component {...pageProps} />
	</Shell>
}