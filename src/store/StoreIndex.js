import { configureStore } from "@reduxjs/toolkit";

import authSlice from './Auth'
import expensedataSlice from "./ExpenseData";
import  themeSlice from './Theme'

const store = configureStore({
    reducer :{
        auth : authSlice,
        ExpenseDataa : expensedataSlice,
        themes : themeSlice 
    }
})

export default store ;