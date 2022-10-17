import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {

    return <Html lang="en">
        <Head>

            <style>{`
                root: {
                    background: blue;
                }
            `}</style>
        </Head>
        
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
}