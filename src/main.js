import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局引入样式文件
import './assets/less/index.less'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
