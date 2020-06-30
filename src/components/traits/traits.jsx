import React from 'react';
import styles from './traits.module.css'

export const Traits = (props) => {

  const traitPicked = (trait) => {
    return props.pickedTraits.some((pickedTrait) => {
      return Object.keys(pickedTrait)[0] === Object.keys(trait)[0];
    });
  };

  return (
    <div>
      <div className={styles.traitsHolder}>
        {
          props.goodTraitsList.map((item, index) => {
            let traitName = Object.keys(item)[0];
            return <span onClick={() => {
              props.activateTrait(item[traitName])
            }}
                         onDoubleClick={() => {
                           let cost = item[Object.keys(item)[0]].cost;
                           props.pickTrait(item);
                           traitPicked(item) ? props.changePoints(cost) : props.changePoints(-cost);
                         }}
                         key={index}
            className={traitPicked(item) ? `${styles.trait} ${styles.pickedTrait}` : styles.trait}>{traitName}</span>
          })
        }
      </div>
      <div className={styles.traitsHolder}>
        {
          props.badTraitsList.map((item, index) => {
            let traitName = Object.keys(item)[0];
            return <span onClick={() => {
              props.activateTrait(item[traitName])
            }}
                         onDoubleClick={() => {
                           props.pickTrait(item);
                           let cost = item[Object.keys(item)[0]].cost;
                           traitPicked(item) ? props.changePoints(cost) : props.changePoints(-cost);
                         }}
                         key={index}
            className={traitPicked(item) ? `${styles.trait} ${styles.pickedTrait}` : styles.trait}>{traitName}</span>
          })
        }
      </div>
      <div>{props.activeTrait ? `${props.activeTrait.description}, cost ${props.activeTrait.cost}` : ``}</div>
    </div>
  )
};