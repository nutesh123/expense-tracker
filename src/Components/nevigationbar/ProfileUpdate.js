import React from 'react'
import { Link } from 'react-router-dom'
import { useRef ,useContext } from 'react'
import AuthContextt from '../Context/Context';

function ProfileUpdate() {
  const authCtx = useContext(AuthContextt);
  const nameref=useRef()
  const urlref=useRef()

  const submitHandler = (event) => {
    //Prevent page reload
    event.preventDefault()

    const name = nameref.current.value;
    const url = urlref.current.value;
    const token=authCtx.token

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAfZcDaenqQQYY9FxZmZaeCQVcqxQ0NcCg',
            {
              method: 'POST',
              body: JSON.stringify({
                idToken : token ,
                displayName: name,
                PhotoUrl:url,
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
        })
        .catch((err) => {
          console.log(err)
          alert(err.message);
        });
  }

  return (
    <div> <h4>Winners never quite, Quitters never win</h4>
      <p>Your profile is 64% Complete Complete profile have higher chances of landing a job <Link>Complete now</Link></p>
      <hr></hr>
      <form onSubmit={submitHandler}>
       <h4> Contact Details <button>Cancal</button> </h4>
        <label for='name'>Full Name</label>
        <input type='text' id='name' ref={nameref}/>
        <label for='url'>Profile Photo url</label>
        <input type='text' id='url' ref={urlref}/>
        <button>Update</button>
      </form>
    </div>
  )
}

export default ProfileUpdate