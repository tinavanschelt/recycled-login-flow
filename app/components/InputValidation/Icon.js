/**
 *  Icon (Styled Component)
 */

import styled from 'styled-components';
import * as style from 'components/Variables';

const Icon = styled.i`
    color: ${(props) => (props.color) ? style.color[props.color] : style.color.primary.dark};
`;

export default Icon;
