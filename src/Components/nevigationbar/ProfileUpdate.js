import React from 'react'
import { Link } from 'react-router-dom'
import { useRef ,useContext , useEffect} from 'react'
import AuthContextt from '../Context/Context';

function ProfileUpdate() {

  const authCtx = useContext(AuthContextt);
  const nameref=useRef()
  const urlref=useRef()

  
  const autogetData=async()=>{
    const token = localStorage.getItem('token');
    try{
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAfZcDaenqQQYY9FxZmZaeCQVcqxQ0NcCg',
        {
            method: "POST",
            body: JSON.stringify({
                idToken: token,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        if(res.ok){
            const data = await res.json();
            data.users.forEach(element => {
                console.log(data.users);
                nameref.current.value=element.displayName;
                urlref.current.value=element.photoUrl;
            });
        }else{
            const data = await res.json();
            console.log(data)
        }

    }catch(err){
        console.log('Auto fetch error!');
    }
}

useEffect(()=>{
autogetData();
},[]);

  const submitHandler = async(event) => {
    //Prevent page reload
    event.preventDefault()

    const name = nameref.current.value;
    const url = urlref.current.value;
    const token=authCtx.token

    try{
      const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAfZcDaenqQQYY9FxZmZaeCQVcqxQ0NcCg',
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
          ) 
          if(res.ok){
            const data = await res.json();
            console.log(data);
            alert('wohoo , Your Data Saved!')
        }else{
            const data = await res.json();
            console.log(data)
            alert(data.error.message)
        }
    }catch(err){
        console('Updaing went wrong!')
    }
}
  return (
    <div> <h4>Winners never quite, Quitters never win</h4>
      <p>Your profile is 64% Complete Complete profile have higher chances of landing a job <Link>Complete now</Link></p>
      <form onSubmit={submitHandler}>
       <h4> Contact Details <button>Cancal</button> </h4>
        <label for='name'>Full Name</label>
        <input type='text' id='name' ref={nameref}/>
        <label for='url'>Profile Photo url</label>
        <input type='text' id='url' ref={urlref}/>
        <button>Update</button>
      </form>
      <hr></hr>
    </div>
  )
}

export default ProfileUpdate