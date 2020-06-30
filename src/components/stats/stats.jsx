import React from 'react';
import styles from './stats.module.css'

export const Stats = (props) => {

  const increase = (stat) => {
    props.changePoints(-1);
    switch (stat) {
      case 'str':
        props.changeStrength(1);
        break;
      case 'dex':
        props.changeDexterity(1);
        break;
      case 'int':
        props.changeIntelligence(1);
        break;
      case 'per':
        props.changePerception(1);
        break
    }
  };

  const decease = (stat) => {
    if(props.strength <= 1 || props.dexterity <= 1 ||
      props.perception <= 1 || props.intelligence <=1) {
      return
    }
    props.changePoints(1);
    switch (stat) {
      case 'str':
        props.changeStrength(-1);
        break;
      case 'dex':
        props.changeDexterity(-1);
        break;
      case 'int':
        props.changeIntelligence(-1);
        break;
      case 'per':
        props.changePerception(-1);
        break
    }
  };

  return (
    <div>
      <div className={styles.statList}>
        <div><span className={styles.stat}>Strength: {props.strength}</span>
          <button onClick={() => decease('str')} className={styles.button}>-</button>
          <button onClick={() => increase('str')} className={styles.button}>+</button>
        </div>
        <div><span className={styles.stat}>Dexterity: {props.dexterity}</span>
          <button onClick={() => decease('dex')} className={styles.button}>-</button>
          <button onClick={() => increase('dex')} className={styles.button}>+</button>
        </div>
        <div><span className={styles.stat}>Intelligence: {props.intelligence}</span>
          <button onClick={() => decease('int')} className={styles.button}>-</button>
          <button onClick={() => increase('int')} className={styles.button}>+</button>
        </div>
        <div><span className={styles.stat}>Perception: {props.perception}</span>
          <button onClick={() => decease('per')} className={styles.button}>-</button>
          <button onClick={() => increase('per')} className={styles.button}>+</button>
        </div>
      </div>
      <div className={styles.description}>

      </div>
    </div>
  )
};