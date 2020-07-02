import React from 'react';
import {connect} from 'react-redux';
import {Skills} from "./skills";

let mapStateToProps = (state) => {
  return {
    skillsList: state.skills.skillsList,
    activeSkill: state.skills.activeSkill
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeSkill: (skill, value) => {
      dispatch({type: `CHANGE-SKILL`, skill, value})
    },
    changePoints: (value) => {
      dispatch({type: `CHANGE-POINTS`, value})
    },
    activateSkill: (skill) => {
      dispatch({type: `ACTIVATE-SKILL`, skill})
    }
  }
};

const SkillsContainer = connect(mapStateToProps, mapDispatchToProps)(Skills);
export default SkillsContainer;