import { hashSync, genSaltSync, compareSync } from 'bcryptjs';
// import genSalt from './salt';
import request from './request';

let users;
const salt = genSaltSync(10);
const localStorage = global.window.localStorage; // for webpack approval
const requestURL = 'https://recycled-login-flow.herokuapp.com/api/users';

// Fake remote server, using bcrypt and localStorage to persist data across page§
const server = {
  // Populate the users var, similar to seeding a database in the real world
  init() {
    this.getUsers();
  },

  getUsers() {
    const getUsers = request(requestURL);
    getUsers.then((result) => {
      users = result;
    });
  },

  login(username, password) {
    const userCheck = this.doesUserExist(username);
    const userExists = userCheck.userExists;
    const dbPassword = userCheck.hash;

    return new Promise((resolve, reject) => {
      // If the user exists and the password fits log the user in and resolve
      if (userExists && compareSync(password, dbPassword)) {
        resolve({
          authenticated: true,
          token: Math.random().toString(36).substring(7), // Fake a random token
        });
      } else {
        let error;
        if (userExists) {
          error = new Error('Wrong password');
        } else {
          error = new Error('User does not exist');
        }

        reject(error);
      }
    });
  },

  // Pretends to register a user
  signup(username, password) {
    return new Promise((resolve, reject) => {
      // If the username isn't used, hash the password with bcrypt to store it in localStorage
      const userCheck = this.doesUserExist(username);
      const userExists = userCheck.userExists;

      if (!userExists) {
        const hash = hashSync(password, salt);

        request(requestURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: username,
            username,
            email: `${username}@example.com`,
            password: hash,
          }),
        });

        resolve({ registered: true });
      } else {
        reject(new Error('Username already in use'));
      }
    });
  },

  // Pretends to log a user out
  logout() {
    return new Promise((resolve) => {
      localStorage.removeItem('token');
      resolve(true);
    });
  },

  doesUserExist(username) {
    this.getUsers();
    let userExists = false;
    let hash = '';

    users.forEach((user) => { // eslint-disable-line consistent-return
      if (user.username.toLowerCase() === username.toLowerCase()) {
        userExists = true;
        hash = user.password;
        return { userExists, hash };
      }
    });

    return { userExists, hash };
  },
};

server.init();

export default server;
