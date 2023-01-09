import {createRouter, createWebHistory} from "vue-router"
import App from "../App.vue"
import Body from "../components/Body.vue"
import ContactView from "../views/ContactView.vue"
import AboutView from "../views/AboutView.vue"
import HomeView from "../views/HomeView.vue"
import LinksView from "../views/LinksView.vue"
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
            path: "/about",
            name: "about",
            components: {
                default: AboutView,
                body: Body
            }
        },
        {
            path: "/links",
            name: "links",
            components: {
                default: LinksView,
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
