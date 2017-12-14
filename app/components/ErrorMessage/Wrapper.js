/**
 * ErrorMessage / Wrapper (Styled Component)
 */

import styled from 'styled-components';
import * as style from 'components/Variables';

const Wrapper = styled.div`
  border: 2px solid ${style.color.primary.default};
  color: ${style.color.primary.default};
  display: inline-block;
  margin-bottom: 1em;
  width: 100%;
`;

export default Wrapper;
