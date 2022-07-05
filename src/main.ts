import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 引入 Element Plus 组件库*/
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './service'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
