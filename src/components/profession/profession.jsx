import React from 'react';
import styles from './profession.module.css';
import { ProfessionDescription } from './professionDescription/professionDescription';

export const Profession = ({
  activeProfession, changePoints, activateProfession, professionList,
}) => {
  const pickProfession = (profession) => {
    if (activeProfession === profession) {
      return;
    }
    if (activeProfession) {
      changePoints(activeProfession.cost);
    }
    activateProfession(profession);
    changePoints(-profession.cost);
  };

  return (
    <div className={styles.professionHolder}>
      <div className={styles.professionsList}>
        {professionList.map((profession, index) => {
          const professionName = profession.name;
          return (
            <span
              onClick={() => pickProfession(profession)}
              key={index}
              className={profession === activeProfession
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
