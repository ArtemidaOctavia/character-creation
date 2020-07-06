import React from 'react';
import {connect} from 'react-redux';
import {Profession} from "./profession";

let mapStateToProps = (state) => {
  return {
    professionList: state.profession.professionList,
    activeProfession: state.profession.activeProfession
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    activateProfession: (profession) => {
      dispatch({type: 'ACTIVATE-PROFESSION', profession: profession})
    },
    changePoints: (value) => {
      dispatch({type: 'CHANGE-POINTS', value: value})
    }
  }
};

const ProfessionContainer = connect(mapStateToProps, mapDispatchToProps)(Profession);
export default ProfessionContainer;