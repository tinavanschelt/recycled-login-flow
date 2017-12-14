/**
 * Button / Wrapper (Styled Component)
 */

import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  margin: ${(props) => props.margin ? props.margin : '1em 0'};
  width: ${(props) => props.fill ? '100%' : 'auto'};
`;

export default Wrapper;
