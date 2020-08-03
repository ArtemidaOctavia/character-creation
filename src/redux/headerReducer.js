const initialState = {
  pointsLeft: 8,
};

export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE-POINTS':
      return {
        ...state,
        pointsLeft: state.pointsLeft + action.value
      };
    default:
      return state;
  }
};