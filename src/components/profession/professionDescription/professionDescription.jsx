import React from 'react';
import styles from './professionDescription.module.css';

export const ProfessionDescription = (props) => {
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
      <div className={styles.element}>{props.profession.description}</div>

      <div className={styles.element}>
        <div className={styles.blue}>Profession skills:</div>
        {props.profession.skillBonus ? renderSkillsBonus(props.profession.skillBonus) : 'none'}
      </div>

      <div className={styles.equipment}>
        <div className={`${styles.element} ${styles.blue}`}>Equipment:</div>
        <div className={styles.element}>
          <span className={styles.cyan}> Wield:</span>
          {props.profession.wield ? ` ${props.profession.wield}` : ' none'}
        </div>

        <div className={styles.element}>
          <div className={styles.cyan}>Appearence:</div>
          {props.profession.appearence ? renderItems(props.profession.appearence) : 'none'}
        </div>

        <div className={styles.element}>
          <div className={styles.cyan}>Inventory:</div>
          {props.profession.inventory ? renderItems(props.profession.inventory) : 'none'}
        </div>
      </div>
    </div>
  );
};
