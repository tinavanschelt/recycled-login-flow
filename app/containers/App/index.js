/**
 * App Container (skeleton around all pages)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import ContentWrapper from 'components/ContentWrapper';
import Header from 'components/Header';
import withProgressBar from 'components/ProgressBar';

const AppWrapper = styled.div`
  max-width: calc(718px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
      <Header />

      <ContentWrapper margin="6">
        {React.Children.toArray(props.children)}
      </ContentWrapper>
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
