import{ createApp } from 'vue'
import {createRouter,createWebHistory} from 'vue-router'
import App from './App.vue'

const router = createRouter({
    history :createWebHistory(),
    routes:[{
        parh:'/',name:'Home',component:HTMLModElement.vue
    }]
})


createApp (App).mount ('#app')

