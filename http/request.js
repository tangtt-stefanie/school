/*
 * @Author: MR.T
 * @Date: 2020-08-09 19:47:37
 * @LastEditors: MR.T
 * @LastEditTime: 2020-09-08 21:33:36
 * @Description: No Description
 * @FilePath: \article-manage\http\request.js
 */
/**
 * request.js
 * 通过promise对axios做二次封装，针对用户端参数，做灵活配置
 */
import { Message,Loading } from 'element-ui';
import instance from './interceptor'
// import instance from 'axios'


/**
 * 核心函数，可通过它处理一切请求数据，并做横向扩展
 * @param {url} 请求地址
 * @param {params} 请求参数
 * @param {options} 请求配置，针对当前本次请求；
 * @param loading 是否显示loading
 * @param mock 本次是否请求mock而非线上
 * @param error 本次是否显示错误
 */
function request(url,params,options={loading:true,mock:true,error:false},method){
    let loadingInstance;
    // 请求前loading
    if(options.loading)loadingInstance=Loading.service();
    return new Promise((resolve,reject)=>{
        let data = {}
        // get请求使用params字段
        if(method =='get')data = {params}
        // post请求使用data字段
        if(method =='post')data = {data:params}
        instance({
            url:options.mock? ('/mock'+url) : url,
            method,
            ...data
        }).then((res)=>{
            // 此处作用很大，可以扩展很多功能。
            // 比如对接多个后台，数据结构不一致，可做接口适配器
            // 也可对返回日期/金额/数字等统一做集中处理
            // if(res.code === '0000'){
            //     resolve(res);
            // }else{
            //     // 通过配置可关闭错误提示
            //     if(options.error)Message.error(res.msg);
            //     reject(res);
            // }
            resolve(res);
        }).catch((error)=>{
            Message.error(error.message)
        }).finally(()=>{
            loadingInstance.close();
        })
    })
}
// 封装GET请求
export function get(url,params,options){
    return request(url,params,options,'get')
}
// 封装POST请求
export function post(url,params,options){
    return request(url,params,options,'post')
}

export const http = {get,post}
