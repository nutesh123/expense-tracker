import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isAuthenticated: false,
    showPremButton : false,
    darkbutton : false 
}

const authSlice = createSlice({
  name :'authstate' ,
   initialState : initialState ,
   reducers : {
    login(state){
        state.isAuthenticated=true;
    },
    logout(state){
        state.isAuthenticated=false;
    },
    checker(state){
        const localIsLogin = localStorage.getItem('JWTTOKEN');
    if(localIsLogin ===null){
        state.isAuthenticated = false;
    }else if(localIsLogin === ''){
        state.isAuthenticated =false;
    }else if(localIsLogin.trim().length > 0){
        state.isAuthenticated = true;
    }
},
showPremButton(state){
    state.showPremButton= true;
},
dontshowPremButton(state){
    state.showPremButton= false;
},
DarkmodeButton(st){
st.darkbutton =true 
}
   }
})

 export const { showPremButton , dontshowPremButton , DarkmodeButton} = authSlice.actions ;

export default authSlice.reducer ;