import { configureStore } from "@reduxjs/toolkit";

import sideBarSlice from './sidebarSlice.js';
import searchSlice from "./searchSlice.js";

const store = configureStore({
    reducer:{
        sidebar:sideBarSlice,
        search: searchSlice,
    }
})

export default store