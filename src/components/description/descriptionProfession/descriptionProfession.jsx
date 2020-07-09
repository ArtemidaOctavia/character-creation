import React from 'react'
import styles from './../description.module.css'

export const DescriptionProfession = (props) => {
  return (
    <div className={styles.thing}>
      Profession: {props.profession && props.profession.name}
    </div>
  )
};