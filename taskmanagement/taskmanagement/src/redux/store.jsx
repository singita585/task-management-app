//Imports that are needed for this section
import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./boardsSlice";

//this code sets up a storage system for our app's data.
//It's configured to handle changes related to our boards,
const store = configureStore({
    reducer: {
        boards: boardsSlice.reducer,
    }
})

export default store