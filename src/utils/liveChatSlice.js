import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice(
    {
        name:"liveChat",
        initialState:{
            message:[]
        },
        reducers:{
            addChat :(state, action) =>{
                //whenever the number of messages exceedes 11 size than one message will be deleted....
                state.message.splice(20,1)
                state.message.push(action.payload)
            }
        }
    }
)

export const {addChat} = liveChatSlice.actions
export default liveChatSlice.reducer