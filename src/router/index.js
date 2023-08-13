import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import ('../views/AboutView.vue')
    },
    {
        path: '/databinding',
        name: 'DataBinding',
        component: DataBinding
    },
    {
        path: '/databindinghtml',
        name: 'DataBindingHtml',
        component: () => import ('../views/DataBindingHtml.vue')
    },
    {
        path: '/databindinginputtext',
        name: 'DataBindingInputText',
        component: () => import ('../views/DataBindingInputText.vue')
    },
    {
        path: '/databindinginputnumber',
        name: 'DataBindingInputNumber',
        component: () => import ('../views/DataBindingInputNumber.vue')
    },
    {
        path: '/databindinglist',
        name: 'DataBindingList',
        component: () => import ('../views/DataBindingList.vue')
    },
    {
        path: '/databindinglist2',
        name: 'DataBindingList2',
        component: () => import ('../views/DataBindingList2.vue')
    },
    {
        path: '/nested',
        name: 'Nested',
        component: () => import ('../views/NestedComponent.vue')
    }
]

// router를 router/index.js에다가 라우터를 넣어주는 것
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router