import React, { useRef } from 'react';

import './styles.module.scss'

import inputInterface from "./inputInterface"

const Input: React.FC<inputInterface> = (props: inputInterface) => {
    const { 
        classes,
        placeholder,
        ariaLabel,
        type,
        id,
        state,
        setState, } = props

    const inputRef = useRef<HTMLInputElement>(null)

    return (

        <input
            className={classes}
            type={type}
            id={id}
            ref={inputRef}
            placeholder={placeholder}
            readOnly
            aria-label={ariaLabel}
            onFocus={e => { e.target.readOnly = false }}
            onChange={e => { setState({ ...state, [e.target.name]: e.target.value }) }}
        />

    );
}

export default Input;