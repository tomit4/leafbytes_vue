<script setup>
    import { ref, onMounted } from 'vue'
    import {RouterLink} from 'vue-router'
    import treeData from '../views_data/blogtree.json'
    import { delay, toggleTree } from '../../utilities/utils.js'

    const linkEl = ref(null)
    const vertEl = ref(null)
    const horizEl = ref(null)
    const subjEl = ref()

    const lclToggleTree = () => {
        linkEl.value.classList.toggle('link-item-scaled')
        toggleTree(vertEl, subjEl, horizEl, 'blog')
    }

    onMounted(async () => {
        await delay(1200)
        horizEl.value.forEach((el) =>
            el.classList.add('blog-tree-horiz-show'))
        await delay(1000)
        subjEl.value.forEach((el) => {
            el.classList.remove('blog-tree-subject-hidden')
            el.classList.remove('displaynone')
            el.classList.add('blog-tree-subject-show')
        })
    })
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
                class="blog-tree-horiz" :id="`blog-hbar-${data.id}`">
                    <div ref="subjEl" class="blog-tree-subject-hidden displaynone">
                        <router-link class="tree-subject"
                            :id="`blog-subject-${data.id}`"
                            :to="data.link">{{ data.title}}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .blog-tree-vert {
        position: relative;
        background-color : var(--hd-dark-blue);
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
        background-color : var(--hd-dark-blue);
        visibility: hidden;
        width: 0rem;
        height: 0.20rem;
    }

    .blog-tree-horiz-hidden {
        opacity: 0%;
        width: 0;
        visibility: hidden;
        animation: hide-horiz-tree 1s ease-in-out;
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
        animation: blog-subject-show 1s ease-in-out;
    }

    .blog-tree-subject-hidden {
        opacity: 0%;
        animation: blog-subject-hidden 1s ease-in-out;
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
            visibility: hidden;
        }
        100% {
            opacity: 95%;
            visibility: visible;
        }
    }

    @keyframes blog-subject-hidden {
        0% {
            opacity: 95%;
            visibility: visible;
        }
        100% {
            opacity: 0%;
            visibility: hidden;
        }
    }
</style>
