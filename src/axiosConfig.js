import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://lpapi.duckpeon.com'
});
instance.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');



export default instance;