const initialState = {
  statsList: [
    {
      strength: 8,
      description: 'strength descr',
    },
    {
      dexterity: 8,
      description: 'dexterity descr',
    },
    {
      intelligence: 8,
      description: 'intelligence descr',
    },
    {
      perception: 8,
      description: 'perception descr',
    },
  ],
  activeStat: null,
};

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE-STAT':
      const clone = JSON.parse(JSON.stringify(state));
      clone.statsList.forEach((stat) => {
        const [statName] = Object.keys(stat);
        if (statName === action.stat) {
          stat[statName] += action.value;
        }
      });
      return clone;
    case 'ACTIVATE-STAT':
      return {
        ...state,
        activeStat: action.stat,
      };
    default:
      return state;
  }
};
