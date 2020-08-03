import React from 'react';
import styles from '../description.module.css';

export const DescriptionProfession = ({ profession }) => (
  <div className={styles.element}>
    <div>Profession:</div>
    {profession && profession.name}
  </div>
);
