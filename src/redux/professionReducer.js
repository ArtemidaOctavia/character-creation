let initialState = {
  professionList: [
    {
      Ninja: {
        cost: 3
      }
    },
    {
      Hobo: {
        cost: 1
      }
    },
  ],
  activeProfession: {}
};

export const professionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTIVATE-PROFESSION':
      return {
        ...state,
        activeProfession: action.profession
      };
    default:
      return state;
  }
};