import React from 'react';
import { TraitsList } from './traitsList/traitsList';

export const Traits = ({
  goodTraitsList, pickTrait, activateTrait, changePoints, pickedTraits, badTraitsList, activeTrait,
}) => (
  <div>
    <TraitsList
      traitsList={goodTraitsList}
      pickTrait={pickTrait}
      activateTrait={activateTrait}
      changePoints={changePoints}
      pickedTraits={pickedTraits}
      traitStyle="pickedGoodTrait"
    />
    <TraitsList
      traitsList={badTraitsList}
      pickTrait={pickTrait}
      activateTrait={activateTrait}
      changePoints={changePoints}
      pickedTraits={pickedTraits}
      traitStyle="pickedBadTrait"
    />
    <div>{activeTrait ? `${activeTrait.description}, cost ${activeTrait.cost}` : ''}</div>
  </div>
);
