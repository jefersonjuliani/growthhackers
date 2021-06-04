import React from 'react';

interface inputInterface {
    children?: React.ReactNode
    placeholder:string
    ariaLabel:string
    type:string
    id:string
    state: any
    setState: any
    classes?: string,
}

export default inputInterface;