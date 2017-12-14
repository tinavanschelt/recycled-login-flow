/**
 * LoadingINdicator (Component)
 */

import React from 'react';

import Dot from './Dot';
import Wrapper from './Wrapper';

function Loading() {
  return (
    <Wrapper>
      <Dot className="one"><i className="fa fa-circle"></i></Dot>
      <Dot className="two"><i className="fa fa-circle"></i></Dot>
      <Dot className="three"><i className="fa fa-circle"></i></Dot>
    </Wrapper>
  );
}

export default Loading;
