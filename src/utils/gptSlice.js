import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({

    name: 'gpt',
    initialState: {
        gptSearchView: false
    },
    reducers:{

        togglegptSearchView:(state)=>{

         state.gptSearchView = !state.gptSearchView
        }
    }

    
})

export const  {togglegptSearchView}  = gptSlice.actions ;

export default gptSlice.reducer