import React, {useReducer} from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';
import {
  REGISTER_USER,
  LOGOUT_USER,
  SIGNIN_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS
}  from '../types';


const AuthState = (props) => {

  const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const registerUser = async (formData) => {

    dispatch({
      type: REGISTER_USER
    });
    
    try {
      let user = await axios.post( "http://localhost:7890/auth/register",
        formData, { headers: {'Content-Type' : 'application/json'} }
        );
        console.log("user?:", user);
        dispatch({
          type: REGISTER_USER_SUCCESS
        })
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error
      })
    }
  }

  return (
    <AuthContext.Provider 
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        registerUser
      }}>
        {props.children}
    </AuthContext.Provider>
  )

}

export default AuthState;

