<script setup>
    import { ref, onMounted } from 'vue'
    import treeData from '../views_data/devtree.json'
    import { delay, toggleTree } from '../../utilities/utils.js'

    const linkEl = ref(null)
    const vertEl = ref(null)
    const horizEl = ref(null)
    const subjEl = ref(null)

    const lclToggleTree = () => {
        linkEl.value.classList.toggle('link-item-scaled')
        toggleTree(vertEl, subjEl, horizEl, 'dev')
    }

    onMounted(async () => {
        await delay(1200)
        horizEl.value.forEach((el) =>
            el.classList.add('dev-tree-horiz-show'))
        await delay(1000)
        subjEl.value.forEach((el) => {
            el.classList.remove('dev-tree-subject-hidden')
            el.classList.remove('displaynone')
            el.classList.add('dev-tree-subject-show')
        })
    })
</script>

<template>
    <div>
        <div ref="linkEl" class="link-item link-item-scaled dev"
        @click="lclToggleTree()">dev tools</div>
        <div class="dev-tree">
            <div class="tree-container">
                <div ref="vertEl" class="dev-tree-vert
                dev-tree-vert-show"></div>
                <div ref="horizEl" v-for="data in treeData"
                class="dev-tree-horiz" :id="`dev-hbar-${data.id}`">
                    <a ref="subjEl" class="tree-subject displaynone dev-tree-subject-hidden"
                    :id="`dev-subject-${data.id}`" target="_blank"
                    rel="noopener noreferrer" :href="data.link">{{ data.title }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .dev-tree-vert {
        position: relative;
        background-color : var(--hd-dark-blue);
        width: 0.20rem;
        margin: 0rem 0 0rem 0.25rem;
    }

    .dev-tree-vert-show {
        animation: dev-show-vert-tree 1s ease-in-out;
        visibility: visible;
        height: 7.25rem;
    }

    .dev-tree-vert-hidden {
        animation: dev-hide-vert-tree 1s ease-in-out;
        visibility: hidden;
        height: 0;
    }

    .dev-tree-horiz  {
        position: absolute;
        background-color: var(--hd-dark-blue);
        visibility: hidden;
        width: 0rem;
        height: 0.15rem;
    }

    .dev-tree-horiz-show {
        opacity: 100%;
        width: 1rem;
        visibility: visible;
        animation: show-horiz-tree 1s ease-in-out;
    }

    .dev-tree-horiz-hidden {
        opacity: 0%;
        width: 0;
        visibility: hidden;
        animation: hide-horiz-tree 1s ease-in-out;
    }

    #dev-subject-1 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #dev-hbar-1 {
        margin: -6.25rem 0 0 0.25rem;
    }

    #dev-subject-2{
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #dev-hbar-2 {
        margin: -4.25rem 0rem 0rem 0.25rem;
    }

    #dev-subject-3 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #dev-hbar-3 {
        margin: -2.25rem 0rem 0rem 0.3rem;
    }

    #dev-subject-4 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #dev-hbar-4 {
        margin: -0rem 0rem 0rem 0.25rem;
    }

    .dev-tree-subject-show {
        opacity: 95%;
        animation: dev-subject-show 1s ease-in-out;
    }

    .dev-tree-subject-hidden {
        opacity: 0%;
        animation: dev-subject-hidden 1s ease-in-out;
    }
/* *********************
    ANIMATIONS
***********************/
    @keyframes dev-show-vert-tree {
        from {
            height: 0;
            visibility: hidden;
        }
        to {
            height: 7.25rem;
            visibility: visible;
        }
    }

    @keyframes dev-hide-vert-tree {
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

    @keyframes dev-subject-show {
        0% {
            opacity: 0%;
        }
        100% {
            opacity: 95%;
        }
    }

    @keyframes dev-subject-hidden {
        0% {
            opacity: 95%;
        }
        100% {
            opacity: 0%;
        }
    }
</style>
