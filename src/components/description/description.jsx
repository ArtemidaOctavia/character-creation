import React from 'react';
import styles from "./description.module.css"

export const Description = (props) => {

  let calculateSkills = (skills, professionBonus) => {
    return skills.map((item) => {
      let itemName = Object.keys(item)[0];
      professionBonus.forEach((bonusItem) => {
        let bonusItemName = Object.keys(bonusItem)[0];
        if (itemName === bonusItemName) {
          item = {...item, [itemName]: item[itemName] + bonusItem[bonusItemName]}
        }
      });
      return item;
    }).filter((skill) => skill[Object.keys(skill)[0]] !== 1);
  };

  if (props.profession) {
    calculateSkills(props.skills, props.profession.skillBonus);
  }

  return (
    <div>
      <div className={styles.thing}>Name:
        {props.nameFieldActive ?
          <input autoFocus
                 onMouseOut={() => props.toggleField(`nameFieldActive`)}
                 onChange={(event) => props.setName(event.target.value)}/> :
          <span onClick={() => props.toggleField(`nameFieldActive`)}>{props.name}</span>}
      </div>

      <div className={styles.thing}> Sex:
        <span onClick={() => props.setSex(`male`)} className={props.sex === `male` ? styles.active : ``}>
          Male
        </span>
        <span onClick={() => props.setSex(`female`)} className={props.sex === `female` ? styles.active : ``}>
          Female
        </span>
      </div>

      <div className={styles.thing}>Height:
        {props.heightFieldActive ?
          <input autoFocus type={'Number'}
                 onMouseOut={() => props.toggleField(`heightFieldActive`)}
                 onChange={(event) => props.setHeight(event.target.value)}/> :
          <span onClick={() => props.toggleField(`heightFieldActive`)}>{props.height}</span>}
      </div>

      <div className={styles.thing}>Age:
        {props.ageFieldActive ?
          <input autoFocus type={'Number'}
                 onMouseOut={() => props.toggleField(`ageFieldActive`)}
                 onChange={(event) => props.setAge(event.target.value)}/> :
          <span onClick={() => props.toggleField(`ageFieldActive`)}>{props.age}</span>}
      </div>

      <div className={styles.thing}>
        Stats:<br></br>
        {props.statsList.map((stat, index) => {
          let statName = Object.keys(stat)[0];
          return <div key={index}>
            <span>{statName} {stat[statName]}</span>
          </div>
        })}
      </div>

      <div className={styles.thing}>
        Traits:<br></br>
        {props.pickedTraits.map((trait, index) => {
          return <span className={styles.trait} key={index}>{Object.keys(trait)[0]}</span>
        })}
      </div>

      <div className={styles.thing}>
        Profession: {props.profession && props.profession.name}
      </div>

      <div className={styles.thing}>
        Skills:<br></br>
        {props.profession ?
          calculateSkills(props.skills, props.profession.skillBonus).map((skill, index) => {
            let skillName = Object.keys(skill)[0];
            return <div key={index}>{skillName} {skill[skillName]}</div>
          }) : ``
        }
      </div>

    </div>
  )
};