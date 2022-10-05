import React from 'react'
import { Footer } from './footer'
import { Navbar } from './navbar'

export const Shell = (props: { children: any }) => {

    //
    //  ----------------------------
    const _nav = React.useRef()
	const _content = React.useRef()
	const _footer = React.useRef()

    const isMobileMenu = false

    return <>
        <Navbar
            refs={{ nav: _nav, content: _content, footer: _footer }}
            className="" />

        <main>
            {props.children}
        </main>

        <Footer
            refs={{ nav: _nav, content: _content, footer: _footer }}
            className=""
        /> 
    </>
}



