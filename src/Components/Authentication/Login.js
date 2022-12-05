import {Link ,Route,Routes} from "react-router-dom";
import {  useRef ,useContext } from "react";
import React from "react";
import classes from  './sign.module.css'
import Signup from "./Signup";
import AuthContextt from "../Context/Context";

export default function Login() {
   
  const authCtx = useContext(AuthContextt);

    const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // const [isLogin, setIsLogin] = useState(true);
  // const [isLoading, setIsLoading] = useState(false);

  // const switchAuthModeHandler = () => {
  //   setIsLogin((prevState) => !prevState);
  // };

    const submitHandler = (event) => {
        //Prevent page reload
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
    
        // optional: Add validation
      //  setIsLoading(true);
       
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfZcDaenqQQYY9FxZmZaeCQVcqxQ0NcCg',
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
          ).then((res) => {
            console.log("kuchh bhi", res)
           // setIsLoading(false);
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
              console.log(data)
              authCtx.login(data.idToken);
              
            })
            .catch((err) => {
              alert(err.message);
            });
        };
   
  return (
    <div>
      <Routes>
    <Route exact path='/login' element={<Login></Login>}/>
    <Route path='/signup' element={<Signup></Signup>}/>
   </Routes>

            <div  className={classes.form}>
        <form onSubmit={submitHandler}>
        <div className="email">
            <label className="form__label" for="email">Email </label>
            <input  type="email" id="email" className="form__input" placeholder="Email" ref={emailInputRef}/>
        </div>
        <div className="password">
            <label className="form__label" for="password">Password </label>
            <input className="form__input" type="password"  id="password" placeholder="Password"  ref={passwordInputRef}/>
        </div>
        <button >SignUp</button>
        </form>
        <Link to='/forgotpin' >forgot password</Link>
        
        </div>
        <Link to='/signup'> <button>Dont Have an account?Signup</button></Link>
    
    </div>
  )
}
