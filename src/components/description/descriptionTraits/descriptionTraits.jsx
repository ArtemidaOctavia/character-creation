import React from 'react';
import styles from '../description.module.css';

export const DescriptionTraits = ({ pickedTraits }) => (
  <div className={styles.element}>
    <div>Traits:</div>
    {pickedTraits.map((trait, index) => <div className={styles.trait} key={index}>{trait.name}</div>)}
  </div>
);
