/**
 * Input (Styled Component)
 */

import styled from 'styled-components';
import * as style from 'components/Variables';

const StyledInput = styled.input`
  background: rgba(255,255,255,0.8);
  border: ${(props) => props.border ? `1px solid ${style.color[props.border].default}` : `1px solid ${style.color.gray.light}`};
  border-radius: ${style.radius};
  color: ${style.color.primary.dark};
  width: 100%;
  margin: 0.5em 0;
  min-height: 50px;
  padding: 0.75em;
`;

export default StyledInput;
