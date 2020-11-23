import Axios from 'axios';

const Api = Axios.create({
    baseURL: 'http://10.0.0.102:3333',
});

export default Api;