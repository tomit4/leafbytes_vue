import {createRouter, createWebHistory} from "vue-router"
import App from "../App.vue"
import Body from "../components/Body.vue"
import AboutView from "../views/AboutView.vue"
import HomeView from "../views/HomeView.vue"
import LinksView from "../views/LinksView.vue"
import NotFoundView from "../views/404View.vue"

import BlogView from "../views/BlogView.vue"
import Article_01 from "../views/views_articles/Article_01.vue"

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
            path: "/blog/:id",
            components: {
                default: BlogView,
                body: Body
            },
            children: [
                {
                    path: '',
                    name: 'one-with-the-keyboard',
                    component: Article_01
                }
            ]
        },
        {
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: NotFoundView,
        },
    ]
})

export default router
