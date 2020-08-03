import React from 'react';
import styles from './profession.module.css';
import { ProfessionDescription } from './professionDescription/professionDescription';

export const Profession = ({
  activeProfession, changePoints, activateProfession, professionList,
}) => {
  const pickProfession = (profession, professionName) => {
    if (activeProfession === profession[professionName]) {
      return;
    }
    if (activeProfession) {
      changePoints(activeProfession.cost);
    }
    activateProfession(profession[professionName]);
    changePoints(-profession[professionName].cost);
  };

  return (
    <div className={styles.professionHolder}>
      <div className={styles.professionsList}>
        {professionList.map((profession, index) => {
          const professionName = Object.keys(profession)[0];
          return (
            <span
              onClick={() => pickProfession(profession, professionName)}
              key={index}
              className={profession[professionName] === activeProfession
                ? `${styles.profession} ${styles.active}`
                : styles.profession}
            >
              {professionName}
            </span>
          );
        })}
      </div>
      <div className={styles.professionDescription}>
        {activeProfession && <ProfessionDescription profession={activeProfession} />}
      </div>
    </div>
  );
};
