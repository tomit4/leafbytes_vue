<script setup>
    import Home from "./components/Home.vue"
    /* import {RouterView} from "vue-router" */
</script>

<template>
    <div>
        <RouterView />
        <Home />
    </div>
</template>

<style>

/* *********************
* scrollbar styles
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

/* *********************
* MAIN STYLES
***********************/

    html {
        background-color: #252525;
    }

    html, body {
        background-image: linear-gradient(280deg, var(--dark-blue) 0%, var(--light-blue) 120%);
        background-repeat: no-repeat;
        min-height: 100vh;
        width: 100%;
        /* max-width: 1440px; */
        max-width: 1920px;
        margin: 0 auto;
        padding: 0;
        overscroll-behavior: none;
        overflow: hidden;

        /* mozilla firefox styling of scrollbar */
        scrollbar-color: var(--dark-blue) var(--light-blue);
    }
</style>
