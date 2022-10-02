import React, { ReactElement } from 'react'
import style from './button.module.scss'

//  ----------------

export const Button = (props: { 
    children: ReactElement | string,
    onClick: Function,
    className: any,
    forwardRef: any
}) => {

    const [ mouse, setMouse ] = React.useState([]) as any
    const ButtonRef = React.useRef()

    function MouseMove(x: any, y: any) {
        setMouse([ x, y ])
    }
    
    
    React.useEffect(() => {
        console.log(mouse)
        console.log(ButtonRef)
    }, [ mouse ])
    
    
    React.useEffect(() => {
        
        props.forwardRef.current !== 'undefined ' ?
            console.log(props.forwardRef.current.setAttribute('style', 'background: "blue"'))
            :null

    }, [props.forwardRef])


    //  --------
    return <button
        ref={props.forwardRef}
        className={`${style.component} ${props.className}`}
        onMouseMove={(e) => {
            MouseMove(e.clientX, e.clientY)
        }}
        onMouseDown={() => {}}
        onClick={(e) => {
            props.onClick(e)
        }}>
        { props.children }
    </button>
}