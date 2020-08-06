const initialState = {
  goodTraitsList: [
    {
      name: 'fast',
      cost: 3,
      description: 'do some fasty',
    },
    {
      name: 'willpower',
      cost: 2,
      description: 'do some willpowery',
    },
    {
      name: 'religious',
      cost: 1,
      description: 'do some religiously',
    },
  ],

  badTraitsList: [
    {
      name: 'albino',
      cost: -1,
      description: 'do some albiny',
    },
    {
      name: 'asthma',
      cost: -3,
      description: 'do some asthmy',
    },
    {
      name: 'insomnia',
      cost: -2,
      description: 'do some insomny',
    },
  ],

  activeTrait: null,

  pickedTraits: [],
};

export const traitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTIVATE-TRAIT':
      return {
        ...state,
        activeTrait: action.trait,
      };
    case 'TOGGLE-TRAIT-PICK':
      const actionTrait = action.trait;
      const traitPicked = state.pickedTraits.some((trait) => trait === actionTrait);
      if (traitPicked) {
        const withRemovedTrait = state.pickedTraits.filter((trait) => trait !== actionTrait);
        return {
          ...state,
          pickedTraits: withRemovedTrait,
        };
      } return {
        ...state,
        pickedTraits: [...state.pickedTraits, action.trait],
      };
    default:
      return state;
  }
};
