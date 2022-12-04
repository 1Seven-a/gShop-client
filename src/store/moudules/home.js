/*
管理首页相关数据的vuex子模块
 */
import {reqBannerList, reqCategoryList, reqFloors} from "@/api"

const state = {
    categoryList:[],
    bannerList:[],
    floors:[]
}
const mutations = {
    //接收保存分类列表
    RECEIVE_CATEGORY_LIST(state,categoryList){
        state.categoryList = categoryList.splice(0,15)
    },
    //接收保存广告轮播列表
    RECEIVE_BANNER_LIST(state,bannerList){
        state.bannerList = bannerList
    },
    //接收保存楼层信息列表
    RECEIVE_FLOORS(state,floors){
        state.floors = floors
    },
}
//获取三级分类的异步action

const actions = {
    async getCategoryList({commit}){
        //    发异步请求ajax请求(调用接口请求函数)
        const result = await reqCategoryList()
    //    如果成功了，得到数据提交给mutation
        if (result.code === 200){
            const CategoryList = result.data
            commit('RECEIVE_CATEGORY_LIST',CategoryList)
        }
    },
    async getBannerList({commit}){
        //    发异步请求ajax请求(调用接口请求函数)
        const result = await reqBannerList()
        //    如果成功了，得到数据提交给mutation
        if (result.code === 200){
            const bannerList = result.data
            commit('RECEIVE_BANNER_LIST',bannerList)
        }
    },
    async getFloors({commit}){
        //    发异步请求ajax请求(调用接口请求函数)
        const result = await reqFloors()
        //    如果成功了，得到数据提交给mutation
        if (result.code === 200){
            const floors = result.data
            commit('RECEIVE_FLOORS',floors)
        }
    },
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
