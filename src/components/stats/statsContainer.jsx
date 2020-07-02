import React from 'react';
import {Stats} from "./stats";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    statsList: state.stats.statsList,
    activeStat: state.stats.activeStat
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeStat: (stat, value) => {
      dispatch({type: `CHANGE-STAT`, stat, value})
    },
    changePoints: (value) => {
      dispatch({type: `CHANGE-POINTS`, value})
    },
    activateStat: (stat) => {
      dispatch({type: `ACTIVATE-STAT`, stat})
    }
  }
};

const StatsContainer = connect(mapStateToProps, mapDispatchToProps)(Stats);
export default StatsContainer;