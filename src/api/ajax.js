//axios 二次封装
/*
对axios进行二次包装
1. 配置通用的基础路径和超时
2. 显示请求进度条
3. 成功返回的数据不再是response, 而直接是响应体数据response.data
4. 统一处理请求错误, 具体请求也可以选择处理或不处理
*/

import axios from "axios";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from "@/store";

//1. 配置通用的基础路径和超时
//service是一个能发任意ajax请求的函数，当然可以作为对象使用
const service = axios.create({
    baseURL:'/api',//基础路径
    timeout:20000,//超时时间
})


//添加请求拦截器
   service.interceptors.request.use((config)=>{
   // 显示请求进度条：
       NProgress.start()
       let userTempId = store.state.user.userTempId
       if (userTempId){
           config.headers.userTempId = userTempId
       }
   //    必须返回config
       return config //后面会根据返回的config，使用xhr对象发ajax请求
   })

//添加相应拦截器
    service.interceptors.response.use(
        response =>{//请求成功返回的回调

            NProgress.done()
            return response.data
        },
        error => {//请求失败的回调
            // throw error
            NProgress.done()
            alert(error.message || '未知的请求错误')
            return Promise.reject(error)
        }

        )



//向外暴露

export default service
