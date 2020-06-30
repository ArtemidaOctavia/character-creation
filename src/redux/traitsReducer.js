let initialState = {
  goodTraitsList: [
    {
      fast: {
        cost: 3,
        description: `do some fasty`
      }
    },
    {
      willpower: {
        cost: 2,
        description: `do some willpowery`
      }
    },
    {
      religious: {
        cost: 1,
        description: `do some religiously`
      }
    }
  ],

  badTraitsList: [
    {
      albino: {
        cost: -1,
        description: `do some albiny`
      }
    },
    {
      asthma: {
        cost: -3,
        description: `do some asthmy`
      }
    },
    {
      insomnia: {
        cost: -2,
        description: `do some insomny`
      }
    },
  ],

  activeTrait: null,

  pickedTraits: []
};

export const traitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTIVATE-TRAIT':
      return {
        ...state,
        activeTrait: action.trait
      };
    case 'TOGGLE-TRAIT-PICK':
      let actionTrait = Object.keys(action.trait)[0];
      let traitPicked = state.pickedTraits.some((trait) => {
        return Object.keys(trait)[0] === actionTrait;
      });
      if (traitPicked) {
        let withRemovedTrait = state.pickedTraits.filter((trait) => {
          return Object.keys(trait)[0] !== actionTrait
        });
        return {
          ...state,
          pickedTraits: withRemovedTrait
        }
      } else return {
        ...state,
        pickedTraits: [...state.pickedTraits, action.trait]
      };
    default:
      return state;
  }
};