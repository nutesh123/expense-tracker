import { createSlice } from "@reduxjs/toolkit";

const initialStatee ={
    Isdark :false, 
}
const themeSlice = createSlice({
  name :' thems' ,
   initialState : initialStatee ,
   reducers : {
    themeToStore(state ){
         state.Isdark = !state.Isdark
    }
   }
})

export const { themeToStore } = themeSlice.actions ;

export default themeSlice.reducer;