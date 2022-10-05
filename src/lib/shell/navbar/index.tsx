import React, { MutableRefObject } from 'react'
import style from './_styles/navbar.module.scss'
import { useIntersection } from 'lib/hooks/observers/intersection'
import Link from 'next/link'
import { Button } from 'components/button'


//  ----------------


export const Navbar = (props: {
	children?: any,
	className?: any,
	refs?: {
        nav: any,
        content: any,
        footer: any,
    }
}) => {
    //  ------------------------------------

    const _this = props.refs?.nav ? props.refs?.nav : React.useRef<any>()
    const intersection = useIntersection(_this)

    //  ------------------------------------
    



    //  ------------------------------------

    return <>
        <nav
            ref={_this}
            className={`${style.navbar}`}
        >
            <Link href='/'>
                <a className={style.branding}>[name]</a>
            </Link>

            <Links />
        </nav>
    </>
}






























const testLinks = [
    { name: 'about', link: '/about'},
    { name: 'projects', link: '/project/id/'},
    { name: 'contact', link: '/contact'},
]


const Links = () => {

    return <div className={style.wrapper}>
        
        <ul>
            { testLinks.map((item: any, index) => {
        
                return <li key={index} style={{ ["--index" as any]:index }}>
                    <Link href={item.link}>
                        <a>{item.name}</a>
                    </Link>
                </li>
            }) }
        </ul>


        <Button>Button goes here</Button>
    </div>
}

//  ----------------

// intersection logic:
//  1. check for scroll position
//  2. check for delta between old scrollPos and new scrollPos
//  3. set a timeout, repeat 2.
//  4. if step 3 outputs a value higher than step 2's output