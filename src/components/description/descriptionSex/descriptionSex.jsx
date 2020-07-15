import React from 'react';
import styles from '../description.module.css';

export const DescriptionSex = (props) => (
  <div className={styles.element}>
    {' '}
    {'Sex: '}
    <span onClick={() => props.setSex('male')} className={props.sex === 'male' ? styles.active : ''}>
      Male
    </span>
    <span>/</span>
    <span onClick={() => props.setSex('female')} className={props.sex === 'female' ? styles.active : ''}>
      Female
    </span>
  </div>
);
