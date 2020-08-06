import React from 'react';
import styles from './skills.module.css';

const maxSkillValue = 10;
const minSkillValue = 1;

export const Skills = ({
  changeSkill, changePoints, activateSkill, profession, activeSkill, skillsList
}) => {
  const increaseSkill = (skill) => {
    if (skill.value !== maxSkillValue) {
      changeSkill(skill.name, 1);
      changePoints(-Math.ceil(skill.value / 2));
    }
  };

  const decreaseSkill = (skill) => {
    if (skill.value !== minSkillValue) {
      changeSkill(skill.name, -1);
      changePoints(Math.floor(skill.value / 2));
    }
  };

  const renderSkillsBonus = (skill, bonusSkills) => {
    const bonus = bonusSkills.filter((bonusSkill) => bonusSkill.name === skill.name);
    if (bonus[0]) {
      return (
        <span>
          {' '}
          (+
          {bonus[0].value}
          )
        </span>
      );
    }
  };

  return (
    <div>
      {
        skillsList.map((skill, index) => (
          <div key={index}>
            <span
              onMouseOver={() => activateSkill(skill)}
              onMouseOut={() => activateSkill(null)}
            >
              {skill.name}
              {' '}
              {skill.value}
              {profession && renderSkillsBonus(skill, profession.skillBonus)}
              <button
                type="button"
                className={styles.button}
                onClick={() => decreaseSkill(skill)}
              >
                -
              </button>
              <button
                type="button"
                className={styles.button}
                onClick={() => increaseSkill(skill)}
              >
                +
              </button>
            </span>
          </div>
        ))
      }
      <div>{activeSkill && activeSkill.description}</div>
    </div>
  );
};
