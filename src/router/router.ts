import { createWebHistory, createRouter } from "vue-router";

import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Home from "../pages/Home.vue";
import Error from "../pages/error.vue";

const routes = [
    { path: "/login", component: Login},
    { path: "/", component: Home },
    { path: "/register", component: Register},
    { path: "/reset", component: Error},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;