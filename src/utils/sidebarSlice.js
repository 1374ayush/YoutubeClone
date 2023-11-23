import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:{
        isOpen:false,
    },
    reducers:{
        toggleMenu: (state) =>{
            state.isOpen=!state.isOpen
        },
        closeMenu:(state) => {
            state.isOpen=false;
        },
    }
})

export const {toggleMenu, closeMenu}=sidebarSlice.actions
export default sidebarSlice.reducer