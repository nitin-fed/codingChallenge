import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://codechallenge-eaad0.firebaseio.com/'
})

export default axiosInstance