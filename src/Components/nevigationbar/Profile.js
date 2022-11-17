import React from 'react'
import {Link  } from "react-router-dom";
import AuthContextt from '../Context/Context';
import { useContext } from 'react';




function Profile() {
  const authCtx = useContext(AuthContextt);
  const logouthandler = () => {
    authCtx.logout()
  };
  return (
    <div>Welcome to expense Tracker 
        your Profile is incomplete <Link to='/profileupdate'>Complete now</Link>
        <Link to='/login' onClick={logouthandler}>Logout</Link>
        <hr></hr>
    </div>
  )
}

export default Profile