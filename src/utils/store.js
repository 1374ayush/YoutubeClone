import { configureStore } from "@reduxjs/toolkit";

import sideBarSlice from './sidebarSlice.js';

const store = configureStore({
    reducer:{
        sidebar:sideBarSlice,
    }
})

export default store