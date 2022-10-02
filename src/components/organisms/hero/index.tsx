import React from 'react'
import style from './hero.module.scss'

export const Hero = (props: { children: any, className: any }) => {

    return <section className={style.component}>
        <div className={`${style.container} ${props.className}`}>
            {props.children}
        </div>
    </section>
}