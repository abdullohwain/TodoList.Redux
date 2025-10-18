import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../files/counter/counterSlice"
import todoReducer from "../files/todos/todoSlice"


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
    }
});