import React from 'react';
import noPhotoInterface from "./noPhotoInterface"
import Styles from "./styles.module.scss"

const noPhoto: React.FC<noPhotoInterface> = ({name, red, yellow, blue}) => {

  const listClasses = `${Styles.container} ${red ? Styles.red : ''} ${yellow ? Styles.yellow : ''} ${blue ? Styles.blue : ''}`
  const listClassesText = ` ${red ? Styles.redText : ''} ${yellow ? Styles.yellowText : ''} ${blue ? Styles.blueText : ''}`

  return (
      <div className={listClasses}>
          <span className={listClassesText}>{name.charAt(0)}</span>
      </div>
  );
}

export default noPhoto;