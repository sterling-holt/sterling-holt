//
//	description of file
//
 //	----------------------------------------
//	i.  imports
import React, { MutableRefObject } from 'react'
import type { AppProps } from 'next/app'
//	----------------------------------------
//	ii.  stylesheets
//	----------------------------------------
//	import 'the-new-css-reset'
import '../style/global.scss'
import { Navbar } from 'components/navbar'
import { Footer } from 'components/footer'

//	----------------------------------------
import * as dotenv from 'dotenv'

export default function App({ Component, pageProps }: AppProps) {
	
	
	dotenv.config()
	console.log(process.env)






	//	------------------------------------
	return <>
		<Navbar/>
		<main>
			<Component {...pageProps} />
		</main>
		<Footer>
			footer goes here dawg
		</Footer>
	</>
}	//	------------------------------------