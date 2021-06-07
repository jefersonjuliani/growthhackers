import React, {useContext} from 'react';

import Styles from './styles.module.scss';
import containerInterface from './containerInterface'

import Context from "@/presentation/context/"

const Container: React.FC<containerInterface> = ({ children }) => {

    const { state } = useContext(Context)

    const listClasses = `${Styles.container} ${state.expand === "false" ? Styles.cal100 :  Styles.cal220} `

    return (
        <div className={listClasses}>
            {children}
        </div>
    );
}

export default Container;