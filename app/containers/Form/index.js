/**
 * Form (Login / Signup)
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import A from 'components/A';
import Button from 'components/Button';
import ErrorMessage from 'components/ErrorMessage';
import Form from 'components/Form';
import { Container, GridItem } from 'components/Grid';
import Input from 'components/Input';

import { login, signup, setErrorMessage } from 'containers/App/actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    if (window.location.href.indexOf('success') > -1) {
      this.props.dispatch(setErrorMessage('Successfully signed up!'));
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  onSubmit(e, pathname) {
    e.preventDefault();

    if (pathname.indexOf('signup') > -1) {
      this.props.dispatch(signup(this.state.username, this.state.password));
    } else {
      this.props.dispatch(login(this.state.username, this.state.password));
    }
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <Form onSubmit={(e) => this.onSubmit(e, this.props.location.pathname)}>
        <Container columns="2">
          <GridItem row="1" col="1 / span 2">
            <ErrorMessage />
          </GridItem>
          <GridItem row="2" col="1 / span 2">
            <Input inputType="textOnly" name="username" label="Name" placeholder="Username" onChange={(e) => this.handleInputChange(e)} required />
          </GridItem>
          <GridItem row="3" col="1 / span 2">
            <Input inputType="password" name="password" label="Password" placeholder="••••••••" onChange={(e) => this.handleInputChange(e)} required />
          </GridItem>
          <GridItem row="4" col="1">
            {
              this.props.currentlySending ? (
                <Button submit fill color="primary">Loading!</Button>
              ) : (
                <Button submit fill color="primary">{this.props.btnText}</Button>
              )
            }
          </GridItem>
          <GridItem row="4" col="2" center>
            {
              (this.props.btnText === 'Signup') ? (
                <A href="/login">Existing User?</A>
              ) : (
                <A href="/signup">New User?</A>
              )
            }
          </GridItem>
        </Container>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  btnText: PropTypes.string.isRequired,
  currentlySending: PropTypes.bool,
  dispatch: PropTypes.func,
  location: PropTypes.object,
};

export default connect()(LoginForm);
