import React from 'react'
import { NextPage } from "next/types"

export default function Home<NextPage>() {

    return <main>
        Hello?? words go here
    </main>
}

async function getStaticProps() {

    const res = await fetch('')
    const posts = await res.json()

    //  ----

    return { props: { posts }}
}