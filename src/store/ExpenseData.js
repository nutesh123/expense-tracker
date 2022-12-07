import { createSlice } from "@reduxjs/toolkit";

const initialStatee ={
    itemList:[],
}
const expensedataSlice = createSlice({
  name :' ExpenseData' ,
   initialState : initialStatee ,
   reducers : {
    getdataToStore(state , action ){
         state.itemList.push(action.payload)
    }
   }
})

export const { getdataToStore } = expensedataSlice.actions ;

export default expensedataSlice.reducer;