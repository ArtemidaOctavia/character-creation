import React from 'react';

export const Skills = (props) => {
  return (
    <div>
      <span onClick={() => {
        props.changeSkill('crafting', 1);
      }}>
        здарова</span>
    </div>
  )
};