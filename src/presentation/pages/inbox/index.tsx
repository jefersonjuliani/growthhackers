import React from 'react';

import { Row } from "@/presentation/components"

import Icon from "@/presentation/assets"
import Styles from "./styles.module.scss"

const Inbox: React.FC = () => {
  return (
    <div>
      <Row center>
        <img className={Styles.img} src={Icon.inboxIcon} alt="ideas icon" />
        <h1>Inbox</h1>
      </Row>

    </div>

  );
}

export default Inbox;