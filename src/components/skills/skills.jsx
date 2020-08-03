import React from 'react';
import styles from './skills.module.css';

export const Skills = (props) => {
  const increaseSkill = (skill) => {
    switch (skill.value) {
      case 1:
      case 2:
        props.changeSkill(skill.name, 1);
        props.changePoints(-1);
        break;
      case 3:
      case 4:
        props.changeSkill(skill.name, 1);
        props.changePoints(-2);
        break;
      case 5:
      case 6:
        props.changeSkill(skill.name, 1);
        props.changePoints(-3);
        break;
      case 7:
      case 8:
        props.changeSkill(skill.name, 1);
        props.changePoints(-4);
        break;
      case 9:
        props.changeSkill(skill.name, 1);
        props.changePoints(-5);
    }
  };

  const decreaseSkill = (skill) => {
    switch (skill.value) {
      case 2:
      case 3:
        props.changeSkill(skill.name, -1);
        props.changePoints(1);
        break;
      case 4:
      case 5:
        props.changeSkill(skill.name, -1);
        props.changePoints(2);
        break;
      case 6:
      case 7:
        props.changeSkill(skill.name, -1);
        props.changePoints(3);
        break;
      case 8:
      case 9:
        props.changeSkill(skill.name, -1);
        props.changePoints(4);
        break;
      case 10:
        props.changeSkill(skill.name, -1);
        props.changePoints(5);
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
        props.skillsList.map((skill, index) => {
          return (
            <div key={index}>
              <span
                onMouseOver={() => props.activateSkill(skill)}
                onMouseOut={() => props.activateSkill(null)}
              >
                {skill.name}
                {' '}
                {skill.value}
                {props.profession && renderSkillsBonus(skill, props.profession.skillBonus)}
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
          );
        })
      }
      <div>{props.activeSkill && props.activeSkill.description}</div>
    </div>
  );
};
