/*
 * App actions
 */

export const SENDING_REQUEST = 'SENDING_REQUEST';
export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const SET_AUTH = 'SET_AUTH';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const LOGOUT = 'LOGOUT';
export const CHANGE_FORM = 'CHANGE_FORM';

export function sendingRequest(sending) {
  return {
    type: SENDING_REQUEST,
    sending,
  };
}

export function login(username, password) {
  return {
    type: LOGIN,
    username,
    password,
  };
}

export function signup(username, password) {
  return {
    type: SIGNUP,
    username,
    password,
  };
}

export function setAuthState(newState) {
  return {
    type: SET_AUTH,
    newState,
  };
}

export function setErrorMessage(message) {
  return {
    type: SET_ERROR_MESSAGE,
    message,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function changeForm(newState) {
  return {
    type: CHANGE_FORM,
    newState,
  };
}
