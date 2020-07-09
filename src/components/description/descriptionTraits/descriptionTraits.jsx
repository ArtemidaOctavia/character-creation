import React from 'react'
import styles from './../description.module.css'

export const DescriptionTraits = (props) => {
  return (
    <div className={styles.thing}>
      <div>Traits:</div>
      {props.pickedTraits.map((trait, index) => {
        return <span className={styles.trait} key={index}>{Object.keys(trait)[0]}</span>
      })}
    </div>
  )
};