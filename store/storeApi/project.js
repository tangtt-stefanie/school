import { get,post } from '../../http/request'


export function getListProjectPlan (params) {
    return post('plan/listProjectPlan',params)
}


