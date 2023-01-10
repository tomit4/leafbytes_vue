import {createRouter, createWebHistory} from "vue-router"
import App from "../App.vue"
import Body from "../components/Body.vue"
import AboutView from "../views/AboutView.vue"
import HomeView from "../views/HomeView.vue"
import LinksView from "../views/LinksView.vue"
import NotFoundView from "../views/404View.vue"

import BlogView from "../views/BlogView.vue"
import Article_01 from "../views/views_articles/Article_01.vue"
import Article_02 from "../views/views_articles/Article_02.vue"
import Article_03 from "../views/views_articles/Article_03.vue"

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
            path: "/blog/:",
            components: {
                default: BlogView,
                body: Body
            },
            children: [
                {
                    path: 'one-with-the-keyboard',
                    name: 'one-with-the-keyboard',
                    component: Article_01
                },
                {
                    path: 'command-line',
                    name: 'command-line',
                    component: Article_02
                },
                {
                    path: 'why-use-linux',
                    name: 'why-use-linux',
                    component: Article_03
                },
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
