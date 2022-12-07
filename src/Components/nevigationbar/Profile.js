import React from 'react'
import {Link  } from "react-router-dom";
import AuthContextt from '../Context/Context';
import { useContext } from 'react';
import {themeToStore} from '../../store/Theme'
import { useSelector , useDispatch } from 'react-redux';


function Profile() {
  const theme = useSelector((st)=>st.themes.Isdark)
  const dispath = useDispatch()

  const authCtx = useContext(AuthContextt);
  const token=authCtx.token
  
  const logouthandler = () => {
    authCtx.logout()
  };

  const verifyemailhandler = ( ) => {
    
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAfZcDaenqQQYY9FxZmZaeCQVcqxQ0NcCg',
    {
      method: 'POST',
      body: JSON.stringify({
         requestType:"VERIFY_EMAIL",
         idToken:token ,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => {
        console.log("kuchh bhi", res)
        if (res.ok) {
          // ...
          return res.json() ;
          //console.log("if res.ok")
        } else {
          console.log("kuchh bhi else")
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
             if (data && data.error && data.error.message) 
             {
              errorMessage = data.error.message;
             }
      
             throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data.kind)
        })
        .catch((err) => {
          alert(err.message);
        });
    };

    const modeHandler=()=>{
      dispath(themeToStore())
    }
  return (
    <div>
      <div>  Welcome to expense Tracker 
        your Profile is incomplete <Link to='/profileupdate'>Complete now</Link>
        <Link to='/login' onClick={logouthandler}>Logout</Link>
        </div>

        <div >  
           { !theme ? <button onClick={modeHandler}>dark</button> : <button onClick={modeHandler}> Light </button>}
        </div>

        <hr></hr>
        <button onClick={verifyemailhandler}>Verify Your Email</button>
    </div>
  )
}

export default Profile