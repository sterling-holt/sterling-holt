import { Button } from 'components/atoms/button'
import React from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { IoIosClose } from 'react-icons/io'
import style from './menu.module.scss'

//  ----

export const Menu = (props: {
    className: any,
    state: any
}) => {
    const { isMenuOpen, setIsMenuOpen } = props.state


    //  actions:
    function openMenu() {

        setIsMenuOpen(!isMenuOpen)
    }



    return <div className={`${''} ${props.className}`}>

        <Button onClick={openMenu} className={style.button}>
            <div className={style.icon}>
                { !isMenuOpen ? <HiMenuAlt4 /> : <IoIosClose /> }
            </div>
        </Button>
    </div>
}