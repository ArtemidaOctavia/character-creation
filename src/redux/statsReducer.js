const initialState = {
  statsList: [
    {
      name: 'strength',
      value: 8,
      description: 'strength descr',
      getBonus() {
        return [
          `Base HP:${this.value * 10}`,
          `Max carrying weight: ${this.value * 6}kg`,
          `Blunt damage bonus: ${this.value}`,
        ];
      },
    },
    {
      name: 'dexterity',
      value: 8,
      description: 'dexterity descr',
      getBonus() {
        return [
          `Close combat precision modifier: ${(this.value * 0.25).toFixed(2)}`,
          `Throwing penalty for one point of target dodge skill: ${(45 - (this.value * 3.125)).toFixed(0)}`,
          `Ranged combat penalty: ${-16 + this.value}`,
        ];
      },
    },
    {
      name: 'intelligence',
      value: 8,
      description: 'intelligence descr',
      getBonus() {
        return [
          `Reading speed: ${(this.value * 12.5).toFixed(0)}%`,
          `Craft speed bonus: ${this.value}%`,
        ];
      },
    },
    {
      name: 'perception',
      value: 8,
      description: 'perception descr',
      getBonus() {
        return [
          `Aim penalty ${-(24 - (this.value * 1.3)).toFixed(0)}`,
        ];
      },
    },
  ],
  activeStat: null,
};

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE-STAT':
      const newList = state.statsList.map((stat) => {
        if (stat.name === action.stat) {
          stat.value += action.value;
        }
        return stat;
      });
      return {
        ...state,
        statsList: newList,
      };
    case 'ACTIVATE-STAT':
      return {
        ...state,
        activeStat: action.stat,
      };
    default:
      return state;
  }
};
