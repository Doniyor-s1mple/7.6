import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "./actions";

const slice = createSlice({
    name: 'TodoReducer',
    initialState: {
        todos: [
            { id: 1, title: 'asda', completed: false },
            { id: 2, title: 'avgda', completed: false },
        ]
    },

    reducers: {

        getFromResponse: (state, action) => {
            state.todos = action.payload
        },
        todoSaved: (state, action) => {
            state.todos.unshift({
                id: state.todos.length + 1,
                title: action.payload.title
            })
        },
        todoEdited: (state, action) => {
            state.todos.map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title
                }
            })
        },
        todoDeleted: (state, action) => {
            state.todos.splice(action.payload, 1)
        }

    }
})

export const getTodos = () => apiCall({
    url: '/todos',
    method: 'get',
    onSuccess: getFromResponse
})

export const saveTodo = (data) => apiCall({
    url: '/todos',
    method: 'post',
    data,
    onSuccess: todoSaved
})

export const editTodo = (data) => apiCall({
    url: '/todos/' + data.id,
    method: 'put',
    data,
    onSuccess: todoEdited
})

export const delTodo = (data) => apiCall({
    url: '/todos/' + data.id,
    method: 'delete',
    data,
    onSuccess: todoDeleted
})



export default slice.reducer
const { getFromResponse, todoSaved, todoEdited, todoDeleted } = slice.actions