const initialState = {
  skillsList: [
    {
      name: 'melee',
      value: 1,
      description: 'melee descr',
    },
    {
      name: 'crafting',
      value: 1,
      description: 'crafting descr',
    },
    {
      name: 'tailoring',
      value: 1,
      description: 'tailoring descr',
    },
    {
      name: 'medicine',
      value: 1,
      description: 'medicine descr',
    },
  ],
  activeSkill: null,
};

export const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE-SKILL':
      const clone = JSON.parse(JSON.stringify(state));
      clone.skillsList.forEach((skill) => {
        if (skill.name === action.skill) {
          skill.value += action.value;
        }
      });
      return clone;
    case 'ACTIVATE-SKILL':
      return {
        ...state,
        activeSkill: action.skill,
      };
    default:
      return state;
  }
};
