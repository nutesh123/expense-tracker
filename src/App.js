import Signup from './Components/Authentication/Signup';
import ProfileUpdate from './Components/nevigationbar/ProfileUpdate';
import Expenses from './Components/expenses/Expenses';
import  classes from'./App.css';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import Login from './Components/Authentication/Login';
import Profile from './Components/nevigationbar/Profile';
import Forgot from './Components/Authentication/Forgot';
import AuthContextt from './Components/Context/Context';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import PremButton from './Components/expenses/PremButton';

function App() {
  const theme = useSelector((st)=>st.themes.Isdark)
  const authCtx = useContext(AuthContextt);
  const isLoggedIn = authCtx.isLoggedIn;
  const modecolor = theme ? 'rgb(43, 42, 42)' : 'whitesmoke'
  console.log(modecolor)
  return (
    <div className={classes.app} style={{backgroundColor: `${modecolor}`}}>
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
