import React from 'react';
import styles from '../description.module.css';

export const DescriptionProfession = (props) => (
  <div className={styles.element}>
    <div>Profession:</div>
    {props.profession && props.profession.name}
  </div>
);
