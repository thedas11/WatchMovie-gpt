import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({

    name : "language",
    initialState: {
      lang: "en"

    },

   reducers: {


    changeLanguages:(state, action)=>{

     state.lang = action.payload


    }
}




})

export const {changeLanguages} = langSlice.actions;

export default langSlice.reducer;

