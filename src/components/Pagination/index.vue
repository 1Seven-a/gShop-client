<template>
    <div class="pagination">
        <button :disabled="myCurrentPage===1" @click="changeCurrent(myCurrentPage-1)">上一页</button>
        <button v-if="startEnd.start !==1" :class="{disabled:myCurrentPage === 1,active:myCurrentPage === 1}" @click="changeCurrent(myCurrentPage = 1)">1</button>
        <button disabled v-if="startEnd.start >2">···</button>

        <button v-for="item in startEndArr" @click="changeCurrent(item)" :class="{disabled:myCurrentPage === item,active:myCurrentPage === item}">{{item}}</button>

        <button disabled v-if="startEnd.end < totalPages - 1">···</button>
        <button v-if="startEnd.end !== totalPages" :class="{disabled:myCurrentPage === totalPages,active:myCurrentPage === totalPages}" @click="changeCurrent(myCurrentPage = totalPages)">{{totalPages}}</button>
        <button :disabled="myCurrentPage===totalPages" @click="changeCurrent(myCurrentPage+1)">下一页</button>

        <button style="margin-left: 30px" disabled>{{total}}</button>
    </div>
</template>
<script>
    export default {
        name: "Pagination",
        props:{
            currentPage:{
                type:Number,
                default:1,
            },
            total:{
                type:Number,
                default:0,
            },
            pageSize:{
                type:Number,
                default:3,
            },
            showPageNo:{
                type:Number,
                default:5,
                validator:function (page){
                    return page%2 === 1
                }
            }
        },
        data(){
            return{
                myCurrentPage:this.currentPage
            }
        },
        computed:{
            totalPages(){
                const{total,pageSize} = this
                 return Math.ceil(total/pageSize)
            },
            startEnd(){
                const{myCurrentPage,showPageNo,totalPages} = this
                let start = myCurrentPage-Math.floor(showPageNo/2)
                if (start<1){
                    start = 1
                }
                let end = start + showPageNo -1
                if (end>totalPages){
                    end = totalPages
                    start = end -showPageNo + 1
                    if (start<1){
                        start = 1
                    }
                }
                 return{start,end}
            },
            startEndArr(){
                const arr = []
                const {start,end} = this.startEnd
                for (let page = start; page <= end; page++) {
                    arr.push(page)
                }
                return arr
            }
        },
        methods:{
            changeCurrent(page){
                if (this.myCurrentPage === page) return
                this.$emit('currentChange',page)
            }
        },
        watch:{
            currentPage(page){
                this.myCurrentPage = page
            }
        }
    }
</script>

<style lang="less" scoped>
  .pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>
