/*
 * AppReducer
 */

import { fromJS } from 'immutable';
import auth from '../../utils/auth';

import {
  SENDING_REQUEST,
  SET_AUTH,
  LOGIN,
  SIGNUP,
  SET_ERROR_MESSAGE,
  LOGOUT,
  CHANGE_FORM,
} from './actions';

const initialState = fromJS({
  formState: {
    username: '',
    password: '',
  },
  currentlySending: false,
  loggedIn: auth.loggedIn(),
  errorMessage: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SENDING_REQUEST:
      return state
        .set('currentlySending', action.sending);
    case LOGIN:
      return state
        .setIn(['formState', 'username'], action.username)
        .setIn(['formState', 'password'], action.password);
    case SIGNUP:
      return state
        .setIn(['formState', 'username'], action.username)
        .setIn(['formState', 'password'], action.password);
    case SET_AUTH:
      return state
        .set('loggedIn', action.newState);
    case SET_ERROR_MESSAGE:
      return state
        .set('errorMessage', action.message);
    case LOGOUT:
      return state
        .setIn(['formState', 'username'], '')
        .setIn(['formState', 'password'], '');
    case CHANGE_FORM:
      return state
        .setIn(['formState', 'username'], action.username)
        .setIn(['formState', 'password'], action.password);
    default:
      return state;
  }
}

export default appReducer;
