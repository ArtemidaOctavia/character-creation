import React from 'react';
import {connect} from 'react-redux';
import {Description} from "./description";

let mapStateToProps = (state) => {
  return {
    profession: state.profession.activeProfession,
    pickedTraits: state.traits.pickedTraits,
    name: state.description.name,
    sex: state.description.sex,
    height: state.description.height,
    heightFieldActive: state.description.heightFieldActive,
    age: state.description.age,
    ageFieldActive: state.description.ageFieldActive,
    nameFieldActive: state.description.nameFieldActive,
    statsList: state.stats.statsList,
    skills: state.skills.skillsList
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({type: 'SET-NAME', name})
    },
    setSex: (sex) => {
      dispatch({type: `SET-SEX`, sex})
    },
    setHeight: (height) => {
      dispatch({type: `SET-HEIGHT`, height})
    },
    setAge: (age) => {
      dispatch({type: `SET-AGE`, age})
    },
    toggleField: (field) => {
      dispatch({type: `TOGGLE-FIELD`, field})
    }
  }
};

const DescriptionContainer =  connect(mapStateToProps, mapDispatchToProps)(Description);
export default DescriptionContainer;