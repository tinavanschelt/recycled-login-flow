/*
 * HomePage
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import A from 'components/A';
import ContentWrapper from 'components/ContentWrapper';
import { H2, H3, H5 } from 'components/Heading';

export class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ContentWrapper margin="2">
        <H2 bold>Hi!</H2>
        <p>This application demonstrates what a React-based register/login workflow might look like built with <A href="https://github.com/react-boilerplate/react-boilerplate">react-boilerplate v3.4.0</A>, <A href="https://github.com/styled-components/styled-components">styled-components</A>, <A href="https://github.com/reactjs/redux">redux</A>, <A href="https://github.com/redux-saga/redux-saga">redux-saga</A> and <A href="https://github.com/typicode/json-server">json-server</A>.</p>
        <p>It is based on a combination of <A href="https://github.com/mxstbr/login-flow">login-flow</A> by <A href="https://mxstbr.com/">Max Stoiber</A> (creator of the much loved <A href="https://github.com/styled-components/styled-components">styled-components</A> and co-founder of <A href="https://spectrum.chat/">https://spectrum.chat/</A>) and <A href="https://github.com/sotojuan/saga-login-flow">saga-login-flow</A> by <A href="https://juansoto.me/">Juan Soto</A> (also based on <A href="https://github.com/mxstbr/login-flow">login-flow</A>).</p>
        <p>You can find the code for this app on github: <A href="https://github.com/tinavanschelt/recycled-login-flow">recycled-login-flow</A></p>

        <H3 margin="1em 0 0">Authentication Flow</H3>
        <p>The App/sagas.js file watches for the login / signup action to be dispatched by the login / signup form. The auth method (in js/utils/auth.js) is then called for authentication. Auth.js uses fakeRequest.js and fakeServer.js. fakeRequest is a fake XMLHttpRequest wrapper with a similar syntax to request.js. (FYI in the original <A href="https://github.com/mxstbr/login-flow">login-flow</A> by <A href="https://mxstbr.com/">Max Stoiber</A> it simulates network latency.) fakeServer responds to the fake HTTP requests and pretends to be a real server, posting the current users to localhost:3000/api/users with the passwords encrypted using bcrypt.</p>
        <p>The json-server does not refresh automatically after posting, so in dev we just reroute to the login page with a success message.</p>

        <H3 margin="1em 0 0">Modifications to react-boilerplate</H3>

        <H5 bold margin="1em 0">Fake REST API</H5>
        <p>User data and hashes are stored in /api/db.json and json-server is setup to start up with the app. After running <i>yarn start</i> successfully, you should see your data when you go to <A href="http://localhost:3000/api/users">http://localhost:3000/api/users</A>.</p>
        <p>The json-server setup can be found in server/index.js (require json-server and specify /api, line #14)</p>

        <H5 bold margin="1em 0">General</H5>
        <ul>
          <li>App-level sagas (see <A href="https://github.com/react-boilerplate/react-boilerplate/issues/1518">#1518</A> and <A href="https://github.com/react-boilerplate/react-boilerplate/issues/1545">#1545</A>)</li>
          <li>Images / static files served from the /assets/ folder (line #15 in /app.js)</li>
          <li>Removed intl / react-intl</li>
        </ul>

        <H5 bold margin="1em 0">Styling</H5>
        <ul>
          <li>Global variables in /components/Variables/index.js, import as needed</li>
          <li>CSS Grid System (needs some TLC)</li>
        </ul>

        <H3 margin="1em 0 0">Getting Started</H3>

        <ol>
          <li>Clone / download this repo</li>
          <li>Run `yarn install` to install the dependencies.</li>
          <li>Run `yarn start` to start the local web server.</li>
          <li>Go to http://localhost:3000 and you should see the app running! (The api data is at http://localhost:3000/api/users)</li>
          <li>If you are running into strange undefined error, just make sure the requestURL in fakeServer.js is set to localhost.</li>
        </ol>

        <H3 margin="1em 0 0">Deployment</H3>

        Follow the react-boileplate <A href="https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/general/deployment.md">instructions</A>.

        <H3 margin="1em 0 0">Todo</H3>
        <ul>
          <li>Tests</li>
          <li>Add some documentation for the inputs</li>
        </ul>
      </ContentWrapper>
    );
  }
}

export default connect()(HomePage);
