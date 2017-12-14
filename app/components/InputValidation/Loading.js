/**
 * Logo (Component)
 */

import React, { PropTypes } from 'react';

import LoadingDots from './LoadingDots';
import Wrapper from './Wrapper';

function Loading(props) {
  return (
    <Wrapper label={props.label}>
      <LoadingDots className="one"><i className="fa fa-circle"></i></LoadingDots>
      <LoadingDots className="two"><i className="fa fa-circle"></i></LoadingDots>
      <LoadingDots className="three"><i className="fa fa-circle"></i></LoadingDots>
    </Wrapper>
  );
}

Loading.propTypes = {
  label: PropTypes.string,
};

export default Loading;
