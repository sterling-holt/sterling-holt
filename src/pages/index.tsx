import React from 'react'
import { NextPage } from "next/types"
import { GetStaticProps } from 'next'
import { Avatar } from 'components/avatar'
import { Octokit } from 'octokit'
import { Section } from 'components/organisms/hero'


export default function Home<NextPage>( props: { testmessage: any } ) {

    //  let test = async () => {
    //      await fetch('https://api.github.com/users/sterling-holt')
    //      .then((res) => res.json())
    //      .then((res) => console.log(res))
    //  }
    //  console.log('meow: ', props.testmessage)
    React.useEffect(() => {}, [])

    //  --------------------
    



    return <>
        <Section 
            style={(`
                height:             100px,
                background:         blue,
                color:              pink,
            `)}
        >   


            <p>Hey! I'm</p>
            <h1>Sterling</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum vel metus vitae facilisis. In ac diam massa. Nullam fringilla,</p>
            <Avatar />
        </Section>



        <section>
            My Projects go here!
        </section>
        <div>and here</div>
    </>
}


//  ------------------------

export const getStaticProps: GetStaticProps = async (context) => {
    //await fetch('https://api.github.com/users/sterling-holt')
    //.then((res) => res.json())


    
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    })



    //  let data = await fetch('https://fakestoreapi.com/products/1', {
    //      headers: { Authentication: };
    //  })
    //      .then(res => res.json())
    //  --------------------

    return { props: { testmessage: 'poop' }}
}