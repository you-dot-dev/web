import React, {useReducer} from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';
import crypto from 'crypto';

import {
  REGISTER_USER,
  SIGNIN_USER,
  LOGOUT_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAIL,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  GET_PROFILE_PICTURE
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

  const getProfilePicture = async (email) => {
     const hashedEmail = crypto.createHash("md5").update(email).digest('hex');

     try {
       let profImg = await axios.get('https://www.gravatar.com/' + hashedEmail + '.json');
       console.log(profImg);
      dispatch({
        type:GET_PROFILE_PICTURE
      })

     } catch (error) {
       console.log(error)
     }

  }

  const signInUser = async (formData) => {
    console.log('signinUser?: formData', formData);
    dispatch({
      type:SIGNIN_USER
    });

    try {
      console.log("Is this thing on?");
      let user = await axios.post('http://localhost:7890/auth/signin',
        formData, { headers: {'Content-Type' : 'application/json'}}
      )
      console.log("Is this thing on again?");

      //getProfilePicture(user.data.data.email)

      dispatch({
        type:SIGNIN_USER_SUCCESS,
        payload:user.data.data
      })
    } catch (error) {
      dispatch({
        type:SIGNIN_USER_FAIL,
        payload:error
      })
    }
  }

  const logoutUser = async () => {
    dispatch({type: LOGOUT_USER});
  }

  return (
    <AuthContext.Provider 
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        registerUser,
        signInUser,
        logoutUser,
        getProfilePicture
      }}>
        {props.children}
    </AuthContext.Provider>
  )

}

export default AuthState;

