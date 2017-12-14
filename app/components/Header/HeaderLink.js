import { Link } from 'react-router';
import styled from 'styled-components';
import * as style from 'components/Variables';

export default styled(Link)`
  border: 2px solid ${style.color.primary.default};
  border-radius: ${style.radius};
  color: ${style.color.primary.default};
  cursor: pointer;
  display: inline-block;
  font-size: ${style.fontsize.large};
  font-weight: ${style.fontweight.sansbold};
  height: 40px;
  line-height: 36px;
  margin: 0.5em;
  padding: 0 2em;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;

  &:active, &:hover, &.active {
    background: ${style.color.primary.default};
    color: ${style.color.white};
  }
`;
