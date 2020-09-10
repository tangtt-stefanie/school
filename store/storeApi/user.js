/*
 * @Author: MR.T
 * @Date: 2020-08-08 00:40:52
 * @LastEditors: MR.T
 * @LastEditTime: 2020-09-07 16:12:22
 * @Description: No Description
 * @FilePath: \article-manage\store\storeApi\user.js
 */
import { get,post } from '../../http/request'


export function test (params) {
    return post('test',params)
}


export function login (params) {
    return post('sLogin',params)
}

export function logout (params) {
    return get('login/logout')
}


export function fetchUserRoles (params) {
    return get('user/fetchUserRoles',params)
}


export function selectUserRole (params) {
    return post('user/selectUserRole',params)
}
