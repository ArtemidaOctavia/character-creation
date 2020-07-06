import React from 'react';
import styles from './professionDescription.module.css'

// Ninja: {
//   cost: 3,
//   description: `A shadow warrior from ancient Japan`,
//   skillBonus: [{melee: 2}],
//   wield: `katana`,
//   appearence: [`tabi`, `kimono`, `mask`],
//   inventory: [`smoke grenades`, `kunai`, `sushi`]
// }

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
      <div className={styles.thing}>{props.profession.description}</div>
      <div className={styles.thing}>
        <div>Profession skills:</div>
        {renderSkillsBonus(props.profession.skillBonus)}</div>
      <div className={styles.thing}>
        <div>Wield:</div>
        {props.profession.wield ? props.profession.wield : `none`}</div>
      <div className={styles.thing}>
        <div>Appearence:</div>
        {renderItems(props.profession.appearence)}
      </div>
      <div className={styles.thing}>
        <div>Inventory:</div>
        {renderItems(props.profession.inventory)}
      </div>
    </div>
  )
};