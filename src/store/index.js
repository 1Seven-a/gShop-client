/*
vuex最核心的管理对象store ==> 仓库
* */

import Vue from "vue";
import Vuex from "vuex"

import home from "@/store/moudules/home";
import user from "@/store/moudules/user";
import search from "@/store/moudules/search";
import detail from "@/store/moudules/detail"
import shopcart from "@/store/moudules/shopcart";
Vue.use(Vuex)

const mutations = {
  xxx(state){

  }
}
const actions = {
    yyy({commit}){

    }

}

const getters = {
    zzz(state){

    }
}
export default new Vuex.Store({
    mutations,
    actions,
    getters,
    modules:{
        home,
        user,
        search,
        detail,
        shopcart
    }
})

