import React, { MutableRefObject, ReactElement } from "react"

//  -------------------------------  //

//  --------------------
export const intersection = (
    target: MutableRefObject<any>,
    options?: {
        rootMargin: string,
        threshold: number,
    }
) => {

//  --------------------
//  
//  --------------------
    const [ status, setStatus ] = React.useState<boolean>(false)

    let observer: IntersectionObserver | null = null

    if (typeof window !== "undefined") {
    //  ----------------
        
        observer = new IntersectionObserver((e) => {
            //setStatus()
            let _status = e[0].isIntersecting
            setStatus(_status)
        }, { 
            root: document,
            rootMargin: '0px',
            threshold: options?.threshold ? options?.threshold : 0.75,
        })
        
        
        React.useEffect(() => {
            observer?.observe(target.current)

            //  return observer?.unobserve(target.current)
        }, [])

        return status
    }
}