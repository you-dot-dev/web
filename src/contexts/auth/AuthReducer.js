import {
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAIL,
  LOGOUT_USER,
  GET_CURRENT_USER
} from "../types";

export default (state, action) => {

  switch(action.type) {
    case REGISTER_USER:
      return {
        ...state,
        loading: true
      }
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false
      }
    case REGISTER_USER_SUCCESS:
    case GET_CURRENT_USER:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case SIGNIN_USER_SUCCESS:
      return{
        ...state,
        isAuthenticated:true,
        user: action.payload
      }
    case SIGNIN_USER_FAIL:
      return{
        ...state,
        isAuthenticated: false,
        user: {}
      }
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      }
    default:
      return state
  }

}
