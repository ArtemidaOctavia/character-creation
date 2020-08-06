import React from 'react';
import { connect } from 'react-redux';
import { Skills } from './skills';

const mapStateToProps = (state) => ({
  skillsList: state.skills.skillsList,
  activeSkill: state.skills.activeSkill,
  profession: state.profession.activeProfession,
});

const mapDispatchToProps = (dispatch) => ({
  changeSkill: (skill, value) => {
    dispatch({ type: 'CHANGE-SKILL', skill, value });
  },
  changePoints: (value) => {
    dispatch({ type: 'CHANGE-POINTS', value });
  },
  activateSkill: (skill) => {
    dispatch({ type: 'ACTIVATE-SKILL', skill });
  },
});

const SkillsContainer = connect(mapStateToProps, mapDispatchToProps)(Skills);
export default SkillsContainer;
