import { createSlice } from "@reduxjs/toolkit"


const initialState={
    data:"Hello",
}

export const messageSlice=createSlice({
    name:"message",
    initialState,
    reducers:{
        display:
            (state)=>{
                state.data="Welcome"

            }

    }
})
export const {display}=messageSlice.actions
export default messageSlice.reducer