let initialState = {
  name: `/click to enter name/`,
  nameFieldActive: false,
  sex: ``,
  height: 175,
  heightFieldActive: false,
  age: 25,
  ageFieldActive: false,
};

export const descriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-NAME':
      return {
        ...state,
        name: action.name
      };
    case `SET-SEX`:
      return {
        ...state,
        sex: action.sex
      };
    case `SET-HEIGHT`:
      if (action.height > 200) {
        return {
          ...state,
          height: 200
        }
      }
      if (action.height < 140) {
        return {
          ...state,
          height: 140
        }
      }
      return {
        ...state,
        height: action.height
      };
    case `SET-AGE`:
      if (action.age < 16) {
        return {
          ...state,
          age: 16
        }
      }
      if (action.age > 60) {
        return {
          ...state,
          age: 60
        }
      }
      return {
        ...state,
        age: action.age
      };
    case `TOGGLE-FIELD`:
      return {
        ...state,
        [action.field]: !state[action.field]
      };
    default:
      return state;
  }
};