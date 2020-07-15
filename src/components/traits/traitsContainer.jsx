import React from 'react';
import { connect } from 'react-redux';
import { Traits } from './traits';

const mapStateToProps = (state) => ({
  goodTraitsList: state.traits.goodTraitsList,
  badTraitsList: state.traits.badTraitsList,
  pickedTraits: state.traits.pickedTraits,
  pointsLeft: state.header.pointsLeft,
  activeTrait: state.traits.activeTrait,
});

const mapDispatchToProps = (dispatch) => ({
  pickTrait: (trait) => {
    dispatch({ type: 'TOGGLE-TRAIT-PICK', trait });
  },
  changePoints: (value) => {
    dispatch({ type: 'CHANGE-POINTS', value });
  },
  activateTrait: (trait) => {
    dispatch({ type: 'ACTIVATE-TRAIT', trait });
  },
});

const TraitsContainer = connect(mapStateToProps, mapDispatchToProps)(Traits);
export default TraitsContainer;
