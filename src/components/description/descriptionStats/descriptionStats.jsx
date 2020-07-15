import React from 'react';
import styles from '../description.module.css';

export const DescriptionStats = (props) => (
  <div className={styles.element}>
    <div>Stats:</div>
    {props.statsList.map((stat, index) => {
      const statName = Object.keys(stat)[0];
      return (
        <div key={index}>
          <span>
            {statName}
            {' '}
            {stat[statName]}
          </span>
        </div>
      );
    })}
  </div>
);
