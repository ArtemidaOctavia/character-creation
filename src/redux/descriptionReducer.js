const initialState = {
  name: '/click to enter name/',
  nameFieldActive: false,
  sex: '',
  height: 175,
  heightFieldActive: false,
  age: 25,
  ageFieldActive: false,
};

const minHeight = 140;
const maxHeight = 200;
const minAge = 16;
const maxAge = 60;

export const descriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-NAME':
      return {
        ...state,
        name: action.name,
      };
    case 'SET-SEX':
      return {
        ...state,
        sex: action.sex,
      };
    case 'SET-HEIGHT':
      if (action.height > maxHeight) {
        return {
          ...state,
          height: maxHeight,
        };
      }
      if (action.height < minHeight) {
        return {
          ...state,
          height: minHeight,
        };
      }
      return {
        ...state,
        height: action.height,
      };
    case 'SET-AGE':
      if (action.age < minAge) {
        return {
          ...state,
          age: minAge,
        };
      }
      if (action.age > maxAge) {
        return {
          ...state,
          age: maxAge,
        };
      }
      return {
        ...state,
        age: action.age,
      };
    case 'TOGGLE-FIELD':
      return {
        ...state,
        [action.field]: !state[action.field],
      };
    default:
      return state;
  }
};
