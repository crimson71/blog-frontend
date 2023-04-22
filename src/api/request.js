import axios from 'axios'
import { ElMessage } from 'element-plus'
const baseUrl = 'http://localhost:80/'
export const baseImgUrl = 'http://127.0.0.1/'
const NETWORK_ERROR = '糟糕，网络异常，请稍后重试'

const service = axios.create({
  baseURL: baseUrl

})

service.interceptors.request.use((req) => {
  return req
})

service.interceptors.response.use((res) => {
  const { code, data, message } = res.data
  if (code === 200) {
    return {
      code,
      data,
      message
    }
  } else {
    ElMessage.error({
      message: message || NETWORK_ERROR,
      duration: 3000
    })
    return Promise.reject(message || NETWORK_ERROR)
  }
})

export default function request (options) {
  options.method = options.method || 'GET'
  if (options.method.toUpperCase() === 'GET') {
    options.paramas = options.data
  }
  return service(options)
}
