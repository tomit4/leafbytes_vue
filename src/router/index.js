import {createRouter, createWebHistory} from "vue-router"
import App from "../App.vue"
import Body from "../components/Body.vue"
import TestView from "../views/TestView.vue"
import TestView2 from "../views/TestView2.vue"
import TestView3 from "../views/TestView3.vue"
import ContactView from "../views/ContactView.vue"
import HomeView from "../views/HomeView.vue"
import NotFoundView from "../views/404View.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "root",
            component: App,
            redirect: "/home"
        },
        {
            path: "/home",
            name: "home",
            components: {
                default: HomeView,
                body: Body
            }
        },
        {
            path: "/contact",
            name: "contact",
            components: {
                default: ContactView,
                body: Body
            }
        },
        {
            path: "/test2",
            name: "test2",
            components: {
                default: TestView2,
                body: Body
            }
        },
        {
            path: "/test3",
            name: "test3",
            components: {
                default: TestView3,
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
