import React from 'react'

import style from './button.module.scss'


export const Button = (props: {
    children: any,
}) => {



    return <button
        className={style.btn}
        
        {...props}>
        Button text
    </button>
}