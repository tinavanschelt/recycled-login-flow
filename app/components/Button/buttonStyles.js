/**
 * Button / buttonStyles (Styles)
 */

import { css } from 'styled-components';
import * as style from 'components/Variables';

export const Button = css`
  background-color: ${(props) => props.color ? style.color[props.color].default : style.color.gray.default};
  border: ${(props) => props.color ? `2px solid ${style.color[props.color].default}` : `2px solid ${style.color.gray.default}`};
  border-radius: ${(props) => props.round ? '50%' : style.radius};
  box-sizing: border-box;
  color: ${style.color.white};
  cursor: pointer;
  display: inline-block;
  font-family: ${style.fontfamily.sans};
  font-size: ${style.fontsize.large};
  font-weight: ${style.fontweight.sansbold};
  height: 40px;
  letter-spacing: 0.05em;
  line-height: 36px;
  outline: 0;
  padding: 0 2em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  width: ${(props) => props.fill ? '100%' : 'auto'};

  &:hover {
    background-color: ${(props) => props.color ? style.color[props.color].hover : style.color.gray.hover};
    border: ${(props) => props.color ? `2px solid ${style.color[props.color].hover}` : `2px solid ${style.color.gray.hover}`};
    color: ${style.color.white};
  }
`;

export const large = css`
  font-size: ${style.fontsize.plus};
  height: 50px;
  line-height: 46px;
  padding: 0 3em;
`;

export const tiny = css`
  font-size: ${style.fontsize.small};
  height: 30px;
  line-height: 26px;
  padding: 0 1em;
`;

export const Round = css`
  font-size: ${style.fontsize.reg};
  line-height: 0;
  padding: 0.4em 0.425em 0.3em;
`;
