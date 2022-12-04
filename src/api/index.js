//  包含应用的所有接口的接口请求函数
//  函数内部调用ajax函数发送请求
//    函数返回的是promise对象

import ajax from "@/api/ajax";
import mockAjax from "@/api/mockAjax";
/*首页三级分类
  /api/product/getBaseCategoryList GET
*/

export function reqCategoryList(){
        // return ajax.get("/product/getBaseCategoryList")
    return ajax({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}

//获取首页广告轮播

//  /api/cms/banner GET
export const reqBannerList = () => ajax('/cms/banner')

//mock接口函数
export const reqFloors =() => mockAjax('/floors')

// reqFloors().then(result => {
//      console.log('result---',result);
// })

//搜索分页列表
// /api/list POST

export const reqSearch = (searchParams)=>ajax.post('/list',searchParams)

//获取详情数据
//api/item/{skuId} get

export const  reqDetailInfo = (skuId) =>{
    return ajax({
        url:`/item/${skuId}`,
        method:'get'
    })
}

//添加购物车（修改购物车的商品数量）
// /api/cart/addToCart/{ skuId }/{ skuNum }

export const  reqAddOrUpdateCart = (skuId,skuNumber)=>{
    return ajax({
        url:`/cart/addToCart/${skuId}/${skuNumber}`,
        method:'post'
    })
}

//获取购物车列表
// /api/cart/cartList
export const reqCartList = ()=>{
    return ajax({
        url:'/cart/cartList',
        method:'get'
    })
}

//修改单个购物车数量
// /api/cart/checkCart/{ skuId }/{ isChecked }

export const  reqUpDateCartChecked = (skuId,isChecked)=>{
    return ajax({
        url:`/cart/checkCart/${skuId}/${isChecked}`,
        method:'get'
    })
}

 // /api/cart/deleteCart/{ skuId }
//删除购物车
export const reqDeleteCart = (skuId) =>{
    return ajax({
        url:`/cart/deleteCart/${ skuId }`,
        method:'delete'
    })
}
