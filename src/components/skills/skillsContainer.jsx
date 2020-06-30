import React from 'react';
import {connect} from 'react-redux';
import {Skills} from "./skills";

let mapStateToProps = (state) => {
  return {
    melee: state.skills.melee,
    crafting: state.skills.crafting,
    tailoring: state.skills.tailoring,
    medicine: state.skills.medicine
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeSkill: (skill, value) => {
      dispatch({type: 'CHANGE-SKILL', skill, value})
    }
  }
};

const SkillsContainer = connect(mapStateToProps, mapDispatchToProps)(Skills);
export default SkillsContainer;