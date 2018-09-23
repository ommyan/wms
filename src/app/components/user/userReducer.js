/**
 * Created by griga on 11/17/16.
 */


import {USER_INFO,LOGED_IN,LOGIN_SUCCESS} from './UserActions'
import {userConstants} from '../../routes/auth/constant'
const initialState = {
   user: [],
  
};
export default function userReducer (state =  initialState, action ){
  console.log('aksi',action.type)

  switch (action.type){
    case USER_INFO:
      return action.data

    case LOGED_IN:
    return {
      ...state,
      user: payload.action.data}

    case LOGIN_SUCCESS:
    return {
      ...state,
      user: action.data
    };

    default:
      return state
  }
}
