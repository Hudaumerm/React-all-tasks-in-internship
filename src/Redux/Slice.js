import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:1,
    data:"Hello",
    input:3,
    
}

export const counterSlice= createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment: (state)=>{
            state.value=state.value+1
        },
        decrement:(state)=>{
            state.value=state.value-1
        },
    
    odd:(input)=>{
        if(input%2 !== 0)
        {
            window.alert('odd')
        }
        else
        {
            window.alert('even')
        }
    }
    ,

        display:
            (state)=>{
                state.data="Welcome"

            }

    },
    
})

export const {increment,decrement,display,odd}=counterSlice.actions
export default counterSlice.reducer


