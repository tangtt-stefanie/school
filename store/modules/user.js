/*
 * @Author: MR.T
 * @Date: 2020-08-08 00:40:52
 * @LastEditors: MR.T
 * @LastEditTime: 2020-09-09 10:54:38
 * @Description: No Description
 * @FilePath: \article-manage\store\modules\user.js
 */
import { test , login , logout , fetchUserRoles , selectUserRole} from '../storeApi/user'
import { promise } from '../../util/util'

const state={
};

const getters={
    
};

const mutations={
    SET_USERNAME(state,username){ //如何变化collects,插入items
        state.username = username
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
};

const actions={

    // 登录
    Login ({ commit,state }, params) {
        console.log('Login')
        return promise(login,params)
    },

    // 退出
    Logout ({ commit,state }, params) {
        console.log('Logout')
        return promise(logout,params)
    },

    //获取账号对应的角色列表信息
    FetchUserRoles ({ commit,state }, params) {
        console.log('fetchUserRoles')
        return promise(fetchUserRoles,params)
    },

    //选择当前要登录的角色
    SelectUserRole ({ commit,state }, params) {
        console.log('SelectUserRole')
        return promise(selectUserRole,params)
    },
};


export default {
    namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}