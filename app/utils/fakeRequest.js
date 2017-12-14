import server from './fakeServer';
// Fake XMLHttpRequest wrapper with a syntax similar to the much used request.js
const fakeRequest = {
  // Pretends to post to a remote server
  post(endpoint, data) { // eslint-disable-line consistent-return
    switch (endpoint) {
      case '/login': {
        return server.login(data.username, data.password);
      }
      case '/signup':
        return server.signup(data.username, data.password);
      case '/logout':
        return server.logout();
      default:
        break;
    }
  },
};

export default fakeRequest;
