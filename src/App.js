import Signup from './Components/Authentication/Signup';
import ProfileUpdate from './Components/nevigationbar/ProfileUpdate';
import Expenses from './Components/expenses/Expenses';
import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Login from './Components/Authentication/Login';
import Profile from './Components/nevigationbar/Profile';
import AuthContextt from './Components/Context/Context';
import { useContext } from 'react';

function App() {

  const authCtx = useContext(AuthContextt);
  const isLoggedIn = authCtx.isLoggedIn;

console.log(isLoggedIn)
  return (
    <div className="App">
      {isLoggedIn ? <Profile></Profile>:
   <Routes>
    <Route exact path='/login' element={<Login></Login>}/>
    <Route path='/signup' element={<Signup></Signup>}>
    </Route>
   </Routes>
}
<Routes>
    <Route path='/profileupdate' element={<ProfileUpdate></ProfileUpdate>}></Route>
   </Routes>
   <Expenses></Expenses>
    </div>
  );
}

export default App;
