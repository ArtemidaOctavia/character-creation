import React from 'react';
import { TraitsList } from './traitsList/traitsList';

export const Traits = (props) => (
  <div>
    <TraitsList
      traitsList={props.goodTraitsList}
      pickTrait={props.pickTrait}
      activateTrait={props.activateTrait}
      changePoints={props.changePoints}
      pickedTraits={props.pickedTraits}
      style="pickedGoodTrait"
    />
    <TraitsList
      traitsList={props.badTraitsList}
      pickTrait={props.pickTrait}
      activateTrait={props.activateTrait}
      changePoints={props.changePoints}
      pickedTraits={props.pickedTraits}
      style="pickedBadTrait"
    />
    <div>{props.activeTrait ? `${props.activeTrait.description}, cost ${props.activeTrait.cost}` : ''}</div>
  </div>
);
