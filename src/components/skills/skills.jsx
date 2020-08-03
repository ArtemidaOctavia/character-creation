import React from 'react';
import styles from './skills.module.css';

export const Skills = ({
  changeSkill, changePoints, activateSkill, profession, activeSkill, skillsList
}) => {
  const increaseSkill = (skill) => {
    switch (skill.value) {
      case 1:
      case 2:
        changeSkill(skill.name, 1);
        changePoints(-1);
        break;
      case 3:
      case 4:
        changeSkill(skill.name, 1);
        changePoints(-2);
        break;
      case 5:
      case 6:
        changeSkill(skill.name, 1);
        changePoints(-3);
        break;
      case 7:
      case 8:
        changeSkill(skill.name, 1);
        changePoints(-4);
        break;
      case 9:
        changeSkill(skill.name, 1);
        changePoints(-5);
    }
  };

  const decreaseSkill = (skill) => {
    switch (skill.value) {
      case 2:
      case 3:
        changeSkill(skill.name, -1);
        changePoints(1);
        break;
      case 4:
      case 5:
        changeSkill(skill.name, -1);
        changePoints(2);
        break;
      case 6:
      case 7:
        changeSkill(skill.name, -1);
        changePoints(3);
        break;
      case 8:
      case 9:
        changeSkill(skill.name, -1);
        changePoints(4);
        break;
      case 10:
        changeSkill(skill.name, -1);
        changePoints(5);
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
