/**
 * Headings (Components)
 */

import styled, { css } from 'styled-components';
import * as style from 'components/Variables';

const Heading = css`
  color: ${(props) => props.color ? style.color[props.color].default : style.color.charcoal};
  letter-spacing: ${(props) => props.spaced ? '0.3em' : '0.02em'};
  line-height: 1.2;
  text-align: ${(props) => props.align ? props.align : 'left'};
  text-transform: ${(props) => props.uppercase ? 'uppercase' : 'none'};
  margin: ${(props) => props.margin ? props.margin : '0 0 0'};
`;

const Sans = css`
  font-family: ${style.fontfamily.sans};
  font-weight: ${(props) => props.bold ? style.fontweight.sansbold : style.fontweight.sans};
`;

const Serif = css`
  font-family: ${style.fontfamily.serif};
  font-style: italic;
  font-weight: ${(props) => props.bold ? style.fontweight.serifbold : style.fontweight.serif};
`;

export const H1 = styled.h1`
  ${Heading}
  ${(props) => props.serif ? Serif : Sans};
  font-size: 55px;
`;

export const H2 = styled.h2`
  ${Heading}
  ${(props) => props.serif ? Serif : Sans};
  font-size: 42px;
`;

export const H3 = styled.h3`
  ${Heading}
  ${(props) => props.serif ? Serif : Sans};
  font-size: 30px;
`;

export const H4 = styled.h4`
  ${Heading}
  ${(props) => props.serif ? Serif : Sans};
  font-size: 24px;
`;

export const H5 = styled.h5`
  ${Heading}
  ${(props) => props.serif ? Serif : Sans};
  font-size: 18px;
`;

export const H6 = styled.h6`
  ${Heading}
  ${(props) => props.serif ? Serif : Sans};
  font-size: 14px;
`;
