//  react
//  ------------------------
import React from "react"
//  ------------------------

//  ------------------------
//  styles, local components
import style from './shell.module.scss'
import { Home } from './home'
import { Project } from './projects'
import { Footer, Navbar } from "components/organisms/navigation"
//  ------------------------


//  ------------------------
const Shell = (props: { 
    children: any
}) => {
    if (typeof window !== "undefined") {
        //  ----------------
        React.useEffect(() => {
            document.documentElement.style.setProperty('--pixel-density', window.devicePixelRatio.toString());
        }, [window.devicePixelRatio])
    }

    //  --------------------
    return <div className={`${style.shell}`}>
        <Navbar className={style.container} />
        <main>{ props.children }</main>
        <Footer className={style.container} />
    </div>
}   //  --------------------

//  ------------------------
export { 
    Shell,
    Home, 
    Project
}   //  --------------------