import React from 'react';
import { connect } from 'react-redux';
import { Stats } from './stats';

const mapStateToProps = (state) => ({
  statsList: state.stats.statsList,
  activeStat: state.stats.activeStat,
});

const mapDispatchToProps = (dispatch) => ({
  changeStat: (stat, value) => {
    dispatch({ type: 'CHANGE-STAT', stat, value });
  },
  changePoints: (value) => {
    dispatch({ type: 'CHANGE-POINTS', value });
  },
  activateStat: (stat) => {
    dispatch({ type: 'ACTIVATE-STAT', stat });
  },
});

const StatsContainer = connect(mapStateToProps, mapDispatchToProps)(Stats);
export default StatsContainer;
