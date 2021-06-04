import React from 'react';
import { Row, ProgressCircle } from "@/presentation/components"

import Pic from "@/data/img/profile.png"
import Icon from "@/presentation/assets"

import Styles from "./styles.module.scss"

const perfilphoto: React.FC = () => {
    return (
        <div className={Styles.container}>
            <Row spaceBetween>
                <Row center>
                    <div className={Styles.photoContainer}>
                        <div className={Styles.photoPosition}>
                            <img className={Styles.img} src={Pic} alt="Profile" />
                        </div>

                        <ProgressCircle percentage={70} />

                    </div>

                    <div className={Styles.textContainer}>
                        <h3 className={Styles.name}>Nick Dahl</h3>
                        <h4 className={Styles.subtitle}>Subtitle here</h4>
                    </div>
                </Row>
                <div className={Styles.expandContainer}>
                    <img className={Styles.expandImg} src={Icon.expandIcon} alt="expand or collapse menu" />
                </div>
            </Row>
        </div>
    );
}

export default perfilphoto;