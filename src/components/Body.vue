<script setup>
    import { ref, onMounted } from 'vue'
    import {RouterView} from "vue-router"
    import { delay } from '../utilities/utils.js'

    const showArticle = ref(false)

    onMounted(async () => {
            await delay(6600)
            showArticle.value = true
    })
</script>

<template>
    <div v-if="showArticle">
        <div class="article">
            <RouterView />
        </div>
    </div>
</template>

<style>
    .article {
        top: 50vh;
        margin: -42vh auto auto auto;
        left: 0;
        right: 0;
        position: fixed;
        background-image: linear-gradient( 280deg, var(--bg-light-blue-20), var(--bg-dark-blue-70) 120% );
        width: 98vw;
        max-width: 1040px;
        height: 83.5vh;
        border: 6px solid var(--dark-blue-90);
        border-radius: 5px;
        overflow-y: scroll;
        overscroll-behavior: none;
        overflow-x: hidden;
        scroll-behavior: smooth;
        animation: dropdown 1s ease-in-out;
    }

    @keyframes dropdown {
        from {
            height: 0vh;
        }
        to {
            height: 85.5vh;
        }
    }
    .article-body {
        padding: 0.25rem;
        max-width: 840px;
        margin: 0.5rem auto;
        border-radius: 5px;
        background-color: var(--light-blue-50);
    }

    .article-entire {
        opacity: 100%;
        animation: article-made-visible 1.5s ease-in-out;
    }

    .leafbytes-body {
        opacity: 100%;
    }

    .article-header {
        color: var(--white);
        opacity: 65%;
        background-color: var(--hd-dark-blue);
        font-family: HussarBold;
        font-size: 24px;
        text-align: center;
        width: 80vw;
        max-width: 400px;
        margin: 0.5rem auto;
        padding: 0.5rem 0.25rem 0rem 0rem;
        border: 1px solid var(--hd-dark-blue);
        border-radius: 7px 7px 2px 2px;
    }

    .article-header3 {
        color: var(--white);
        opacity: 65%;
        background-color: var(--hd-dark-blue);
        font-family: HussarBold;
        font-size: 16px;
        text-align: center;
        width: 80vw;
        max-width: 400px;
        height: 2.1rem;
        margin: -0.5rem auto 0rem auto;
        padding-bottom: 0.5rem;
        border: 1px solid var(--hd-dark-blue);
        border-radius: 0px 0px 7px 7px;
    }

    #home-header {
        padding-top: 0.75rem;
    }
</style>
