import {reqAddOrUpdateCart, reqUpDateCartChecked, reqCartList, reqDeleteCart} from "@/api";
const state = {
    shopCartList:[],
}
const mutations = {
    RECEIVE_SHOPCARTLIST(state,shopCartList){
        state.shopCartList = shopCartList[0]
    },
}
const actions = {
    async addOrUpdateCart({commit},{skuId,skuNumber}){
        const result = await reqAddOrUpdateCart(skuId,skuNumber)
        if (result.code === 200){
            return 'ok'
        }else {
            return Promise.reject(new Error('failed'))
        }
    },
    async getCartList({commit}){
        const result = await reqCartList()
        if (result.code === 200){
            commit('RECEIVE_SHOPCARTLIST',result.data)
             // console.log(result.data);
        }
    },
    async UpDateCartChecked({commit},{skuId,isChecked}){
        const result = await reqUpDateCartChecked(skuId,isChecked)
        if (result.code === 200){
            return 'ok'
        }else {
            return Promise.reject(new Error('failed'))
        }
    },
    async UpDateCartCheckedAll({commit,dispatch,getters},isChecked){
        let promises = []
        getters.cartInfoList.forEach(item =>{
            if (item.isChecked === isChecked) return
            let promise =  dispatch('UpDateCartChecked',{skuId:item.skuId,isChecked})
             console.log(item.isChecked);
            promises.push(promise)

        })
         return  Promise.all(promises)
    },
    async deleteCart({commit},skuId){
        const result =  await reqDeleteCart(skuId)
        if (result.code === 200){
            return 'ok'
        }else {
            return Promise.reject(new Error('failed'))
        }
    },

}
const getters = {
    cartInfoList(state){
        if (state.shopCartList){
            return state.shopCartList.cartInfoList || []
        }else {
            return []
        }

    }
}


export default {
    state,
    mutations,
    actions,
    getters
}
