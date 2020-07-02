import React from 'react';

export const Skills = (props) => {
  return (
    <div>
      {
        props.skillsList.map((skill, index) => {
          let skillName = Object.keys(skill)[0];
          return <div key={index}><span
            onMouseOver={() => {
              props.activateSkill(skill)
            }}
            onMouseOut={() => {
              props.activateSkill({})
            }
            }>
            {skillName} {skill[skillName]}
            <button onClick={() => {
              if (skill[skillName] >= 1) {
                props.changeSkill(skillName, -1);
                props.changePoints(1)
              }
            }}>-</button>
            <button onClick={() => {
              props.changeSkill(skillName, 1);
              props.changePoints(-1)
            }}>+</button>
          </span>
          </div>
        })
      }
      <div>{props.activeSkill && props.activeSkill.description}</div>
    </div>
  )
};