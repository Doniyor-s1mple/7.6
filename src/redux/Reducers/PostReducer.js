import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "./actions";

const slice = createSlice({
    name: 'PostReducer',
    initialState: {
        posts: [
            { id: 1, title: 'asda', body: 'afaw' },
            { id: 2, title: 'avgda', body: 'casda' },
        ]
    },

    reducers: {
        getFromResponse: (state, action) => {
            state.posts = action.payload
        },
        postSaved: (state, action) => {
            state.posts.unshift({
                id: state.posts.length + 1,
                title: action.payload.title,
                body: action.payload.body
            })
        },
        editupdated: (state, action) => {
            state.posts.map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title
                    item.body = action.payload.body
                }
            })
        },
        postDeleted: (state, action) => {
            state.posts.splice(action.payload, 1)
        }
    }
})

export const getPosts = () => apiCall({
    url: '/posts',
    method: 'get',
    onSuccess: getFromResponse
})

export const savePost = (data) => apiCall({
    url: '/posts',
    method: 'post',
    data,
    onSuccess: postSaved
})

export const editPost = (data) => apiCall({
    url: '/posts/' + data.id,
    method: 'put',
    data,
    onSuccess: editupdated
})

export const delPost = (data) => apiCall({
    url: '/posts/' + data.id,
    method: 'delete',
    data,
    onSuccess: postDeleted
})

export default slice.reducer
const { getFromResponse, postSaved, editupdated, postDeleted } = slice.actions