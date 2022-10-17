import React from 'react'
import { NextPage } from "next/types"
import { GetStaticProps } from 'next'
import { Octokit } from 'octokit'
import { Intro } from 'components/intro'
import { Avatar } from 'components/avatar'

import _intro from '../style/intro.module.scss'
import _projects from '../style/projects.module.scss'


export default function Home<NextPage>({ data, repos }: any ) {
    const [activeProject, setActiveProject] = React.useState<any>()
    

    console.log(repos)


    return <>
        <section className={_intro.intro}>
            <div className={_intro.text}>
                <p>{"Hey! I'm"}</p>
                <h1>{data.name}</h1>
                <p className={_intro.bio}>{data.bio}</p>

                <button onClick={() => {
                    window.open('/resume.pdf')
                }}>Resumé</button>
            </div>
        </section>

    
    </>
}


//  ------------------------

export const getStaticProps: GetStaticProps = async (context) => {


    async function _git(url: string) {
        
        const res = await fetch(url, {
            method: "get",
            mode: "cors",
            headers: { 
                authorization: `token ${process.env.GITHUB_TOKEN}`
            }
        })

        return res.json()
    }





    const overview = await _git('https://api.github.com/users/sterling-holt')
    const repos = await _git('https://api.github.com/users/sterling-holt/repos')

    return {
        props: { 
            data: overview,
            repos: repos
        }
    }
}







/*



    <section className={_projects.projects}>
            <h1 id="projects">Projects</h1>

            <div className={_projects.track}>
                {repos.map((i: any) => {


                    if (i.name !== data.login) {
                        return <div key={i.name}
                            className={`${_projects.item} ${activeProject === i.name ? _projects.active : null }`}
                            onClick={() => {
                                setActiveProject(activeProject === i.name ? null : i.name)
                            }}
                        >
                            {i.name}
                            <span><a href={i.html_url}>Link</a></span>
                        </div>
                    }
                })}
            </div>
        </section>



*/