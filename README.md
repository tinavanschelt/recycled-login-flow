
## (Recycled) login-flow

This application demonstrates what a React-based register/login workflow might look like built with [react-boilerplate v3.4.0](https://github.com/react-boilerplate/react-boilerplate), [styled-components](https://github.com/styled-components/styled-components), [redux](https://redux.js.org/), [redux-saga](https://github.com/redux-saga/redux-saga) and [json-server](https://github.com/typicode/json-server).

It's based on a combination of [login-flow](https://github.com/mxstbr/login-flow) by [Max Stoiber](https://mxstbr.com/) (creator of the much loved [styled-components](https://github.com/styled-components/styled-components) and co-founder of [spectrum.chat](https://spectrum.chat)) and [saga-login-flow](https://github.com/sotojuan/saga-login-flow) by [Juan Soto](https://juansoto.me/) (also based on [login-flow](https://github.com/mxstbr/login-flow)).

There are two default users (password in brackets) are `Jona (whale) and `Daniel (lion)` or you could just "signup".

### Authentication Flow
The App/sagas.js file watches for the login / signup action to be dispatched by the login / signup form. The auth method (in js/utils/auth.js) is then called for authentication. Auth.js uses fakeRequest.js and fakeServer.js. fakeRequest is a fake XMLHttpRequest wrapper with a similar syntax to request.js. (FYI in [login-flow](https://github.com/mxstbr/login-flow) it simulates network latency.) fakeServer responds to the fake HTTP requests and pretends to be a real server, posting the current users to http://localhost:3000/api/users with the passwords encrypted using bcrypt.

The json-server does not refresh automatically after posting, so in dev we just reroute to the login page with a success message.

### Modifications to react-boilerplate

You'll find most of the ins-and-outs in the [react-boilerplate docs](https://github.com/react-boilerplate/react-boilerplate/tree/master/docs), but here's a brief overview of some modifications that were made.

#### Fake REST API
User data and hashes are stored in /api/db.json and json-server is setup to start up with the app. After running _yarn start_ successfully, you should see your data when you go to [http://localhost:3000/api/users](http://localhost:3000/api/users).

The json-server setup can be found in server/index.js (require json-server and specify /api, line #14).

#### General
* App-level sagas (see [#1518](https://github.com/react-boilerplate/react-boilerplate/issues/1518) and [#1545](https://github.com/react-boilerplate/react-boilerplate/issues/1545)
* Images / static files served from the /assets/ folder (line #15 in /app.js)
* Removed intl / react-intl

#### Styling
* Global variables in /components/Variables/index.js, import as needed
* CSS Grid System (needs some TLC)

## Getting started

1. Clone / download this repo

2. Run `yarn install` to install the dependencies.

3. Run `yarn start` to start the local web server.

4. Go to `http://localhost:3000` and you should see the app running! (The api data is at `http://localhost:3000/api/users`)

(If you are running into strange undefined error, just make sure the requestURL in fakeServer.js is set to localhost.)

## Deployment

Check the [instructions](https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/general/deployment.md) in the react-boilerplate docs.

## Todo
* Write tests
* Add some documentation for the inputs
