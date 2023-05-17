import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://192.168.100.2:2010/api',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});

export default Axios;