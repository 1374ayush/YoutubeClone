import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:{
        isOpen:true,
    },
    reducers:{
        toggleMenu: (state) =>{
            state.isOpen=!state.isOpen
        },
    }
})

export const {toggleMenu}=sidebarSlice.actions
export default sidebarSlice.reducer