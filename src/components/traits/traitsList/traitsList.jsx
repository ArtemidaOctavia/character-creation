import React from 'react';
import styles from './traitsList.module.css';

export const TraitsList = (props) => {
  const traitPicked = (trait) => props.pickedTraits.some((pickedTrait) => Object.keys(pickedTrait)[0] === Object.keys(trait)[0]);

  const changePoints = (trait) => {
    const { cost } = trait[Object.keys(trait)[0]];
    props.pickTrait(trait);
    traitPicked(trait) ? props.changePoints(cost) : props.changePoints(-cost);
  };

  return (
    <div className={styles.traitsHolder}>
      {
        props.traitsList.map((trait, index) => {
          const traitName = Object.keys(trait)[0];
          return (
            <span
              key={index}
              onClick={() => changePoints(trait)}
              onMouseOver={() => props.activateTrait(trait[traitName])}
              onMouseOut={() => props.activateTrait(null)}
              className={traitPicked(trait) ? `${styles.trait} ${styles[`${props.style}`]}`
                : styles.trait}
            >
              {traitName}
            </span>
          );
        })
      }
    </div>
  );
};
