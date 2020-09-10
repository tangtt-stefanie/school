/*
 * @Author: MR.T
 * @Date: 2020-08-08 00:40:52
 * @LastEditors: MR.T
 * @LastEditTime: 2020-09-09 10:56:32
 * @Description: No Description
 * @FilePath: \article-manage\store\modules\project.js
 */
import { getListProjectPlan , addProjectPlan , editProjectPlan , deleteProjectPlan} from '../storeApi/project'
import { promise } from '../../util/util'

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
    // 查询集团项目计划列表
    GetListProjectPlan ({ commit,state }, params) {
        return promise(getListProjectPlan,params,)
    },

    // 新增项目计划
    AddProjectPlan ({ commit,state }, params) {
        return promise(addProjectPlan,params,)
    },

    // 新增项目计划
    EditProjectPlan ({ commit,state }, params) {
        return promise(editProjectPlan,params,)
    },

    // 删除计划
    DeleteProjectPlan ({ commit,state }, params) {
        return promise(deleteProjectPlan,params,)
    },

};
export default {
    namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}