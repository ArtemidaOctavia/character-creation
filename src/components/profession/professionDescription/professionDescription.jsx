import React from 'react';
import styles from './professionDescription.module.css'

export const ProfessionDescription = (props) => {

  let renderSkillsBonus = (skills) => skills.map((skill, index) => {
    let skillName = [Object.keys(skill)];
    let bonusValue = skill[Object.keys(skill)];
    return <div key={index}>{skillName}: {bonusValue}</div>
  });

  let renderItems = (items) => items.map((item, index) => {
    return <div key={index}>{item}</div>
  });

  return (
    <div>
      <div className={styles.element}>{props.profession.description}</div>

      <div className={styles.element}>
        <div>Profession skills:</div>
        {props.profession.skillBonus ? renderSkillsBonus(props.profession.skillBonus) : 'none'}
      </div>

      <div className={styles.element}>
        <div>Wield:</div>
        {props.profession.wield ? props.profession.wield : `none`}
      </div>

      <div className={styles.element}>
        <div>Appearence:</div>
        {props.profession.appearence ? renderItems(props.profession.appearence) : `none`}
      </div>

      <div className={styles.element}>
        <div>Inventory:</div>
        {props.profession.inventory ? renderItems(props.profession.inventory) : `none`}
      </div>
    </div>
  )
};