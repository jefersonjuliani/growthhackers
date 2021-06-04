import React from 'react';

import {Row, GroupPhoto} from "@/presentation/components"
import Styles from "./styles.module.scss"

const header: React.FC = () => {
  return (
    <Row center>
      <GroupPhoto/>
        <span className={Styles.teamNumber}>+ 125 others</span>
    </Row>
  );
}

export default header;