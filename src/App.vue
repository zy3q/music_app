<template>
    <div id="app">
        <HeaderVue/>
        <TabVue/>
         <router-view></router-view>
    </div>
</template>

<script>
import HeaderVue from "./components/Header/Header.vue";
import TabVue from "./components/Tab/Tab.vue";
export default {
    components:{HeaderVue,TabVue},
}
</script>

<style lang="less">
    
</style>
