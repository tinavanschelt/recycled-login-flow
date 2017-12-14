/**
 * LoadingWrapper (Styled Component)
 */

import styled from 'styled-components';

const LoadingWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: ${(props) => props.label === '' ? '23px' : '44px'};
`;

export default LoadingWrapper;
