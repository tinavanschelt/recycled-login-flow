/**
 * ContentWrapper (Styled Component)
 */

import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: 96%;
  margin: ${(props) => props.margin ? `${props.margin}em auto` : '0 auto'};
  max-width: 1200px;
`;

export default ContentWrapper;
