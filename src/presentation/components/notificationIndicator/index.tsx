import React from 'react';

import Styles from "./styles.module.scss"

import notificationIndicatorInterface from "./notificationIndicatorInterface"

const notificationIndicator: React.FC<notificationIndicatorInterface> = ({ number }) => {

    const listClasses = `${Styles.container} ${Styles.red}`

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