import React from 'react';
import { connect } from 'react-redux';
import { Header } from './header';

const mapStateToProps = (state) => ({
  pointsLeft: state.header.pointsLeft,
});

const mapDispatchToProps = (dispatch) => ({
  changePoints: (value) => {
    dispatch({ type: 'CHANGE-POINTS', value });
  },
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
