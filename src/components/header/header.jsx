import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./header.module.css"

export const Header = (props) => {
  return (
    <div className={styles.header}>
      <nav>
        <NavLink className={styles.button} to={`/profession`}>Profession</NavLink>
        <NavLink className={styles.button} to={`/stats`}>Stats</NavLink>
        <NavLink className={styles.button} to={`/traits`}>Traits</NavLink>
        <NavLink className={styles.button} to={`/skills`}>Skills</NavLink>
        <NavLink className={styles.button} to={`/description`}>Description</NavLink>
      </nav>
      <div className={props.pointsLeft < 0 ? styles.error : ``}>Points left: {props.pointsLeft}</div>
    </div>
  )
};