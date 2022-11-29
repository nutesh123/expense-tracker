import Signup from './Components/Authentication/Signup';
import ProfileUpdate from './Components/nevigationbar/ProfileUpdate';
import Expenses from './Components/expenses/Expenses';
import './App.css';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import Login from './Components/Authentication/Login';
import Profile from './Components/nevigationbar/Profile';
import Forgot from './Components/Authentication/Forgot';
import AuthContextt from './Components/Context/Context';
import { useContext } from 'react';

function App() {

  const authCtx = useContext(AuthContextt);
  const isLoggedIn = authCtx.isLoggedIn;

console.log(isLoggedIn)
  return (
    <div className="App">
      {isLoggedIn ? <div>
       <Profile></Profile>
       <Routes>
    <Route path='/profileupdate' element={<ProfileUpdate></ProfileUpdate>}></Route>
   </Routes>
   <Expenses></Expenses> </div>
   :
   <Routes>
    <Route exact path='/login' element={<Login></Login>}/>
    <Route path='/signup' element={<Signup></Signup>}>
    </Route>
    <Route path='/forgotpin' element={<Forgot/>}/>
   </Routes>
}
    </div>
  );
}

export default App;
