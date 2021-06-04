import React from 'react';
import buttonInterface from "./buttonInterface"
import Styles from "./styles.module.scss"

const button: React.FC<buttonInterface> = ({title, icon}) => {
  return (
    <button className={Styles.button}>{title}</button>
  );
}

export default button;