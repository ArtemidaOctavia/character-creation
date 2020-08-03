import React from 'react';
import { StatDescription } from './statDescription/statDescription';
import styles from './stats.module.css';

export const Stats = (props) => {
  const skillMinValue = 4;
  const skillMaxValue = 14;
  const skillSoftCap = 12;

  const increaseStat = (stat) => {
    if (stat.value >= skillMaxValue) {
      return;
    }
    if (stat.value < skillSoftCap) {
      props.changeStat(stat.name, 1);
      props.changePoints(-1);
    } else {
      props.changeStat(stat.name, 1);
      props.changePoints(-2);
    }
  };

  const decreaseStat = (stat) => {
    if (stat.value <= skillMinValue) {
      return;
    }
    if (stat.value <= skillSoftCap) {
      props.changeStat(stat.name, -1);
      props.changePoints(1);
    } else {
      props.changeStat(stat.name, -1);
      props.changePoints(2);
    }
  };

  return (
    <div className={styles.statsHolder}>
      <div className={styles.statsList}>
        {
          props.statsList.map((stat, index) => {
            let style;
            if (props.activeStat) {
              style = stat.name === props.activeStat.name ? styles.active : '';
            }
            return (
              <div
                key={index}
                className={style}
              >
                <span
                  onClick={() => props.activateStat(stat)}
                >
                  {stat.name}
                  {' '}
                  {stat.value}
                  <button
                    className={styles.button}
                    onClick={() => decreaseStat(stat)}
                  >
                    -
                  </button>
                  <button
                    className={styles.button}
                    onClick={() => increaseStat(stat)}
                  >
                    +
                  </button>
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
