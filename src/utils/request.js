

// 引入axios
import axios from "axios";

// 引入qs
import qs from 'qs';





// 服务器地址
axios.defaults.baseURL = "http://172.16.6.237:5000";
// 超时响应
axios.defaults.timeout = 4000;


// get和post请求
export default {
    // get
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, { params })
                // 成功
                .then(response => {
                    resolve(response.data);
                })
                // 失败
                .catch(err => {
                    reject(err)
                })
        })
    },
    // post
    post(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.post(url, qs.stringify(params))
                // 成功
                .then(response => {
                    resolve(response.data);
                })
                // 失败
                .catch(err => {
                    reject(err)
                })
        })
    }
}