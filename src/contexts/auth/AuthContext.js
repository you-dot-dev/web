import {createContext} from 'react';

const AuthContext = createContext({
  user: {
    username: "guest",
    email: "guest"
  },
  isAuthenticated: false,
  loading: false
});

export default AuthContext;
