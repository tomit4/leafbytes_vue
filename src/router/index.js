import {createRouter, createWebHistory} from "vue-router"
import App from "../App.vue"
import Body from "../components/Body.vue"
import TestView from "../views/TestView.vue"
import NotFoundView from "../views/404View.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: App
        },
        {
            path: "/test",
            name: "test",
            components: {
                default: TestView,
                body: Body
            }
        },
        {
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: NotFoundView,
        },
    ]
})

export default router
