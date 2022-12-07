import React from 'react'
import { useState } from 'react';

const AuthContextt = React.createContext({
  token: '',
  isLoggedIn: true,
  login: (token) => {},
  logout: () => {},
});

export const Context=(props)=> {
  
  const initialtoken=localStorage.getItem('token')
    
  const [token, setToken] = useState(initialtoken);
  
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token',token)
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.clear('token')
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContextt.Provider value={contextValue}>
     {props.children}
    </AuthContextt.Provider>
  )
}
export default AuthContextt