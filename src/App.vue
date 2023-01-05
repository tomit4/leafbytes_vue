<script setup>
    /* import {RouterView} from "vue-router" */
    import Nav from "./components/Nav.vue"
    import Intro from "./components/Intro.vue"
    import Body from "./components/Body.vue"
    import Foot from "./components/Foot.vue"
</script>

<template>
    <div>
        <Intro />
        <div class="logo"></div>
        <div class="circuits"></div>
        <Nav />
        <Body />
        <Foot />
    </div>
</template>

<style>
/***********************
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

/* background stylings */
    .circuits {
        background-image: url("./src/assets/svg/circuit_board_vector.svg");
        background-size: contain;
        background-position: center center;
        width: 98vw;
        max-width: 1920px;
        margin: 0 auto;
        height: 98vh;
        opacity: 25%;
        overflow: hidden;
    }

    .logo {
        background-image: url('./src/assets/svg/logo2.svg');
        width: 90vw;
        max-width: 520px;
        max-height: 920px;
        height: 77vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        position: fixed;
        top: 53vh;
        left: 50vw;
        opacity: 40%;
        transform: translate(-49%, -58%);
        margin: 1rem auto;
        animation: logofadein 3s ease-in-out;
    }

    @keyframes logofadein {
        from {
            visibility: hidden;
            opacity: 0;
        }
        to {
            visibility: visible;
            opacity: 40%;
        }
    }

</style>
