import axios from "axios"

const api = ({ dispatch }) => (next) => (action) => {

    if (action.type !== 'apiCall') {
        next(action)
        return
    }

    next(action)

    const { url, method, onSuccess,data } = action.payload
    axios({
        baseURL: 'https://jsonplaceholder.typicode.com',
        url,
        method,
        data
    }).then(res => dispatch({
        type: onSuccess,
        payload: res.data
    }))


}

export default api