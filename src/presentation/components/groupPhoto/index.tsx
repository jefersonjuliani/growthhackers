import React from 'react';

import pic1 from "@/data/img/1.png"
import pic2 from "@/data/img/2.png"
import pic3 from "@/data/img/3.png"

import Styles from "./styles.module.scss"
import { Row, NoPhoto } from '@/presentation/components'

const groupPhoto: React.FC = () => {


  return (
    <Row>
      <img className={Styles.img} src={pic1} alt="team member" />
      <img className={Styles.img} src={pic2} alt="team member" />
      <img className={Styles.img} src={pic3} alt="team member" />

      <NoPhoto name="Anna" red/>
      <NoPhoto name="Paul" yellow/>
      <NoPhoto name="Sussane" blue/>
    </Row>
  );
}

export default groupPhoto;