/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';

import A from 'components/A';
import ContentWrapper from 'components/ContentWrapper';
import { H2 } from 'components/Heading';

export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <ContentWrapper margin="2">
        <Helmet
          title="Feature Page"
          meta={[
            { name: 'description', content: 'Feature page of React.js Boilerplate application' },
          ]}
        />
        <H2 margin="0 0 1em">Dashboard</H2>
        <p>You're logged in!</p>
        <p>Not much to see here though :) Check the <A href="/">Homepage</A> for details.</p>
      </ContentWrapper>
    );
  }
}
