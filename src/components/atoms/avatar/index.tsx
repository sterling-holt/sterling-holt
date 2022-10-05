import React from "react"
import { useIntersection } from "lib/hooks/observers/intersection"
import style from './avatar.module.scss'

//  --------------------
export const Avatar = () => {



    const _ref = React.useRef<any>()
    let isIntersecting = useIntersection(_ref)


    React.useEffect(() => {
    }, [_ref])


    //  ----------------
    return <div
        ref={_ref}
        style={{ ['--bg-color' as any]: isIntersecting ? 'purple' : 'blue' }}
        className={`${style.avatar}`}
        //  style={{ '--avatar-image': 'https://avatars.githubusercontent.com/u/2521652?v=4' }}
    />
}