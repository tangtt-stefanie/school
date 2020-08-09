import { test , login , fetchUserRoles , selectUserRole} from '../storeApi/user'
import { promise } from '../util'

const state={
    username:'',
    password:'',
    token:''
};

const getters={
    username(state){ //承载变化的collects
        return state.username;
    },
    token(state){ //承载变化的collects
        return state.token;
    },
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

    FetchUserRoles ({ commit,state }, params) {
        console.log('fetchUserRoles')
        return promise(fetchUserRoles,params)
    },

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