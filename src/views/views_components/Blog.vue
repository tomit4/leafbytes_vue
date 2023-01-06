<script setup>
    import {RouterLink} from "vue-router"
    import treeData from '../views_data/blogtree.json'
</script>

<template>
    <div>
        <div ref="linkEl" class="link-item link-item-scaled blog"
        @click="lclToggleTree()">blog</div>
        <div class="blog-tree">
            <div class="tree-container">
                <div ref="vertEl" class="blog-tree-vert
                blog-tree-vert-show"></div>
                <div ref="horizEl" v-for="data in treeData"
                class="blog-tree-horiz blog-tree-horiz-show" :id="`blog-hbar-${data.id}`">
                    <router-link ref="subjEl"
                        class="tree-subject blog-tree-subject-show"
                        :id="`blog-subject-${data.id}`"
                        :to="data.link">{{ data.title}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .blog-tree-vert {
        position: relative;
        background-color : rgba(0, 44, 70, 1);
        width: 0.20rem;
        margin: 0rem 0 0rem 0.25rem;
    }

    .blog-tree-vert-show {
        animation: blog-show-vert-tree 1s ease-in-out;
        visibility: visible;
        height: 19rem;
    }

    .blog-tree-vert-hidden {
        animation: blog-hide-vert-tree 1s ease-in-out;
        visibility: hidden;
        height: 0;
    }

    .blog-tree-horiz  {
        position: absolute;
        background-color : rgba(0, 44, 70, 1);
        visibility: hidden;
        width: 0rem;
        height: 0.15rem;
    }

    .blog-tree-horiz-show {
        opacity: 100%;
        width: 1rem;
        visibility: visible;
        animation: show-horiz-tree 1s ease-in-out;
    }

    .blog-tree-subject-show {
        opacity: 95%;
        visibility: visible;
        /* width: 5rem; */
        /* background-color : white; */
        animation: blog-subject-show 1s ease-in-out;
    }

    #blog-subject-1 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #blog-hbar-1 {
        margin: -18rem 0 0 0.25rem;
    }

    #blog-subject-2{
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #blog-hbar-2 {
        margin: -16rem 0rem 0rem 0.25rem;
    }

    #blog-subject-3 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #blog-hbar-3 {
        margin: -14rem 0rem 0rem 0.3rem;
    }

    #blog-subject-4 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #blog-hbar-4 {
        margin: -12rem 0rem 0rem 0.25rem;
    }

    #blog-subject-5 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #blog-hbar-5 {
        margin: -10rem 0rem 0rem 0.25rem;
    }

    #blog-subject-6 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #blog-hbar-6 {
        margin: -8rem 0rem 0rem 0.25rem;
    }

    #blog-subject-7 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #blog-hbar-7 {
        margin: -6rem 0rem 0rem 0.25rem;
    }

    #blog-subject-8 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #blog-hbar-8 {
        margin: -4rem 0rem 0rem 0.25rem;
    }

    #blog-subject-9 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #blog-hbar-9 {
        margin: -2rem 0rem 0rem 0.25rem;
    }

    #blog-subject-10 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #blog-hbar-10 {
        margin: -0rem 0rem 0rem 0.25rem;
    }

/* *********************
    ANIMATIONS
   *********************/
    @keyframes blog-show-vert-tree {
        from {
            height: 0;
            visibility: hidden;
        }
        to {
            height: 19rem;
            visibility: visible;
        }
    }

    @keyframes blog-hide-vert-tree {
        from {
            height: 19rem;
            visibility: hidden;
        }
        to {
            height: 0;
            visibility: visible;
        }
    }

    @keyframes show-horiz-tree {
        from { width: 0; visibility: hidden; opacity: 0%; }
        to { width: 1rem; visibility: visible; opacity: 100%;}
    }

    @keyframes hide-horiz-tree {
        from { width: 1rem; visibility: visible; opacity: 100%;}
        to { width: 0; visibility: hidden; opacity: 0%; }
    }

    @keyframes blog-subject-show {
        0% {
            opacity: 0%;
        }
        100% {
            opacity: 95%;
        }
    }

    @keyframes blog-subject-hidden {
        0% {
            opacity: 95%;
        }
        100% {
            opacity: 0%;
        }
    }
</style>
