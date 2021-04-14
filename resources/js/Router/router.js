import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/Login/login'
import signup from '../components/Login/signup'
Vue.use(VueRouter)

const routes = [
    {path: '/login', component: login},
    {path:'/signup',component:signup}
]

const router = new VueRouter({
    routes,
     mode:'history'
})

export default router