import React from 'react';
import {DescriptionElement} from "./descriptionElement/descriptionElement";
import {DescriptionSex} from "./descriptionSex/descriptionSex";
import {DescriptionStats} from "./descriptionStats/descriptionStats";
import {DescriptionTraits} from "./descriptionTraits/descriptionTraits";
import {DescriptionProfession} from "./descriptionProfession/descriptionProfession";
import {DescriptionSkills} from "./descriptionSkills/descriptionSkills";

export const Description = (props) => {

  return (
    <div>
      <DescriptionElement field={props.nameFieldActive} type={`String`} valueName={'Name'}
                          fieldName={`nameFieldActive`} toggleField={props.toggleField} setValue={props.setName}
                          value={props.name}/>

      <DescriptionSex setSex={props.setSex} sex={props.sex} />

      <DescriptionElement field={props.heightFieldActive} type={`Number`} valueName={'Height'}
                          fieldName={`heightFieldActive`} toggleField={props.toggleField} setValue={props.setHeight}
                          value={props.height}/>

      <DescriptionElement field={props.ageFieldActive} type={`Number`} valueName={'Age'}
                          fieldName={`ageFieldActive`} toggleField={props.toggleField} setValue={props.setAge}
                          value={props.age}/>

      <DescriptionStats statsList={props.statsList}/>

      <DescriptionTraits pickedTraits={props.pickedTraits}/>

      <DescriptionProfession profession={props.profession}/>

      <DescriptionSkills profession={props.profession} skills={props.skills}/>
    </div>
  )
};