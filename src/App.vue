<script setup>
    import { onMounted } from 'vue'
    import Intro from './components/Intro.vue'
    import Body from './components/Body.vue'
    import Background from './components/Background.vue'

    function checkColorPref() {
        if (window.matchMedia('(prefers-color-scheme: dark)')) {
            document.body.setAttribute("data-theme", "dark")
        } else {
            document.body.setAttribute("data-theme", "light")
        }
    }

    onMounted(() => {
        checkColorPref()
    })
</script>

<template>
    <div>
        <Intro />
        <Background />
        <Body />
    </div>
</template>

<style>
/***********************
* SCROLLBAR STYLING
***********************/
    /* chromium styling of scrollbar */
    *::-webkit-scrollbar {
        width: 3px;
    }

    *::-webkit-scrollbar-track {
        background: var(--light-blue);
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--dark-blue);
        border-radius: 20px;
        border: 3px solid var(--dark-blue);
    }

/***********************
* MAIN STYLES
***********************/
    html {
        background-color: var(--bg-black);
    }

    body {
        background-image: linear-gradient(280deg, var(--dark-blue) 0%, var(--light-blue) 120%);
        background-repeat: no-repeat;
        min-height: 100vh;
        width: 100%;
        max-width: 1920px;
        margin: 0 auto;
        padding: 0;
        overscroll-behavior: none;
        overflow: hidden;

        /* mozilla firefox styling of scrollbar */
        scrollbar-color: var(--dark-blue) var(--light-blue);
    }
</style>
