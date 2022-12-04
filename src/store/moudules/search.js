/*
管理搜索模块的数据
*/
import {reqSearch} from '@/api'
const state = {
    productList: {}, // 搜索出的商品列表相关数据的对象,
}
const mutations = {
    /*
    接收保存商品列表相关数据对象
    */
    RECEIVE_PRODUCT_LIST(state, productList) {
        state.productList = productList
    }
}
const actions = {

    /*
    根据指定的搜索条件, 异步获取商品列表的action
    */
    async getProductList ({commit}, searchParams) {
        //不想直接删除组件内的options 浅拷贝
        searchParams ={...searchParams}
        //删除searchParams中的空串或数组属z性
        //      console.log('searchParams',searchParams);
        //遍历对象的所有属性
        Object.keys(searchParams).forEach(key =>{
            if (searchParams[key] === '' || (Array.isArray(searchParams[key]) && searchParams[key].length === 0)){
                delete searchParams[key]
            }
        })
        // 1. ajax请求, 获取数据
        const result = await reqSearch(searchParams)
        // 2. 如果成功, 提交给mutation
            if (result.code === 200){
                const productList = result.data
                console.log(result.data);
                commit('RECEIVE_PRODUCT_LIST', productList)
            }
    },
}
const getters = {
    /*商品分页列表*/
    goodsList(state){
        return state.productList.goodsList || []
    },
    /*品牌列表*/
    trademarkList(state){
        return state.productList.trademarkList || []
    },
    /*属性列表*/
    attrsList(state){
        return state.productList.attrsList || []
    },
    /*总数量*/
    total (state){
        return state.productList.total || 0
    },
    productList(){
        return state.productList || []
    },
    getProductList(){
        return actions.getProductList
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
