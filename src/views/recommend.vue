<template>
推荐
<hr>
    <div v-if="!hits.length">loading~~~~</div>
    <div v-else v-for="(hit,index) in hits" :key="index">
        {{hit.data.text}}
    </div>
</template>
<script>

import { getMusic } from "../http/api";
import { reactive , onMounted , toRefs} from 'vue';
export default {
    name:"recommend",
        setup(props) { 
         const state = reactive ({
             hits:[]
         })
         onMounted( async() => {
            const {data} = await getMusic()  
            state.hits=data.result
         })
         return{
             ...toRefs(state)
         }
    }
}
</script>