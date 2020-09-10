/*
 * @Author: MR.T
 * @Date: 2020-08-08 00:40:52
 * @LastEditors: MR.T
 * @LastEditTime: 2020-09-08 22:28:22
 * @Description: No Description
 * @FilePath: \article-manage\store\storeApi\project.js
 */
import { get,post } from '../../http/request'

//获取计划列表
export function getListProjectPlan (params) {
    return post('/plan/getPlan',params)
}

//新增计划
export function addProjectPlan (params) {
    return post('/plan/addPlan',params)
}

//编辑计划
export function editProjectPlan (params) {
    return post('/plan/editPlan',params)
}

//删除计划
export function deleteProjectPlan (params) {
    return post('/plan/deletePlan',params)
}


