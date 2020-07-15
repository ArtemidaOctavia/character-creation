import React from 'react';
import styles from '../description.module.css';

const getSkillsWithBonuses = (skills, professionBonus) => skills.map((skill) => {
  const skillName = Object.keys(skill)[0];
  professionBonus.forEach((bonusItem) => {
    const bonusItemName = Object.keys(bonusItem)[0];
    if (skillName === bonusItemName) {
      skill = { ...skill, [skillName]: skill[skillName] + bonusItem[bonusItemName] };
    }
  });
  return skill;
}).filter((skill) => skill[Object.keys(skill)[0]] !== 1);

const getSkills = (skills) => skills.filter((skill) => skill[Object.keys(skill)[0]] !== 1);

const renderSkills = (skills) => skills.map((skill, index) => {
  const skillName = Object.keys(skill)[0];
  return (
    <div key={index}>
      {skillName}
      {' '}
      {skill[skillName]}
    </div>
  );
});

export const DescriptionSkills = (props) => (
  <div className={styles.element}>
    <div>Skills:</div>
    {props.profession
      ? renderSkills(getSkillsWithBonuses(props.skills, props.profession.skillBonus))
      : renderSkills(getSkills(props.skills))}
  </div>
);
