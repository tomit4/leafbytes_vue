<script setup>
    import { ref, onMounted } from 'vue'
    import {RouterView} from 'vue-router'
    import { delay } from '../utilities/utils.js'
    import Nav from './Nav.vue'
    import Foot from './Foot.vue'

    const scrolldownProperty = ref(null)
    const showArticle = ref(false)
    const article = ref(null)

    let prevPos = 0
    function onScroll() {
        let curPos = article.value.scrollTop
        if (curPos > prevPos) {
            article.value.classList.remove('article-defaults')
            article.value.classList.remove('article-onscrollup')
            article.value.classList.add('article-onscrolldown')
            scrolldownProperty.value = true
        } else if (curPos < prevPos) {
            article.value.classList.remove('article-onscrolldown')
            article.value.classList.add('article-onscrollup')
            scrolldownProperty.value = false
        }
        prevPos = curPos <= 0 ? 0 : curPos
    }

    onMounted(async () => {
        await delay(6600)
        showArticle.value = true
    })
</script>

<template>
    <div>
        <Nav :scrolldownprop="scrolldownProperty" />
        <div v-if="showArticle">
            <div @scroll="onScroll" ref="article" class="article article-defaults">
                <RouterView />
            </div>
        </div>
        <Foot :scrolldownprop="scrolldownProperty" />
    </div>
</template>

<style>
    .article {
        top: 50vh;
        left: 0;
        right: 0;
        position: fixed;
        background-image: linear-gradient( 280deg, var(--bg-light-blue-20), var(--bg-dark-blue-70) 120% );
        width: 98vw;
        max-width: 1040px;
        border: 6px solid var(--dark-blue-90);
        border-radius: 5px;
        overflow-y: scroll;
        overscroll-behavior: none;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    .article-defaults {
        margin: -42vh auto auto auto;
        height: 83.5vh;
        animation: dropdown 1s ease-in-out;
    }

    .article-onscrolldown {
        margin: -48vh auto auto auto;
        height: 96vh;
        animation: article-onscrolldown-animation 1s ease-in-out;
    }

    .article-onscrollup {
        margin: -42vh auto auto auto;
        height: 83.5vh;
        animation: article-onscrollup-animation 1s ease-in-out;
    }

    .article-body {
        padding: 0.25rem;
        max-width: 840px;
        margin: 0.5rem auto;
        border-radius: 5px;
        background-color: var(--light-blue-50);
        z-index: 0;
    }

    .article-entire {
        opacity: 100%;
        animation: article-made-visible 1s ease-in-out;
    }

    .leafbytes-body {
        opacity: 100%;
    }

    .article-header {
        user-select: none;
        color: var(--white);
        opacity: 65%;
        background-color: var(--hd-dark-blue);
        font-family: HussarBold;
        font-size: 24px;
        text-align: center;
        width: 80vw;
        max-width: 400px;
        margin: 0.5rem auto;
        padding: 0.5rem 0.5rem 0rem 0.5rem;
        border: 1px solid var(--hd-dark-blue);
        border-radius: 7px 7px 2px 2px;
    }

    .article-header3 {
        user-select: none;
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

    .article-header4 {
        color: rgba(255, 255, 255, 1);
        opacity: 65%;
        background-color: var(--hd-dark-blue);
        font-family: HussarBold;
        font-size: 14px;
        max-width: 350px;
        height: 2.1rem;
        margin-bottom: -0.5rem;
        padding: 0.5rem;
        border: 1px solid var(--hd-dark-blue);
        border-radius: 7px 7px 0px 0px;
    }

    .article-content {
        font-family: LiberationMono;
        font-size: 0.96rem;
        font-weight: 600;
        color: var(--dark-blue);
        line-height: 1.4rem;
        margin: 1rem;
    }

    .article-outside-links {
        font-weight: 900;
        text-decoration: none;
    }

    #home-header {
        padding-top: 0.75rem;
    }

    .spacer {
        height: 5rem;
        background: transparent;
    }

    img {
        border: 4px solid var(--dark-blue);
        border-radius: 5px;
        display: flex;
        margin: 0 auto;
    }

    figure {
        text-align: center;
    }

    figcaption {
        font-family: LiberationMono;
        font-size: 14px;
        font-weight: 900;
        color: var(--dark-blue);
        text-align: center;
    }

/**********************
  ANIMATIONS
**********************/
    @keyframes dropdown {
        from {
            height: 0vh;
        }
        to {
            height: 85.5vh;
        }
    }

    @keyframes article-made-visible {
        from {opacity: 0%;}
        to {opacity: 100%;}
    }

    @keyframes article-onscrolldown-animation {
        from {
            margin: -42vh auto auto auto;
            height: 83.5vh;
        }
        to {
            margin: -48vh auto auto auto;
            height: 96vh;
        }
    }

    @keyframes article-onscrollup-animation {
        from {
            margin: -48vh auto auto auto;
            height: 94vh;
        }
        to {
            margin: -42vh auto auto auto;
            height: 83.5vh;
        }
    }
</style>
