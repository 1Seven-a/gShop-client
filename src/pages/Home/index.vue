<template>
    <div>
        <TypeNav/>
        <list-container/>
        <today-recommend/>
        <Like/>
        <Rank/>
        <Floor/>
        <Floor v-for="floor in floors" :key="floor.id" :floor="floor"/>
        <Brand/>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import listContainer from "@/pages/Home/ListContainer";
    import todayRecommend from "@/pages/Home/TodayRecommend";
    import Rank from "@/pages/Home/Rank/Rank";
    import Like from "@/pages/Home/Like/Like";
    import Floor from "@/pages/Home/Floor/Floor";
    import Brand from "@/pages/Home/Brand/Brand";
    import TypeNav from "@/components/TypeNav";


    export default {
        name: "Home",
        mounted() {
            this.$store.dispatch('getFloors')
        },
        computed:{
            ...mapState({
                floors: state => state.home.floors
            })
        },
        //注册局部组件
        components: {listContainer,todayRecommend,Brand,Floor,Like,Rank,TypeNav},

    }
</script>

<style lang="less" scoped>

</style>
