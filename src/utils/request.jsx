// 封装请求拦截器和响应拦截器
// 引入axios 
import axios from 'axios'

// 引入发送请求时的顶部进度条插件及样式
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

 const ajax = axios.create({
     baseURL: '/api',     
     timeOut: 20000      // 连接请求超时时间
 })

 // 请求拦截器
ajax.interceptors.request.use(config=>{
    // console.log(config)
    // 显示进度条 响应成功
    Nprogress.start()
    // if(token){
    //     config.headers['token'] = token
    // }
    return config
}, error => {
    return Promise.reject(error)
})

 // 响应拦截器
ajax.interceptors.response.use(response => {
    // 隐藏进度条
    Nprogress.done()
    // 响应成功返回数据
    return response.data
},error => {
    // 隐藏进度条
    Nprogress.done()
    alert('请求错误' + error.message || '未知错误')

    // 中断promise链 具体请求不再处理
    return Promise.reject(error)   
})

export default ajax
