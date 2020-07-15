import React from 'react';
import styles from './profession.module.css';
import { ProfessionDescription } from './professionDescription/professionDescription';

export const Profession = (props) => {
  const pickProfession = (profession, professionName) => {
    if (props.activeProfession === profession[professionName]) {
      return;
    }
    if (props.activeProfession) {
      props.changePoints(props.activeProfession.cost);
    }
    props.activateProfession(profession[professionName]);
    props.changePoints(-profession[professionName].cost);
  };

  return (
    <div className={styles.professionHolder}>
      <div className={styles.professionsList}>
        {props.professionList.map((profession, index) => {
          const professionName = Object.keys(profession)[0];
          return (
            <span
              onClick={() => pickProfession(profession, professionName)}
              key={index}
              className={profession[professionName] === props.activeProfession
                ? `${styles.profession} ${styles.active}`
                : styles.profession}
            >
              {professionName}
            </span>
          );
        })}
      </div>
      <div className={styles.professionDescription}>
        {props.activeProfession && <ProfessionDescription profession={props.activeProfession} />}
      </div>
    </div>
  );
};
