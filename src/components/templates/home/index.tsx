import React from 'react'
import { Button } from "components/atoms/button"
import { Hero } from "components/organisms/hero"
import structure from '../shell.module.scss'
import style from './home.module.scss'

export const Home = (props: { children: any, className: any }) => {
    let _button = React.useRef()


    //  --------------------
    return <div className={style.component}>
        <Hero className={`${structure.container} ${style.hero}`}>
            <p className={style.attention}>Hey! My name is</p>
            <h1>Sterling Holt</h1>
            <p className={style.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus tristique lacus. In hac habitasse platea dictumst. </p>


            <Button
                forwardRef={_button}
                className={style.button}
                onClick={() => {

                }}
            >
                Words
            </Button>
        </Hero>

        <div>Experience</div>
    </div>
}