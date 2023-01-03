import {createRouter, createWebHistory} from "vue-router"
import Home from "../components/Home.vue"
import TestView from "../views/TestView.vue"
import NotFoundView from "../views/404View.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/test",
            name: "test",
            component: TestView
        },
        {
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: NotFoundView,
        },
    ]
})

export default router
