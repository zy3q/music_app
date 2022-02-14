<template>
<div class="nav">
    <router-link class="tab-item" :to="tab.path" v-for="tab in tabs">
        <span>{{tab.name}}</span>
    </router-link> 
</div>
</template>
<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
    name:"tab",
    setup(){
        const tabs = reactive([
            {
                name:'推荐',
                path:'/recommend'
            },
            {
                name:"歌手",
                path:'/singer'
            },
            {
                name:"排行",
                path:'/topList'
            },
            {
                name:"搜索",
                path:"/search"
            }
        ])
        return {
            tabs
        }        
    }
})
</script>
<style lang="less" scoped>
 .nav{
     margin-top: 10px;
     display: flex;
     .tab-item{
        flex: 1;
        text-align: center;

     }
     .router-link-active{
         span{
             color: orange;
             border-bottom: 1px solid orange;
         }
     }
 }
</style>