let initialState = {
  skillsList: [
    {melee: 0},
    {crafting: 0},
    {tailoring: 0},
    {medicine: 0},
  ]
};

export const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE-SKILL':
      let clone = JSON.parse(JSON.stringify(state));
      clone.skillsList.forEach((skill) => {
        let skillName = Object.keys(skill)[0];
        if (skillName === action.skill) {
          skill[skillName] += action.value
        }
      });
      return clone;
    default:
      return state;
  }
};