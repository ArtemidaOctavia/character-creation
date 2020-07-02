let initialState = {
  skillsList: [
    {
      melee: 0,
      description: `melee descr`
    },
    {
      crafting: 0,
      description: `crafting descr`
    },
    {
      tailoring: 0,
      description: `tailoring descr`
    },
    {
      medicine: 0,
      description: `medicine descr`
    },
  ],
  activeSkill: null
};

export const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE-SKILL':
      let clone = JSON.parse(JSON.stringify(state));
      clone.skillsList.forEach((skill) => {
        let [skillName] = Object.keys(skill);
        if (skillName === action.skill) {
          skill[skillName] += action.value
        }
      });
      return clone;
    case `ACTIVATE-SKILL`:
      return {
        ...state,
        activeSkill: action.skill
      };
    default:
      return state;
  }
};