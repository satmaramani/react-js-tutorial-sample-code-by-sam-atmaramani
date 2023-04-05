import axios from 'axios';

let instance = axios.create({
    baseURL: "https://example.com"
}) 

function AxiosInterceptor({children}) {
    console.log(children);
    console.log("I am inside AXIOS InterCeptor")
    return children;
}

export default instance;
export {AxiosInterceptor}