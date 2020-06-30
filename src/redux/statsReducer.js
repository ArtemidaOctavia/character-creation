let initialState = {
  strength: 8,
  dexterity: 8,
  intelligence: 8,
  perception: 8
};

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE-STRENGTH`:
      return {
        ...state,
        strength: state.strength + action.value
      };
    case `CHANGE-DEXTERITY`:
      return {
        ...state,
        dexterity: state.dexterity + action.value
      };
    case `CHANGE-INTELLIGENCE`:
      return {
        ...state,
        intelligence: state.intelligence + action.value
      };
    case `CHANGE-PERCEPTION`:
      return {
        ...state,
        perception: state.perception + action.value
      };
    default:
      return state
  }
};