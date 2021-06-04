import React from 'react';

import { Row } from "@/presentation/components"

import Icon from "@/presentation/assets"
import Styles from "./styles.module.scss"


const Tasks: React.FC = () => {
  return (

    <Row center>
      <img className={Styles.img} src={Icon.tasksIcon} alt="ideas icon" />
      <h1>Tasks</h1>
    </Row>

  );
}

export default Tasks;