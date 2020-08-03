import React from 'react';
import styles from './traitsList.module.css';

export const TraitsList = ({
  pickedTraits, pickTrait, changePoints, traitsList, activateTrait, traitStyle,
}) => {
  const traitPicked = (trait) => pickedTraits.some((pickedTrait) => pickedTrait.name === trait.name);

  const calculatePoints = (trait) => {
    pickTrait(trait);
    traitPicked(trait) ? changePoints(trait.cost) : changePoints(-trait.cost);
  };

  return (
    <div className={styles.traitsHolder}>
      {
        traitsList.map((trait, index) => (
          <span
            key={index}
            onClick={() => calculatePoints(trait)}
            onMouseOver={() => activateTrait(trait)}
            onMouseOut={() => activateTrait(null)}
            className={traitPicked(trait) ? `${styles.trait} ${styles[`${traitStyle}`]}`
              : styles.trait}
          >
            {trait.name}
          </span>
        ))
      }
    </div>
  );
};
