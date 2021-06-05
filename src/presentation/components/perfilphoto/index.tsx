import React from 'react';
import { Row, ProgressCircle } from "@/presentation/components"
import perfilPhotoInterface from "./perfilPhotoInterface"
import Pic from "@/data/img/profile.png"

import Styles from "./styles.module.scss"

const perfilphoto: React.FC<perfilPhotoInterface> = ({ isExpanded }) => {
    return (
        <div className={Styles.container}>

            <Row center>
                <div className={Styles.photoContainer}>
                    <div className={Styles.photoPosition}>
                        <img className={Styles.img} src={Pic} alt="Profile" />
                    </div>

                    <ProgressCircle percentage={70} />

                </div>

                {
                    isExpanded ? (
                        <div className={Styles.textContainer}>
                            <h3 className={Styles.name}>Nick Dahl</h3>
                            <h4 className={Styles.subtitle}>Subtitle here</h4>
                        </div>
                    ) : null
                }

            </Row>


        </div>
    );
}

export default perfilphoto;