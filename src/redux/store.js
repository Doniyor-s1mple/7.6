import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./Reducers/PostReducer";
import api from './middleware/api'
import TodoReducer from "./Reducers/TodoReducer";

const store = configureStore({
    reducer: {
        PostReducer,
        TodoReducer
    },
    middleware: () => [
        api
    ]
})

export default store