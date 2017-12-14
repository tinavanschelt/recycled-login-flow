/**
 * App sagas
 */
import { hashSync } from 'bcryptjs';
import { browserHistory } from 'react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import { call, cancel, select, take, takeLatest, put, race } from 'redux-saga/effects';
// import * as errorMessages from './errorMessages';
import { makeSelectFormState } from './selectors';

import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  sendingRequest,
  setAuthState,
  changeForm,
  setErrorMessage,
} from './actions';

import auth from '../../utils/auth';
import genSalt from '../../utils/salt';

export function* authorize({ newUser, username, password }) {
  yield put(sendingRequest(true));

  try {
    const salt = genSalt(username);
    const hash = hashSync(password, salt);
    let response;

    if (newUser) {
      response = yield call(auth.signup, username, hash);
    } else {
      response = yield call(auth.login, username, hash);
    }

    return response;
  } catch (error) {
    yield put(setErrorMessage(error.message));
    return false;
  } finally {
    yield put(sendingRequest(false));
  }
}

export function* login() {
  const userDetails = yield select(makeSelectFormState());
  const username = userDetails.get('username');
  const password = userDetails.get('password');
  const newUser = false;

  const winner = yield race({
    auth: call(authorize, { newUser, username, password }),
    logout: take(LOGOUT),
  });

  if (winner.auth) {
    yield put(setAuthState(true));
    yield put(changeForm('', ''));
    forwardTo('/dashboard');
  }
}

export function* signup() {
  const userDetails = yield select(makeSelectFormState());
  const username = userDetails.get('username');
  const password = userDetails.get('password');
  const newUser = true;

  const response = yield call(authorize, { newUser, username, password });
  console.log(response);

  if (response) {
    yield put(setAuthState(true));
    yield put(changeForm('', ''));
    forwardTo('/dashboard');
  }
}

export function* logout() { // eslint-disable-line consistent-return
  yield put(sendingRequest(true));

  try {
    const response = yield call(auth.logout);
    yield put(sendingRequest(false));
    return response;
  } catch (error) {
    console.log('bye - also, you have an error'); // eslint-disable-line no-console
  }
}

export function* callLogout() {
  yield put(setAuthState(false));
  yield call(logout);
  forwardTo('/');
}

function forwardTo(location) {
  browserHistory.push(location);
}

// Watchers
export function* userLogin() {
  const watcher = yield takeLatest(LOGIN, login);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* userSignup() {
  const watcher = yield takeLatest(SIGNUP, signup);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* userLogout() {
  const watcher = yield takeLatest(LOGOUT, callLogout);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  userLogin,
  userSignup,
  userLogout,
];
