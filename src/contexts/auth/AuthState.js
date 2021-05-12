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
  GET_PROFILE_PICTURE,
  GET_CURRENT_USER
}  from '../types';


const {
  YOUDEV_API_URL
} = process.env;

const AuthState = (props) => {

  const initialState = {
    user: {
      username: "guest",
      email: "guest"
    },
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
        console.log("user from registerUser?:", user);
        dispatch({
          type: REGISTER_USER_SUCCESS,
          payload: user.data.user
        })
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error
      })
    }
  }

  const getCurrentUser = async () => {
    const { data }= await axios.get(`${YOUDEV_API_URL}/auth/userinfo`, {
      withCredentials: true
    });
    console.log("userinfo data? ", data);
    if (data && data.id) {
      data.isAuthenticated = true;
    }

    dispatch({
      type: GET_CURRENT_USER,
      payload: data
    });

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

    dispatch({
      type:SIGNIN_USER
    });

    try {
      let user = await axios.post('http://localhost:7890/auth/signin',
        formData, { headers: {'Content-Type' : 'application/json'}}
      )

      dispatch({
        type:SIGNIN_USER_SUCCESS,
        payload: user.data.user
      })

    } catch (error) {
      dispatch({
        type:SIGNIN_USER_FAIL,
        payload:error
      })
    }

  }

  const logoutUser = async () => {
    const logoutResponse = await axios.get("http://localhost:7890/auth/logout");
    console.log("logoutResponse", logoutResponse);
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
        getProfilePicture,
        getCurrentUser
      }}>
        {props.children}
    </AuthContext.Provider>
  )

}

export default AuthState;

