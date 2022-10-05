import dynamic from 'next/dynamic'

//  ----

import { MutableRefObject } from 'react'
import { useIntersection } from './intersection'

export const useObserver = (type: string, ref: MutableRefObject<any>) => {
    if (type === 'intersection') {

        //  dynamic import to reduce bundle size:
        //  dynamic(() => import('./intersection'))
        //  ----

        console.log('intersection ', type)
        console.log('reference: ', ref.current ? ref.current : null)


        return null
    }
}