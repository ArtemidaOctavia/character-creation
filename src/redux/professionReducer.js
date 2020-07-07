let initialState = {
  professionList: [
    {
      Ninja: {
        name: `Ninja`,
        cost: 3,
        description: `A shadow warrior from feudal Japan`,
        skillBonus: [{melee: 2}],
        wield: `katana`,
        appearence: [`tabi`, `kimono`, `mask`],
        inventory: [`smoke grenades`, `kunai`, `sushi`]
      }
    },
    {
      Hobo: {
        name: `Hobo`,
        cost: 1,
        description: `A man, who chose freedom instead living in society`,
        skillBonus: [{tailoring: 1}, {crafting: 2}],
        wield: null,
        appearence: [`shirt`, `shorts`, `shoes`],
        inventory: [`cigarettes`, `15 cents`, `pocket knife`]
      }
    },
  ],
  activeProfession: null
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