import React from 'react'
import style from './avatar.module.scss'

export const Avatar = (props: { src: any, className: any }) => {
    let _ref = React.useRef<any>()
    

    return <div
        ref={_ref}
        style={{ 
            '--test':   'purple',
            '--src':    `url(${props.src})`
        } as React.CSSProperties }
        className={`${style.avatar} ${props.className}`}
    />
}