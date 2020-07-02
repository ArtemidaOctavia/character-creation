let initialState = {
  skillsList: [
    {
      melee: 1,
      description: `melee descr`
    },
    {
      crafting: 1,
      description: `crafting descr`
    },
    {
      tailoring: 1,
      description: `tailoring descr`
    },
    {
      medicine: 1,
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