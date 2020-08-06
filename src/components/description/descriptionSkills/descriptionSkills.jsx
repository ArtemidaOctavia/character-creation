import React from 'react';
import styles from '../description.module.css';

const getSkillsWithBonuses = (skills, professionBonus) => skills.map((skill) => {
  professionBonus.forEach((bonusSkill) => {
    if (skill.name === bonusSkill.name) {
      skill = { ...skill, value: skill.value + bonusSkill.value };
    }
  });
  return skill;
}).filter((skill) => skill.value !== 1);

const getSkills = (skills) => skills.filter((skill) => skill.value !== 1);

const renderSkills = (skills) => skills.map((skill, index) => {
  return (
    <div key={index}>
      {skill.name}
      {' '}
      {skill.value}
    </div>
  );
});

export const DescriptionSkills = ({ profession, skills }) => (
  <div className={styles.element}>
    <div>Skills:</div>
    {profession
      ? renderSkills(getSkillsWithBonuses(skills, profession.skillBonus))
      : renderSkills(getSkills(skills))}
  </div>
);
