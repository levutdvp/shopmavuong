import { createMemoryHistory, createRouter } from "vue-router";

import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import Home from "./pages/Home.vue";
import Error from "./pages/error.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login},
    { path: "/register", component: Register},
    { path: "/reset", component: Error },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router;