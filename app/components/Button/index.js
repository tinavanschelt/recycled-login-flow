/**
 * Button (Component)
 */

import React, { PropTypes, Children } from 'react';

import { StyledASolid, StyledAOutline } from './StyledA';
import { ButtonSolid, ButtonOutline } from './StyledButton';
import Wrapper from './Wrapper';

function Button(props) {
  const buttonProps = {
    color: props.color,
    fill: props.fill,
    margin: props.margin,
    onClick: props.handleRoute,
    round: props.round,
    size: props.size,
  };

  let button;

  // Render an anchor tag
  if (props.outline) {
    buttonProps.href = props.href;
    buttonProps.onClick = props.onClick;

    button = (
      <StyledAOutline {...buttonProps}>
        {Children.toArray(props.children)}
      </StyledAOutline>
    );
  } else {
    button = (
      <StyledASolid {...buttonProps}>
        {Children.toArray(props.children)}
      </StyledASolid>
    );
  }

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    if (props.outline) {
      button = (
        <ButtonOutline {...buttonProps}>
          {Children.toArray(props.children)}
        </ButtonOutline>
      );
    } else {
      button = (
        <ButtonSolid {...buttonProps}>
          {Children.toArray(props.children)}
        </ButtonSolid>
      );
    }
  }

  // If the Button has a submit prop, we want to render a input
  if (props.submit) {
    if (props.outline) {
      button = (
        <ButtonOutline type="submit" {...buttonProps}>
          {Children.toArray(props.children)}
        </ButtonOutline>
      );
    } else {
      button = (
        <ButtonSolid type="submit" {...buttonProps}>
          {Children.toArray(props.children)}
        </ButtonSolid>
      );
    }
  }

  return (
    <Wrapper size={props.size} margin={props.margin} fill={props.fill}>
      { button }
    </Wrapper>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fill: PropTypes.bool,
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  round: PropTypes.bool,
  size: PropTypes.string,
  submit: PropTypes.bool,
};

export default Button;
