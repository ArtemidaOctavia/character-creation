import React from 'react';
import styles from '../description.module.css';

export const DescriptionStats = ({ statsList }) => (
  <div className={styles.element}>
    <div>Stats:</div>
    {statsList.map((stat, index) => {
      return (
        <div key={index}>
          <span>
            {stat.name}
            {' '}
            {stat.value}
          </span>
        </div>
      );
    })}
  </div>
);
