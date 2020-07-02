import React from 'react';

export const Stats = (props) => {

  const increaseStat = (stat, statName) => {
    if (stat[statName] >= 14) {
      return
    }
    if (stat[statName] < 12) {
      props.changeStat(statName, 1);
      props.changePoints(-1)
    } else {
      props.changeStat(statName, 1);
      props.changePoints(-2)
    }
  };

  const decreaseStat = (stat, statName) => {
    if (stat[statName] <= 4) {
      return
    }
    if (stat[statName] <= 12) {
      props.changeStat(statName, -1);
      props.changePoints(1)
    } else {
      props.changeStat(statName, -1);
      props.changePoints(2)
    }
  };

  return (
    <div>
      {
        props.statsList.map((stat, index) => {
          let statName = Object.keys(stat)[0];
          return <div key={index}><span
            onMouseOver={() => {
              props.activateStat(stat)
            }}
            onMouseOut={() => {
              props.activateStat(null)
            }}>
            {statName} {stat[statName]}
            <button onClick={() => {
              decreaseStat(stat, statName)
            }}>-</button>
            <button onClick={() => {
              increaseStat(stat, statName)
            }}>+</button>
          </span>
          </div>
        })
      }
      <div>{props.activeStat && props.activeStat.description}</div>
    </div>
  )
};