import React from 'react';
import styles from './traitsList.module.css'

export const TraitsList = (props) => {

  const traitPicked = (trait) => {
    return props.pickedTraits.some((pickedTrait) => {
      return Object.keys(pickedTrait)[0] === Object.keys(trait)[0];
    });
  };

  return (
      <div className={styles.traitsHolder}>
        {
          props.traitsList.map((item, index) => {
            let traitName = Object.keys(item)[0];
            return <span
              key={index}
              onClick={() => {
                let cost = item[Object.keys(item)[0]].cost;
                props.pickTrait(item);
                traitPicked(item) ? props.changePoints(cost) : props.changePoints(-cost);
              }}
              onMouseOver={() => {
                props.activateTrait(item[traitName])
              }}
              onMouseOut={() => {
                props.activateTrait(null)
              }}
              className={traitPicked(item) ? `${styles.trait} ${styles.pickedTrait}` : styles.trait}>{traitName}</span>
          })
        }
      </div>
  )
};