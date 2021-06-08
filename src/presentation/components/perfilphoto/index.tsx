import React from 'react';
import { Row, ProgressCircle } from "@/presentation/components"
import perfilPhotoInterface from "./perfilPhotoInterface"
import Pic from "@/data/img/profile.png"
import useWindowDimensions from "@/presentation/hooks/useWindowDimensions"
import Styles from "./styles.module.scss"

const Perfilphoto: React.FC<perfilPhotoInterface> = ({ isExpanded }) => {
    const { width } = useWindowDimensions();
    const show = isExpanded && width >= 768


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
                    show ? (
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

export default Perfilphoto;