import React from 'react';
import styles from '../description.module.css';

export const DescriptionSex = ({ setSex, sex }) => (
  <div className={styles.element}>
    {' '}
    {'Sex: '}
    <span onClick={() => setSex('male')} className={sex === 'male' ? styles.active : ''}>
      Male
    </span>
    <span>/</span>
    <span onClick={() => setSex('female')} className={sex === 'female' ? styles.active : ''}>
      Female
    </span>
  </div>
);
