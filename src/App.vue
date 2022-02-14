<template>
    <div id="app">
        <HeaderVue/>
        <TabVue/>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import HeaderVue from "./components/Header/Header.vue";
import TabVue from "./components/Tab/Tab.vue";
export default defineComponent({
    components:{HeaderVue,TabVue},
})
</script>

<style lang="less">

</style>
