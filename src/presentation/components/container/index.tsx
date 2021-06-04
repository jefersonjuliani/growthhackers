import React from 'react';

import Styles from './styles.module.scss';
import containerInterface from './containerInterface'

const container: React.FC<containerInterface> = ({ children }) => {
    return (
        <div className={Styles.container}>
            {children}
        </div>
    );
}

export default container;