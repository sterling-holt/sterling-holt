import React, { ReactElement, ReactFragment } from 'react'

export const Context = React.createContext('') as any;

export const Provider = ( props: { children: Element | ReactElement | Array<Element | ReactElement> }) => {
    return <Context.Provider
        value={{ 

        }}
    >
        { props.children }
    </Context.Provider>
}