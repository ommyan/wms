/**
 * Created by griga on 11/24/15.
 */
import {userConstants} from  '../../routes/auth/constant'
import createHistory from "history/createBrowserHistory"
import { userService } from './_services/UserService';

import { hashHistory } from 'react-router'


const history = createHistory()

export const REQUEST_USER = 'REQUEST_USER'
export const USER_INFO = 'USER_INFO'
export const LOGED_IN = 'USER_LOGED_IN'
export const LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const IS_LOGED = 'USER_IS_LOGIN'


export function requestUserInfo()
{
  return (dispatch) => {
    return $.getJSON('assets/api/user/login-info.json')
      .then((data)=> {
        dispatch({
          type: USER_INFO,
          data
        })
      })
  }
}

export function getlogedIn(){
  let users=[];
  return (dispatch, getState) => {
    const state = getState()
    if (getlogedIn(state)) return null;

    get()
      .then((response) => {
        user=Array(response)
        dispatch({
          type: LOGED_IN,
          payload: {
            user: user
          }
        });
      });
  }
}




export function login(username, password) {
  return dispatch => {
      dispatch(request({ username,password }));

      userService.login(username, password)
          .then(
              user => { 
                dispatch(success(user));
                hashHistory.push('/sales/listdo');
              },
              error => {
                console.log('tett',error)
                dispatch(failure(error));
              }
          );
  };
  
  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  

  function success(user) { 
    console.log('suce',user.data)
    return { 
      type: LOGIN_SUCCESS, 
      data: user.data } 
  }
  
  function loged(user) { return { type: userConstants.LOGED_IN, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

export function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

