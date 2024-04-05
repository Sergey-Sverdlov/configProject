import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../features/todo/TodoSlise";

export const store = configureStore({
    reducer: {
        todo: todoSlice,
    }
})