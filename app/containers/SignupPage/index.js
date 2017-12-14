/*
 * SignupPage
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { H2 } from 'components/Heading';
// import LoadingIndicator from 'components/LoadingIndicator';
import Form from 'containers/Form';

class SignupPage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <H2 align="center" color="primary" margin="0.5em 0">Signup</H2>
        <Form
          data={this.props.formState}
          dispatch={this.props.dispatch}
          location={location}
          history={this.props.history}
          btnText="Signup"
          currentlySending={this.props.currentlySending}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    formState: state.getIn(['global', 'formState']),
    currentlySending: state.getIn(['global', 'currentlySending']),
  };
}

SignupPage.propTypes = {
  currentlySending: PropTypes.bool,
  dispatch: PropTypes.func,
  formState: PropTypes.object,
  history: PropTypes.object,
};

export default connect(mapStateToProps)(SignupPage);
