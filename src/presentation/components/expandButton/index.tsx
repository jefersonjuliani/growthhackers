import React from 'react';

import Styles from "./styles.module.scss"
import Icon from "@/presentation/assets"

const expandButton: React.FC = () => {
    return (
        <div className={Styles.expandContainer}>
            <img className={Styles.expandImg} src={Icon.expandIcon} alt="expand or collapse menu" />
        </div>
    );
}

export default expandButton;