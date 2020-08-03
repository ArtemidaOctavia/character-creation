import React from 'react';
import styles from './traitsList.module.css';

export const TraitsList = (props) => {
  const traitPicked = (trait) => props.pickedTraits.some((pickedTrait) => pickedTrait.name === trait.name);

  const changePoints = (trait) => {
    props.pickTrait(trait);
    traitPicked(trait) ? props.changePoints(trait.cost) : props.changePoints(-trait.cost);
  };

  return (
    <div className={styles.traitsHolder}>
      {
        props.traitsList.map((trait, index) => {
          return (
            <span
              key={index}
              onClick={() => changePoints(trait)}
              onMouseOver={() => props.activateTrait(trait)}
              onMouseOut={() => props.activateTrait(null)}
              className={traitPicked(trait) ? `${styles.trait} ${styles[`${props.style}`]}`
                : styles.trait}
            >
              {trait.name}
            </span>
          );
        })
      }
    </div>
  );
};
