import styled from 'styled-components';
import * as style from 'components/Variables';

export default styled.div`
  align-items: center;
  background-color: ${style.color.white};
  border-bottom: 1px solid ${style.color.gray.light};
  display: flex;
  height: 80px;
  justify-content: center;
  right: 0;
  top: 0;
  left: 0;
  padding: 1em;
  position: fixed;
  z-index: 1;
`;
