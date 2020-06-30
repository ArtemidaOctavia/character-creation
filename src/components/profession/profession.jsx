import React from 'react';
import styles from "./profession.module.css"

export const Profession = (props) => {

  return (
    <div>
      <div>
        {props.professionList.map((item, index) => {
          let professionName = Object.keys(item)[0];
          return <span onClick={() => {
            if (props.activeProfession === item[professionName]) {
              return;
            }
            if (props.activeProfession.cost) {
              props.changePoints(props.activeProfession.cost)
            }
            props.activateProfession(item[professionName]);
            props.changePoints(-item[professionName].cost);
          }} key={index}
                       className={item[professionName] === props.activeProfession ?
                         `${styles.profession} ${styles.active}` :
                         styles.profession}>{professionName}</span>
        })}
      </div>

      <div>

      </div>
    </div>
  )
};