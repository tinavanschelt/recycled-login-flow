/**
 * StyledA / StyledA (Styled Component)
 */

import styled from 'styled-components';
import * as style from 'components/Variables';
import * as base from './buttonStyles';

export const StyledASolid = styled.a`
  ${base.Button};
  ${(props) => props.size && base[props.size]};
`;

export const StyledAOutline = StyledASolid.extend`
  background-color: transparent;
  border: border: ${(props) => props.color ? `2px solid ${style.color[props.color].default}` : `2px solid ${style.color.gray.default}`};
  color: ${(props) => props.color ? style.color[props.color].default : style.color.gray.default};

  &:hover {
    background-color: transparent;
    border: border: ${(props) => props.color ? `2px solid ${style.color[props.color].hover}` : `2px solid ${style.color.gray.hover}`};
    color: ${(props) => props.color ? style.color[props.color].hover : style.color.gray.hover};
  }
`;
