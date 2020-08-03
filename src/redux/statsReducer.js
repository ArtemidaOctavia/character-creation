const initialState = {
  statsList: [
    {
      name: 'strength',
      value: 8,
      description: 'strength descr',
    },
    {
      name: 'dexterity',
      value: 8,
      description: 'dexterity descr',
    },
    {
      name: 'intelligence',
      value: 8,
      description: 'intelligence descr',
    },
    {
      name: 'perception',
      value: 8,
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
        const statName = stat.name;
        if (statName === action.stat) {
          stat.value += action.value;
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
