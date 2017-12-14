/**
 * Input
 */

import React, { Component, PropTypes } from 'react';


import Validation from 'components/InputValidation';
import Label from 'components/Label';
import Input from './StyledInput';

class SmartInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      valid: false,
      visible: false,
    };
  }

  handleKeyDown(e, type, max) {
    this.setState({ visible: true, loading: true });

    const inputLength = e.target.value.length;
    const maxIndex = parseInt(max, 10);

    const keyCode = e.which;
    const numeric = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
    const codes = [8, 9, 13, 32];

    if (maxIndex > 0 && inputLength === maxIndex) {
      if (codes.indexOf(keyCode) < 0) {
        e.preventDefault();
      }
    }

    if (type === 'numeric' || type === 'card') {
      if (numeric.indexOf(keyCode) < 0 && codes.indexOf(keyCode) < 0) {
        e.preventDefault();
      }
    }

    if (type === 'text') {
      if (numeric.indexOf(keyCode) > -1) {
        e.preventDefault();
      }
    }
  }

  handleBlur(e, type) {
    const value = e.target.value;
    this.setState({ loading: false });

    if (type === 'email') {
      if (this.validateEmail(value)) {
        this.setState({ valid: true });
      } else {
        this.setState({ valid: false });
      }
    } else {
      const pattern = e.target.getAttribute('pattern');
      const regex = new RegExp(pattern);

      if (pattern !== null) {
        if (this.validateInputPattern(value, regex)) {
          this.setState({ valid: true });
        } else {
          this.setState({ valid: false });
        }
      } else if ((value.length > 0)) {
        this.setState({ valid: true });
      } else {
        this.setState({ valid: false });
      }
    }
  }

  validateInputPattern(value, pattern) {
    return pattern.test(value);
  }

  validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  handleCardKeyUp(e, max) {
    const inputLength = e.target.value.length;
    const maxIndex = parseInt(max, 10);

    const luhnValidate = (function (arr) { // eslint-disable-line func-names
      return ((ccNum) => {
        let len = ccNum.length;
        let bit = 1;
        let sum = 0;
        let val;

        while (len) {
          val = parseInt(ccNum.charAt(--len), 10); // eslint-disable-line no-plusplus
          sum += (bit ^= 1) ? arr[val] : val; // eslint-disable-line no-bitwise, no-cond-assign
        }

        return sum && sum % 10 === 0;
      });
    }([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));

    if (inputLength === maxIndex) { // test for luhn once card input has been completed
      const cardString = String(e.target.value);

      if (luhnValidate(cardString)) {
        e.target.setCustomValidity('');
      } else {
        e.target.setCustomValidity('Not valid');
      }
    }
  }

  handleCharKeyDown(e, max) {
    const maxIndex = parseInt(max, 10) - 1;
    const inputLength = e.target.value.length;

    if (parseInt(max, 10) > 0 && inputLength === maxIndex) {
      e.preventDefault();
    }

    const numeric = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
    const keyCode = e.which;
    if (numeric.indexOf(keyCode) > -1) {
      e.preventDefault();
    }
  }

  render() {
    const props = {
      border: this.props.border,
      defaultValue: this.props.defaultValue,
      id: this.props.id,
      inputType: this.props.inputType,
      name: this.props.name,
      onBlur: (e) => this.handleBlur(e, this.props.inputType),
      onChange: this.props.onChange,
      placeholder: this.props.placeholder,
      pattern: this.props.pattern,
      required: this.props.required,
    };

    if (this.props.inputType === 'textOnly') {
      // text only
      props.type = 'text';
      props.onKeyDown = (e) => this.handleKeyDown(e, 'text', this.props.maxChars);
    } else if (this.props.inputType === 'numeric') {
      // numeric
      props.type = 'text';
      props.onKeyDown = (e) => this.handleKeyDown(e, 'numeric', this.props.maxChars);
    } else if (this.props.inputType === 'email') {
      // email
      props.type = 'email';
      props.onKeyDown = (e) => this.handleKeyDown(e, 'email');
    } else if (this.props.inputType === 'card') {
      // card
      props.type = 'text';
      props.onKeyDown = (e) => this.handleKeyDown(e, 'card', 16);
      props.onKeyUp = (e) => this.handleCardKeyUp(e, 16);
    } else if (this.props.inputType === 'password') {
      // password
      props.type = 'password';
    } else {
      props.type = 'text';
    }

    const smartInput = <Input {...props} />;

    return (
      <Label color={this.props.labelColor}>
        {this.props.label}
        { smartInput }
        <Validation visible={this.state.visible} loading={this.state.loading} valid={this.state.valid} />
      </Label>
    );
  }
}

SmartInput.propTypes = {
  border: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  inputType: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  maxChars: PropTypes.string,
  name: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

SmartInput.defaultProps = {
  label: '',
  maxChars: '0',
};

export default SmartInput;
