import React from 'react';
import {connect} from 'react-redux';
import {Header} from "./header";

let mapStateToProps = (state) => {
  return {
    pointsLeft: state.header.pointsLeft
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    changePoints: (value) => {
      dispatch({type: 'CHANGE-POINTS', value})
    }
  }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;