import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ecaaa.firebaseio.com/'
});

export default instance;