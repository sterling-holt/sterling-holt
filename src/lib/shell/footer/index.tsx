import React, { MutableRefObject } from 'react'
import style from './footer.module.scss'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useIntersection } from 'lib/hooks/observers/intersection'






export const Footer = (props: { 
	children?: any,
	className?: any,
	refs?: {
        nav: any,
        content: any,
        footer: any,
    }
}) => {

    let [ isVisible, setIsVisible ] = React.useState(false)



    useIntersection(props.refs?.footer) && (
        props.refs?.footer.current!.style.setProperty('--fucker-face', 'green') 
    )



    return <footer ref={props.refs?.footer} className={style.footer}>
        
        <div className={style.brand}>Branding?</div>


        <div className={style.links}>

            <ul>
                <li><Link href="/"><a>Hello</a></Link></li>
            </ul>
        </div>
    </footer>
}