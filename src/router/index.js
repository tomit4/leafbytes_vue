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
import Article_04 from "../views/views_articles/Article_04.vue"
import Article_05 from "../views/views_articles/Article_05.vue"
import Article_06 from "../views/views_articles/Article_06.vue"
import Article_07 from "../views/views_articles/Article_07.vue"
import Article_08 from "../views/views_articles/Article_08.vue"
import Article_09 from "../views/views_articles/Article_09.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
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
            path: "/:?",
            components: {
                default: BlogView,
                body: Body
            },
            children: [
                {
                    path: "/",
                    name: "home",
                    components: HomeView,
                },
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
                {
                    path: 'musings-on-vim',
                    name: 'musings-on-vim',
                    component: Article_04
                },
                {
                    path: 'the-keys-that-bind',
                    name: 'the-keys-that-bind',
                    component: Article_05
                },
                {
                    path: 'ortholinear-keyboards',
                    name: 'ortholinear-keyboards',
                    component: Article_06
                },
                {
                    path: 'espanso-text-expander',
                    name: 'espanso-text-expander',
                    component: Article_07
                },
                {
                    path: 'git-basics',
                    name: 'git-basics',
                    component: Article_08
                },
                {
                    path: 'the-readme',
                    name: 'the-readme',
                    component: Article_09
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
