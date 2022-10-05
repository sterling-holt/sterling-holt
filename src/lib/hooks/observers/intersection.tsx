import React, { MutableRefObject, ReactElement } from "react"

//  -------------------------------  //

//  --------------------
export function useIntersection(
    target: MutableRefObject<any>,
    options?: {
        root?: any,
        rootMargin?: string,
        threshold?: number,
        state?: any,
    }
){

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