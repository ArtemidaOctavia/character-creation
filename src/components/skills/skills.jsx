import React from 'react';
import styles from './skills.module.css';

export const Skills = (props) => {
  const increaseSkill = (skill, skillName) => {
    switch (skill[skillName]) {
      case 1:
      case 2:
        props.changeSkill(skillName, 1);
        props.changePoints(-1);
        break;
      case 3:
      case 4:
        props.changeSkill(skillName, 1);
        props.changePoints(-2);
        break;
      case 5:
      case 6:
        props.changeSkill(skillName, 1);
        props.changePoints(-3);
        break;
      case 7:
      case 8:
        props.changeSkill(skillName, 1);
        props.changePoints(-4);
        break;
      case 9:
        props.changeSkill(skillName, 1);
        props.changePoints(-5);
    }
  };

  const decreaseSkill = (skill, skillName) => {
    switch (skill[skillName]) {
      case 2:
      case 3:
        props.changeSkill(skillName, -1);
        props.changePoints(1);
        break;
      case 4:
      case 5:
        props.changeSkill(skillName, -1);
        props.changePoints(2);
        break;
      case 6:
      case 7:
        props.changeSkill(skillName, -1);
        props.changePoints(3);
        break;
      case 8:
      case 9:
        props.changeSkill(skillName, -1);
        props.changePoints(4);
        break;
      case 10:
        props.changeSkill(skillName, -1);
        props.changePoints(5);
    }
  };

  const renderSkillsBonus = (skill, bonusSkills) => {
    const bonus = bonusSkills.filter((bonusSkill) => Object.keys(bonusSkill)[0] === Object.keys(skill)[0]);
    if (bonus[0]) {
      const bonusSkillName = Object.keys(bonus[0])[0];
      return (
        <span>
          {' '}
          (+
          {bonus[0][bonusSkillName]}
          )
        </span>
      );
    }
  };

  return (
    <div>
      {
        props.skillsList.map((skill, index) => {
          const skillName = Object.keys(skill)[0];
          return (
            <div key={index}>
              <span
                onMouseOver={() => props.activateSkill(skill)}
                onMouseOut={() => props.activateSkill(null)}
              >
                {skillName}
                {' '}
                {skill[skillName]}
                {props.profession && renderSkillsBonus(skill, props.profession.skillBonus)}
                <button
                  className={styles.button}
                  onClick={() => decreaseSkill(skill, skillName)}
                >
                  -
                </button>
                <button
                  className={styles.button}
                  onClick={() => increaseSkill(skill, skillName)}
                >
                  +
                </button>
              </span>
            </div>
          );
        })
      }
      <div>{props.activeSkill && props.activeSkill.description}</div>
    </div>
  );
};
