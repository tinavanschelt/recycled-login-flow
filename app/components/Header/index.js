import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { logout } from 'containers/App/actions';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar>
        {
          (this.props.loggedIn) ? (
            <div>
              <HeaderLink to="/" activeClassName="active">
                Home
              </HeaderLink>
              <HeaderLink to="/dashboard" activeClassName="active">
                Dashboard
              </HeaderLink>
              <HeaderLink onClick={() => this.props.dispatch(logout())} activeClassName="active">
                Logout
              </HeaderLink>
            </div>
          ) : (
            <div>
              <HeaderLink to="/" activeClassName="active">
                Home
              </HeaderLink>
              <HeaderLink to="/login" activeClassName="active">
                Login
              </HeaderLink>
              <HeaderLink to="/signup" activeClassName="active">
                Signup
              </HeaderLink>
            </div>
          )
        }
      </NavBar>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.getIn(['global', 'loggedIn']),
  };
}

Header.propTypes = {
  dispatch: PropTypes.func,
  loggedIn: PropTypes.bool,
};

export default connect(mapStateToProps)(Header);
