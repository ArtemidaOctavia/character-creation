import React from 'react';
import {Stats} from "./stats";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    strength: state.stats.strength,
    dexterity: state.stats.dexterity,
    intelligence: state.stats.intelligence,
    perception: state.stats.perception,
    pointsLeft: state.header.pointsLeft
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeStrength: (value) => {
      dispatch({type: 'CHANGE-STRENGTH', value})
    },
    changeDexterity: (value) => {
      dispatch({type: 'CHANGE-DEXTERITY', value})
    },
    changeIntelligence: (value) => {
      dispatch({type: 'CHANGE-INTELLIGENCE', value})
    },
    changePerception: (value) => {
      dispatch({type: 'CHANGE-PERCEPTION', value})
    },
    changePoints: (value) => {
      dispatch({type: 'CHANGE-POINTS', value})
    }
  }
};

const StatsContainer = connect(mapStateToProps, mapDispatchToProps)(Stats);
export default StatsContainer;