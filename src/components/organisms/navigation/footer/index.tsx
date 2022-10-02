import React from 'react'
import { intersection } from 'lib/fn/observers'
import style from './footer.module.scss'
import { motion } from 'framer-motion'






export const Component = (props: { className: any }) => {

    return <footer className={style.component}>
        <div className={`${style.container} ${props.className}`}>
            <Branding />
            <input type="text" id="email" placeholder="placeholder text"/>
        </div>
    </footer>
}



const Branding = () => {



    //  const _ref = React.useRef<any>()
    //  let isIntersecting = intersection(_ref)



    return <div>
        <motion.div
            //  animate={{
            //      opacity: isIntersecting ? 1 : 0
            //  }}
            //  className={style.branding}
        >
            Sterling Holt
        </motion.div>
        <div>SOCIALS</div>
    </div>
}