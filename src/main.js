import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './data/store'
import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)


app.use(store).use(router).mount('#app')
