//所有路由匹配的数组
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Detail from "@/pages/detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import Shopcart from "@/pages/ShopCart";
    export default [
    {
        path:'/',
        component:Home,

    },
   {
        path:'/detail/:skuId',
        component:Detail,
        name:'detail'

    },
    {
        path:'/shopcart',
        component:Shopcart,
        name:'shopcart'

    },
    {
        path:'/addcartsuccess',
        component:AddCartSuccess,
        name:'addCartSuccess'

    },
    {
        path:'/login',
        component:Login,
        name:'Login',
        meta:{
            isHideFooter:true
        }
    },
    {
        path:'/search/:keyword?',
        component:Search,
        name:'Search',

    },
    {
        name:Register,
        path:'/register',
        component:Register,
        meta:{
            isHideFooter:true
        }
    },

]
