<script setup>
    import { ref, onMounted } from 'vue'
    import treeData from '../views_data/usetree.json'
    import { delay, toggleTree } from '../../utilities/utils.js'

    const linkEl = ref(null)
    const vertEl = ref(null)
    const horizEl = ref(null)
    const subjEl = ref(null)

    const lclToggleTree = () =>
        toggleTree(vertEl, subjEl, horizEl, 'use')

    onMounted(async () => {
        await delay(1200)
        horizEl.value.forEach((el) =>
            el.classList.add('use-tree-horiz-show'))
        await delay(1000)
        subjEl.value.forEach((el) => {
            el.classList.remove('use-tree-subject-hidden')
            el.classList.remove('displaynone')
            el.classList.add('use-tree-subject-show')
        })
    })
</script>

<template>
    <div>
        <div ref="linkEl" class="link-item link-item-scaled use"
        @click="lclToggleTree()">useful links</div>
        <div class="use-tree">
            <div class="tree-container">
                <div ref="vertEl" class="use-tree-vert
                use-tree-vert-show"></div>
                <div ref="horizEl" v-for="data in treeData"
                class="use-tree-horiz" :id="`use-hbar-${data.id}`">
                    <a ref="subjEl" class="tree-subject displaynone use-tree-subject-hidden"
                    :id="`use-subject-${data.id}`" target="_blank"
                    rel="noopener noreferrer" :href="data.link">{{ data.title }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .use-tree-vert {
        position: relative;
        background-color : rgba(0, 44, 70, 1);
        width: 0.20rem;
        margin: 0rem 0 0rem 0.25rem;
    }

    .use-tree-vert-show {
        animation: use-show-vert-tree 1s ease-in-out;
        visibility: visible;
        height: 19rem;
    }

    .use-tree-vert-hidden {
        animation: use-hide-vert-tree 1s ease-in-out;
        visibility: hidden;
        height: 0;
    }

    .use-tree-horiz  {
        position: absolute;
        background-color : rgba(0, 44, 70, 1);
        visibility: hidden;
        width: 0rem;
        height: 0.20rem;
    }

    .use-tree-horiz-show {
        opacity: 100%;
        width: 1rem;
        visibility: visible;
        animation: show-horiz-tree 1s ease-in-out;
    }

    .use-tree-horiz-hidden {
        opacity: 0%;
        width: 0;
        visibility: hidden;
        animation: hide-horiz-tree 1s ease-in-out;
    }

    #use-subject-1 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #use-hbar-1 {
        margin: -18rem 0 0 0.25rem;
    }

    #use-subject-2{
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #use-hbar-2 {
        margin: -16rem 0rem 0rem 0.25rem;
    }

    #use-subject-3 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #use-hbar-3 {
        margin: -14rem 0rem 0rem 0.3rem;
    }

    #use-subject-4 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #use-hbar-4 {
        margin: -12rem 0rem 0rem 0.25rem;
    }

    #use-subject-5 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #use-hbar-5 {
        margin: -10rem 0rem 0rem 0.25rem;
    }

    #use-subject-6 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #use-hbar-6 {
        margin: -8rem 0rem 0rem 0.25rem;
    }

    #use-subject-7 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #use-hbar-7 {
        margin: -6rem 0rem 0rem 0.25rem;
    }

    #use-subject-8 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #use-hbar-8 {
        margin: -4rem 0rem 0rem 0.25rem;
    }

    #use-subject-9 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #use-hbar-9 {
        margin: -2rem 0rem 0rem 0.25rem;
    }

    #use-subject-10 {
        margin: -0.5rem 0rem 0rem 1.1rem;
    }

    #use-hbar-10 {
        margin: -0rem 0rem 0rem 0.25rem;
    }

/* *********************
    ANIMATIONS
***********************/
    @keyframes use-show-vert-tree {
        from {
            height: 0;
            visibility: hidden;
        }
        to {
            height: 19rem;
            visibility: visible;
        }
    }

    @keyframes use-hide-vert-tree {
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
</style>
