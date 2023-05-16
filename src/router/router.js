import Main from "../page/Main.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/testvuevite/',
        component: Main,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;