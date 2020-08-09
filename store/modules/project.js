import { getListProjectPlan } from '../storeApi/project'


const state={
    projectPlanList:'',
    projectPlanFormLine:{}
};

const getters={
    projectPlanList(state){ 
        return state.projectPlanList;
    },
    projectPlanFormLine(state){
        return state.projectPlanFormLine;
    },
};

const mutations={
    SET_PROJECTPLANLIST(state,projectPlanList){
        state.projectPlanList = projectPlanList
    },
    SET_PROJECTPLANFORMLINE: (state, projectPlanFormLine) => {
        state.projectPlanFormLine = projectPlanFormLine
    },
};

const actions={
    // 查询教科研项目计划列表
    GetListProjectPlan ({ commit,state }, formLine) {
        return getListProjectPlan(formLine).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
    },

};
export default {
    namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}