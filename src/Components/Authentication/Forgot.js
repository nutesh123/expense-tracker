import React from 'react'
import { useRef} from 'react';
import { Link } from 'react-router-dom';

function Forgot() {


    const emailInputRef = useRef() ;

    const passwordHandler = (event) => {
        //Prevent page reload
        event.preventDefault()
     
        const enteredEmail = emailInputRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAfZcDaenqQQYY9FxZmZaeCQVcqxQ0NcCg',
            {
              method: 'POST',
              body: JSON.stringify({

                requestType:'PASSWORD_RESET',
                email: enteredEmail,

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
            
          })
          .catch((err) => {
            console.log(err)
            alert(err.message);
          });

    }

  return (
    <div>
        <form onSubmit={passwordHandler}> 
            Enetered your Register Email ID
        <input type='email' ref={emailInputRef}/> 
        <button>send</button>
        </form>
        <Link to='/login' >Log In Now</Link>
       
    </div>
  )
}

export default Forgot