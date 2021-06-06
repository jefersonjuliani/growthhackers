import React from 'react';

import Styles from "./styles.module.scss"

import notificationIndicatorInterface from "./notificationIndicatorInterface"

const notificationIndicator: React.FC<notificationIndicatorInterface> = ({ number }) => {

    const listClasses = `${Styles.container} ${Styles.red}`

    const firstDigit = (n: number): number => {
        while (n >= 10)
            n /= 10;
        return Math.floor(n);
    }

    if (number > 99) {
        return (
            <div className={listClasses}>
                <span className={Styles.redText}>{firstDigit(number)}...</span>
            </div>
        );
    }

    if (number > 0) {
        return (
            <div className={listClasses}>
                <span className={Styles.redText}>{number}</span>
            </div>
        );
    }
    return (
        <></>
    )

}

export default notificationIndicator;