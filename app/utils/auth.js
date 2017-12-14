import { browserHistory } from 'react-router';
import request from './fakeRequest';
const localStorage = global.window.localStorage;

const auth = {
  login(username, password) {
    if (auth.loggedIn()) {
      return Promise.resolve(true);
    }
    // Post a fake request
    return request.post('/login', { username, password })
      .then((response) => {
        // Save token to local storage
        localStorage.token = response.token;
        return Promise.resolve(true);
      });
  },

  logout() {
    return request.post('/logout');
  },

  loggedIn() {
    return !!localStorage.token;
  },

  signup(username, password) {
    // Post a fake request
    return request.post('/signup', { username, password })
      // Log user in after registering
      // json-server does not refresh automatically, so in dev I just reroute to login
      // and add a success message
      .then(() => {
        forwardTo('/login?success');
        // auth.login(username, password); // reroute
      });
  },
  onChange() {},
};

function forwardTo(location) {
  browserHistory.push(location);
}

export default auth;
