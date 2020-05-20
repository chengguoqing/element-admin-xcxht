import axios from 'axios'
import {
    MessageBox,
    Message
} from 'element-ui'
import store from '@/store'
import {
    getToken
} from '@/utils/auth'

// create an axios instance
const service = axios.create({
    baseURL: 'http://test.api.zmlaodong.com', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})
service.interceptors.request.use(
    config => {
        config.headers['userId'] = 1
        config.headers['realName'] = 'tx'
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        const res = response.data

        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== '0') {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })

            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            return res || res
        }
    },
    error => {
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
