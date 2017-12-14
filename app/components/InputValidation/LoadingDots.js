/**
 * Dot (Styled Component)
 */

import styled, { keyframes } from 'styled-components';
import * as style from 'components/Variables';

function loadState() {
  return keyframes`
    0% { opacity: 0; }
    50% { opacity: 1; }
    60% { opacity: 1; }
    100% { opacity: 0; }
  `;
}

const Dot = styled.div`
  animation: ${loadState()} 1s linear infinite;
  color: ${style.color.primary.dark};
  display: inline;
  margin-left: 0.2em;
  margin-right: 0.2em;
  position: relative;
  font-size: ${style.fontsize.tiny};
  opacity: 0;

  &.one { animation-delay: 0.2s; }
  &.two { animation-delay: 0.4s; }
  &.three { animation-delay: 0.6s; }
`;

export default Dot;
