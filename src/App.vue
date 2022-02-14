<template>
    <div id="app">
        <HeaderVue/>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import HeaderVue from "./components/Header/Header.vue";
export default defineComponent({
    components:{HeaderVue},
})
</script>

<style lang="less">

</style>
