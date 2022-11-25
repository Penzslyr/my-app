import { configureStore } from "@reduxjs/toolkit";
import accReducer from "../reduxState/accSlice"

export const store = configureStore({
    reducer: {
        acc: accReducer,
    }
})