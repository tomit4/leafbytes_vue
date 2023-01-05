<script setup>
    import { ref, onMounted } from 'vue'
    /* import {RouterLink} from "vue-router" */
    import treeData from '../views_data/portfoliotree.json'
    import { delay } from '../../utilities/utils.js'

    const vertEl = ref(null)
    const horizEl = ref(null)
    const subjEl = ref(null)

    /* function showTree(className) { */
        /* console.log(`you clicked on the ${className} tree`) */
    /* } */

    onMounted(async () => {
            await delay(1000)
            horizEl.value.forEach((el) => {
                el.classList.add('portfolio-tree-horiz-show')
            })
            await delay(1000)
            subjEl.value.forEach((el) => {
                el.classList.remove('portfolio-tree-subject-hidden')
                el.classList.add('portfolio-tree-subject-show')
            })
    })
</script>

<template>
    <div>
            <div class="link-item link-item-scaled portfolio"
            @click="showTree('portfolio')">portfolio</div>
            <div class="portfolio-tree">
                <div class="tree-container">
                    <div ref="vertEl" class="portfolio-tree-vert
                    portfolio-tree-vert-show"></div>
                     <div ref="horizEl" v-for="data in treeData"
                     class="portfolio-tree-horiz" :id="`portfolio-hbar-${data.id}`">
                        <a ref="subjEl" class="tree-subject portfolio-tree-subject-hidden"
                        :id="`portfolio-subject-${data.id}`" target="_blank"
                        rel="noopener noreferrer" :href="data.link">{{ data.title }}</a>
                    </div>
                </div>
            </div>
    </div>

<!-- <router-link to="/test">test</router-link> -->

</template>

<style>
    .link-item-scaled {
        transform: scale(1.03);
    }

    .portfolio-tree-vert {
        position: relative;
        background-color : var(--hd-dark-blue);
        width: 0.20rem;
    }

    .portfolio-tree-vert-show {
        animation: portfolio-show-vert-tree 1s ease-in-out;
        visibility: visible;
        height: 7.25rem;
    }

    .portfolio-tree-vert-hidden {
        animation: portfolio-hide-vert-tree 1s ease-in-out;
        visibility: hidden;
        height: 0;
    }

    .portfolio-tree-horiz  {
        position: absolute;
        background-color : rgba(0, 44, 70, 1);
        height: 0.15rem;
        left: -0.1rem;
    }

    .portfolio-tree-horiz-show {
        opacity: 100%;
        width: 1rem;
        visibility: visible;
        animation: show-horiz-tree 1s ease-in-out;
    }

    .portfolio-tree-horiz-hidden {
        opacity: 0%;
        width: 0;
        visibility: hidden;
        animation: hide-horiz-tree 1s ease-in-out;
    }

    .portfolio-tree-subject-show {
        opacity: 95%;
        animation: portfolio-subject-show 1s ease-in-out;
    }

    .portfolio-tree-subject-hidden {
        opacity: 0%;
        display: none;
        animation: portfolio-subject-hidden 1s ease-in-out;
    }

    .portfolio-tree-show {
        visibility: visibile;
        margin-bottom: 2rem;
        height: auto;
    }

    .portfolio-tree-hidden {
        visibility: hidden;
        height: 0;
        animation: hide-portfolio-tree 1s ease-out;
    }

    #portfolio-subject-1 {
        margin: -.5rem 0rem 0rem 1.1rem;
    }

    #portfolio-hbar-1 {
        margin: -6.25rem 0 0 0.25rem;
    }

    #portfolio-subject-2{
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #portfolio-hbar-2 {
        margin: -4.25rem 0rem 0rem 0.25rem;
    }

    #portfolio-subject-3 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #portfolio-hbar-3 {
        margin: -2.25rem 0rem 0rem 0.3rem;
    }

    #portfolio-subject-4 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #portfolio-hbar-4 {
        margin: -0rem 0rem 0rem 0.25rem;
    }

/* *********************
    ANIMATIONS
   *********************/
    @keyframes portfolio-show-vert-tree {
        from {
            height: 0;
            visibility: hidden;
        }
        to {
            height: 7.25rem;
            visibility: visible;
        }
    }

    @keyframes portfolio-hide-vert-tree {
        from {
            height: 7.25rem;
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

    @keyframes portfolio-subject-show {
        0% {
            opacity: 0%;
        }
        100% {
            opacity: 95%;
        }
    }

    @keyframes portfolio-subject-hidden {
        0% {
            opacity: 95%;
        }
        100% {
            opacity: 0%;
        }
    }

    @keyframes hide-portfolio-tree {
        0% { visibility: visible; height: 0; margin-bottom: 2rem; }
        5% { visibility: visible; height: 0; margin-bottom: 1.9rem; }
        15% { visibility: visible; height: 0; margin-bottom: 1.75rem; }
        20% { visibility: visible; height: 0; margin-bottom: 1.6rem; }
        25% { visibility: visible; height: 0; margin-bottom: 1.5rem; }
        30% { visibility: visible; height: 0; margin-bottom: 1.35rem; }
        35% { visibility: visible; height: 0; margin-bottom: 1.25rem; }
        45% { visibility: visible; height: 0; margin-bottom: 1.1rem; }
        50% { visibility: visible; height: 0; margin-bottom: 1rem; }
        65% { visibility: visible; height: 0; margin-bottom: 0.75rem; }
        70% { visibility: visible; height: 0; margin-bottom: 0.65rem; }
        75% { visibility: visible; height: 0; margin-bottom: 0.5rem; }
        85% { visibility: visible; height: 0; margin-bottom: 0.35rem; }
        90% { visibility: visible; height: 0; margin-bottom: 0.25rem; }
        95% { visibility: visible; height: 0; margin-bottom: 0.15rem; }
        100% {visibility: hidden; height: 0; margin-bottom: 0; }
    }
</style>
