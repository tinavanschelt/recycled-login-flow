/**
 * LoadingButton
 */

import React, { PropTypes } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';

function LoadingButton(props) {
  return (
    <button href="#" className={`${props.className} btn btn--loading`} disabled="true">
      <LoadingIndicator />
    </button>
  );
}

LoadingButton.propTypes = {
  className: PropTypes.string,
};

export default LoadingButton;
