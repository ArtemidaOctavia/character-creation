import React from 'react';
import {TraitsList} from "./traitsList/traitsList";

export const Traits = (props) => {
  return (
    <div>
      <TraitsList  goodTraitsList={props.goodTraitsList} pickTrait={props.pickTrait}
                   activateTrait={props.activateTrait} changePoints={props.changePoints}
                   pickedTraits={props.pickedTraits} />
      <TraitsList  goodTraitsList={props.badTraitsList} pickTrait={props.pickTrait}
                   activateTrait={props.activateTrait} changePoints={props.changePoints}
                   pickedTraits={props.pickedTraits} />
      <div>{props.activeTrait ? `${props.activeTrait.description}, cost ${props.activeTrait.cost}` : ``}</div>
    </div>
  )
};