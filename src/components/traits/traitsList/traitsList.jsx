import React from 'react';
import styles from './traitsList.module.css'

export const TraitsList = (props) => {

  const traitPicked = (trait) => {
    return props.pickedTraits.some((pickedTrait) => {
      return Object.keys(pickedTrait)[0] === Object.keys(trait)[0];
    });
  };

  const changePoints = (trait) => {
    let cost = trait[Object.keys(trait)[0]].cost;
    props.pickTrait(trait);
    traitPicked(trait) ? props.changePoints(cost) : props.changePoints(-cost);
  };

  return (
    <div className={styles.traitsHolder}>
      {
        props.traitsList.map((trait, index) => {
          let traitName = Object.keys(trait)[0];
          return <span
            key={index}
            onClick={() => changePoints(trait)}
            onMouseOver={() => props.activateTrait(trait[traitName])}
            onMouseOut={() => props.activateTrait(null)}
            className={traitPicked(trait) ? `${styles.trait} ${styles.pickedTrait}` : styles.trait}>{traitName}</span>
        })
      }
    </div>
  )
};