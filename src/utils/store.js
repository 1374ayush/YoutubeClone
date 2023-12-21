import { configureStore } from "@reduxjs/toolkit";

import sideBarSlice from './sidebarSlice.js';
import searchSlice from "./searchSlice.js";
import liveChatSlice from "./liveChatSlice.js";

const store = configureStore({
    reducer:{
        sidebar:sideBarSlice,
        search: searchSlice,
        liveChat: liveChatSlice
    }
})

export default store