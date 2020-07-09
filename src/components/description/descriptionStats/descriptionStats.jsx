import React from 'react'
import styles from './../description.module.css'

export const DescriptionStats = (props) => {
  return (
    <div className={styles.thing}>
      <div>Stats:</div>
      {props.statsList.map((stat, index) => {
        let statName = Object.keys(stat)[0];
        return <div key={index}>
          <span>{statName} {stat[statName]}</span>
        </div>
      })}
    </div>
  )
};