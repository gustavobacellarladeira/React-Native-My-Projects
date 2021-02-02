import axios from 'axios'


const api = axios.create({
    baseURL: "https://grupo-delta.herokuapp.com/user/"
})

export default api