import {deleteRequest, getRequest, postRequest, putRequest} from "./abstractService";

const plansUrl = 'plans'

export const getPlans = refreshPlans => {
    getRequest(refreshPlans, plansUrl)
}

export const postPlans = (plan, refreshPlans, params) => {
    postRequest(plan, plansUrl, refreshPlans, params)
}

export const deletePlan = (planId, refreshPlans) => {
    deleteRequest(planId, plansUrl, refreshPlans)
}

export const editPlan = (plan, refreshPlans) => {
    putRequest(plan, plansUrl, refreshPlans)
}
