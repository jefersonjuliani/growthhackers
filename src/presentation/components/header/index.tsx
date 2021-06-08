import React from 'react';

import { Row, GroupPhoto } from "@/presentation/components"
import Styles from "./styles.module.scss"

import Icon from "@/presentation/assets/index"

const header: React.FC = () => {
  return (
      <Row center>
        <GroupPhoto />
        <span className={Styles.teamNumber}>+ 125 others</span>
        <img src={Icon.dotsIcon} alt="" width="18" />
      </Row>

  );
}

export default header;