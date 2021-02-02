import {
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS
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
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    default:
      return state
  }

}