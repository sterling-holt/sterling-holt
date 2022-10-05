import React from 'react'

export const Section = (props: {
    children?: any,
    style?: any
}) => {

    useSCSS(props.style)


    

    return <section
        className=""
    >
        { props.children }
    </section>
}




//  ------------------------------------





function useSCSS(style: { }) {

    let payload: Array<any>



    React.useEffect(() => {
        let _style = style.toString()
        //  let _properties = _getValues(0)


        //  console.log(_property)


        {(() => ( 
            _data: any, 
            _payload: Array<any> 
        ) => {
    
            //  ----------------------------
            const keys = Array<any>
            
            for (const i in keys) { 
    
                console.log(i)
                return _payload.push()
            }
            //  ----------------------------
    
            const _x = new RegExp('/*:')
            console.log(_x)
    
        })()}


    }, [style])


    return ''
    /*
    props.style && React.useEffect(() => {
        for (const i of props.style) {
            console.log(i)
        }
    }, [])
    */
}