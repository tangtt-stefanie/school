import { get,post } from '../../http/request'


export function test (params) {
    return post('test',params)
}


export function login (params) {
    return post('sLogin',params)
}


export function fetchUserRoles (params) {
    return post('user/fetchUserRoles',params)
}


export function selectUserRole (params) {
    return post('user/selectUserRole',params)
}
