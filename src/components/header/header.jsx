import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

export const Header = ({ pointsLeft }) => (
  <div className={styles.header}>
    <nav className={styles.buttonsHolder}>
      <NavLink className={styles.button} to="/profession">Profession</NavLink>
      <NavLink className={styles.button} to="/stats">Stats</NavLink>
      <NavLink className={styles.button} to="/traits">Traits</NavLink>
      <NavLink className={styles.button} to="/skills">Skills</NavLink>
      <NavLink className={styles.button} to="/description">Description</NavLink>
    </nav>
    <div className={pointsLeft < 0 ? `${styles.error} ${styles.points}` : styles.points}>
      Points left:
      {' '}
      {pointsLeft}
    </div>
  </div>
);
