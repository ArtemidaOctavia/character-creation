import React from 'react';
import { DescriptionElement } from './descriptionElement/descriptionElement';
import { DescriptionSex } from './descriptionSex/descriptionSex';
import { DescriptionStats } from './descriptionStats/descriptionStats';
import { DescriptionTraits } from './descriptionTraits/descriptionTraits';
import { DescriptionProfession } from './descriptionProfession/descriptionProfession';
import { DescriptionSkills } from './descriptionSkills/descriptionSkills';
import styles from './description.module.css';

export const Description = ({
  nameFieldActive, toggleField, setName,
  name, setSex, sex, heightFieldActive,
  setHeight, height, ageFieldActive, setAge,
  age, statsList, pickedTraits, profession, skills,
}) => (
  <div>
    <div className={styles.anthropometric}>
      <DescriptionElement
        field={nameFieldActive}
        type="String"
        valueName="Name"
        fieldName="nameFieldActive"
        toggleField={toggleField}
        setValue={setName}
        value={name}
      />

      <DescriptionSex setSex={setSex} sex={sex} />

      <DescriptionElement
        field={heightFieldActive}
        type="Number"
        valueName="Height"
        fieldName="heightFieldActive"
        toggleField={toggleField}
        setValue={setHeight}
        value={height}
      />

      <DescriptionElement
        field={ageFieldActive}
        type="Number"
        valueName="Age"
        fieldName="ageFieldActive"
        toggleField={toggleField}
        setValue={setAge}
        value={age}
      />
    </div>

    <div className={styles.environmental}>
      <DescriptionStats statsList={statsList} />

      <DescriptionTraits pickedTraits={pickedTraits} />

      <DescriptionProfession profession={profession} />

      <DescriptionSkills profession={profession} skills={skills} />
    </div>
  </div>
);
