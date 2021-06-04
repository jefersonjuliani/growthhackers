import React from 'react';

import Styles from './styles.module.scss';
import rowInterface from './rowInterface'

const row: React.FC<rowInterface> = ({ children, center, spaceBetween, start }) => {

    const listClasses = `${Styles.row} ${center ? Styles.center : ''} ${spaceBetween ? Styles.spaceBetween : ''} ${start ? Styles.start : ''}`

    return (
        <div className={listClasses} >
            {children}
        </div>
    );
}

export default row;