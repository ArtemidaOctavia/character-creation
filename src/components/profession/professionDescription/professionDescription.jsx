import React from 'react';
import styles from './professionDescription.module.css';

export const ProfessionDescription = ({ profession }) => {
  const renderSkillsBonus = (skills) => skills.map((skill, index) => {
    return (
      <div key={index}>
        {skill.name}
        :
        {' '}
        {skill.value}
      </div>
    );
  });

  const renderItems = (items) => items.map((item, index) => <div key={index}>{item}</div>);

  return (
    <div>
      <div className={styles.element}>{profession.description}</div>

      <div className={styles.element}>
        <div className={styles.blue}>Profession skills:</div>
        {profession.skillBonus ? renderSkillsBonus(profession.skillBonus) : 'none'}
      </div>

      <div className={styles.equipment}>
        <div className={`${styles.element} ${styles.blue}`}>Equipment:</div>
        <div className={styles.element}>
          <span className={styles.cyan}> Wield:</span>
          {profession.wield ? ` ${profession.wield}` : ' none'}
        </div>

        <div className={styles.element}>
          <div className={styles.cyan}>Appearence:</div>
          {profession.appearence ? renderItems(profession.appearence) : 'none'}
        </div>

        <div className={styles.element}>
          <div className={styles.cyan}>Inventory:</div>
          {profession.inventory ? renderItems(profession.inventory) : 'none'}
        </div>
      </div>
    </div>
  );
};
