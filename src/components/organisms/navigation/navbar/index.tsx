import React from 'react'
import style from './navbar.module.scss'
import { Menu } from './menu'

//  ----------------

export const Component = (props: {
    className: any
}) => {
    let [scrollPos, setScrollPos] = React.useState()
    let [ isMenuOpen, setIsMenuOpen ] = React.useState(false as boolean)
    let [ showMenu, setShowMenu ] = React.useState(false as boolean)



    if (typeof window !== 'undefined') {
        React.useEffect(() => {
        }, [window.innerWidth])
    }
    
    return <nav className={`${style.component}`}>
        <div className={`${style.container} ${props.className}`}>
            <p className={style.branding}>[name]</p>

            { showMenu &&  <>
                <Menu className={style.menu} state={{ isMenuOpen, setIsMenuOpen }} />

                { isMenuOpen && <div className={`${style.testing}`}>
                    <Links />
                </div> }
            </> }
        </div>

    </nav>
}




const Links = () => {


    return <>
        <p>Links go here</p>
    </>
}

//  ----------------

// intersection logic:
//  1. check for scroll position
//  2. check for delta between old scrollPos and new scrollPos
//  3. set a timeout, repeat 2.
//  4. if step 3 outputs a value higher than step 2's output