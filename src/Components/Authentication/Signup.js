import React, { useState } from 'react'
import classes from  './sign.module.css'
import { useRef } from 'react';
import {Link , Nevigate  } from "react-router-dom";
import AuthContextt from '../Context/Context';
import { useContext } from 'react';
export default function Signup() {

  const authCtx = useContext(AuthContextt);
  
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmpasswordInputRef = useRef();

    const [isLogin, setIsLogin] = useState(true);
    
    const submitHandler = (event) => {
        //Prevent page reload
        event.preventDefault()
     
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const confirmenteredPassword = confirmpasswordInputRef.current.value;
        
        
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfZcDaenqQQYY9FxZmZaeCQVcqxQ0NcCg',
            {
              method: 'POST',
              body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          ).then((respo) => {
            console.log("my console respose", respo)
            if (respo.ok) {
                // ...
                return respo.json() ;
              //  console.log("if res.ok")
              } 
              else {
                    console.log("kuchh bhi else")
                    return respo.json().then((data) => {
                    let errorMessage = 'Authentication failed!';
                     if (data && data.error && data.error.message) 
                     {
                      errorMessage = data.error.message;
                     }
              
                     throw new Error(errorMessage);
                    });
            }
        }).then((data) => {
            console.log(data)
            console.log('User has successfully signed up.')
           authCtx.login(data.idToken);
            
          })
          .catch((err) => {
            console.log(err)
            alert(err.message);
          });

    }
  return (
     <div>
        <form className={classes.form} onSubmit={submitHandler}>
        <div className="email">
            <label className="form__label" for="email">Email </label>
            <input  type="email" id="email" className="form__input" placeholder="Email" ref={emailInputRef}/>
        </div>
        <div className="password">
            <label className="form__label" for="password">Password </label>
            <input className="form__input" type="password"  id="password" placeholder="Password"  ref={passwordInputRef}/>
        </div>
        <div className="confirm-password">
            <label className="form__label" for="confirmPassword">Confirm Password </label>
            <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"  ref={confirmpasswordInputRef}/>
        </div>
        <button >SignUp</button>
        </form>
        <Link to='/login'><button>Have an account?Login</button></Link>
        </div>

)       
}
