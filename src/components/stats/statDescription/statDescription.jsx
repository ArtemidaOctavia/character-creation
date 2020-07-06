import React from "react";

export const StatDescription = (props) => {

  const renderStatInfluence = (stat) => {
    if (stat) {
      let activeStatName = Object.keys(stat)[0];
      let targetStat = props.statsList.filter(item => Object.keys(item)[0] === activeStatName);
      let value = targetStat[0][activeStatName];
      switch (activeStatName) {
        case `strength`:
          return<div>
            <div>Base HP: {value * 10}</div>
            <div>Max carrying weight: {value * 6}kg</div>
            <div>Blunt damage bonus: {value * 1}</div>
          </div>;
        case `dexterity`:
          return<div>
            <div>Close combat precision modifier: {(value * 0.25).toFixed(2)}</div>
            <div>Throwing penalty for one point of target dodge skill: {(45 - (value * 3.125)).toFixed(0)}</div>
            <div>Ranged combat penalty: {-16 + value}</div>
          </div>;
        case `intelligence`:
          return<div>
            <div>Reading speed: {(value * 12.5).toFixed(0)}%</div>
            <div>Craft speed bonus: {value}%</div>
          </div>;
        case `perception`:
          return<div>
            <div>Aim penalty {-(24 - (value * 1.3)).toFixed(0)}</div>
          </div>
      }
    }
  };

  return (
    <div>
      {renderStatInfluence(props.stat)}
      {props.stat.description}
    </div>
  )
};