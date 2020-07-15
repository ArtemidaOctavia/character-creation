import React from 'react';
import { connect } from 'react-redux';
import { Profession } from './profession';

const mapStateToProps = (state) => ({
  professionList: state.profession.professionList,
  activeProfession: state.profession.activeProfession,
});

const mapDispatchToProps = (dispatch) => ({
  activateProfession: (profession) => {
    dispatch({ type: 'ACTIVATE-PROFESSION', profession });
  },
  changePoints: (value) => {
    dispatch({ type: 'CHANGE-POINTS', value });
  },
});

const ProfessionContainer = connect(mapStateToProps, mapDispatchToProps)(Profession);
export default ProfessionContainer;
