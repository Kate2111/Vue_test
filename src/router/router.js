import Main from "../page/Main.vue";
import Letter from "../page/Letter.vue"
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/testvuevite/',
        component: Main,
    },
    {
        path: '/testvuevite/letter',
        name: 'byLetter',
        component: Letter
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;