import React from 'react';
import { StatDescription } from './statDescription/statDescription';
import styles from './stats.module.css';

export const Stats = ({
  changeStat, changePoints, statsList, activeStat, activateStat,
}) => {
  const statMinValue = 4;
  const statMaxValue = 14;
  const statSoftCap = 12;

  const increaseStat = (stat) => {
    if (stat.value >= statMaxValue) {
      return;
    }
    if (stat.value < statSoftCap) {
      changeStat(stat.name, 1);
      changePoints(-1);
    } else {
      changeStat(stat.name, 1);
      changePoints(-2);
    }
  };

  const decreaseStat = (stat) => {
    if (stat.value <= statMinValue) {
      return;
    }
    if (stat.value <= statSoftCap) {
      changeStat(stat.name, -1);
      changePoints(1);
    } else {
      changeStat(stat.name, -1);
      changePoints(2);
    }
  };

  return (
    <div className={styles.statsHolder}>
      <div className={styles.statsList}>
        {
          statsList.map((stat, index) => {
            let style;
            if (activeStat) {
              style = stat.name === activeStat.name ? styles.active : '';
            }
            return (
              <div
                key={index}
                className={style}
              >
                <span
                  onClick={() => activateStat(stat)}
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
        {activeStat
        && <StatDescription stat={activeStat} />}
      </div>
    </div>
  );
};
