import React from 'react';
import { StatDescription } from './statDescription/statDescription';
import styles from './stats.module.css';

export const Stats = (props) => {
  const increaseStat = (stat, statName) => {
    if (stat[statName] >= 14) {
      return;
    }
    if (stat[statName] < 12) {
      props.changeStat(statName, 1);
      props.changePoints(-1);
    } else {
      props.changeStat(statName, 1);
      props.changePoints(-2);
    }
  };

  const decreaseStat = (stat, statName) => {
    if (stat[statName] <= 4) {
      return;
    }
    if (stat[statName] <= 12) {
      props.changeStat(statName, -1);
      props.changePoints(1);
    } else {
      props.changeStat(statName, -1);
      props.changePoints(2);
    }
  };

  return (
    <div className={styles.statsHolder}>
      <div className={styles.statsList}>
        {
          props.statsList.map((stat, index) => {
            const statName = Object.keys(stat)[0];
            let style;
            if (props.activeStat) {
              style = statName === Object.keys(props.activeStat)[0] ? styles.active : '';
            }
            return (
              <div
                key={index}
                className={style}
              >
                <span
                  onClick={() => props.activateStat(stat)}
                >
                  {statName}
                  {' '}
                  {stat[statName]}
                  <button className={styles.button}
                          onClick={() => decreaseStat(stat, statName)}>-</button>
                  <button className={styles.button}
                          onClick={() => increaseStat(stat, statName)}>+</button>
                </span>
              </div>
            );
          })
        }
      </div>
      <div className={styles.description}>
        {props.activeStat
        && <StatDescription statsList={props.statsList} stat={props.activeStat} />}
      </div>
    </div>
  );
};
