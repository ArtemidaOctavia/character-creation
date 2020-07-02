import React from 'react';

export const Stats = (props) => {
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
              props.activateStat({})
            }
            }>
            {statName} {stat[statName]}
            <button onClick={() => {
              if (stat[statName] >= 1) {
                props.changeStat(statName, -1);
                props.changePoints(1)
              }
            }}>-</button>
            <button onClick={() => {
              props.changeStat(statName, 1);
              props.changePoints(-1)
            }}>+</button>
          </span>
          </div>
        })
      }
      <div>{props.activeStat && props.activeStat.description}</div>
    </div>
  )
};