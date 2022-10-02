import React from 'react'
import { NextPage } from "next/types"
import { observer } from 'lib/fn/observers'
import { motion } from 'framer-motion'


export default function Home<NextPage>( { data }: any ) {

    //  let test = async () => {
    //      await fetch('https://api.github.com/users/sterling-holt')
    //      .then((res) => res.json())
    //      .then((res) => console.log(res))
    //  }



    
    //  --------------------
    return <>
        <section style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Avatar />
        </section>
    </>
}


//  ------------------------
async function getStaticProps() {

    let data = await fetch('https://api.github.com/users/sterling-holt')
        .then((res) => res.json())
    //  --------------------

    return { props: { data }}
}





const Avatar = () => {
    const _ref = React.useRef<any>()
    let isIntersecting = observer.intersection(_ref)


    return <div 
        ref={_ref} 
        style={{ '--avatar-image': 'https://avatars.githubusercontent.com/u/2521652?v=4' }}>
    </div>
}