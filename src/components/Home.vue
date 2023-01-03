<script setup>
    import Nav from "./Nav.vue"
    import Intro from "./Intro.vue"
    /* import Foot from "./Foot.vue" */
</script>

<template>
    <div>
        <Nav />
        <Intro />
        <!-- <Foot /> -->
    </div>
</template>

<style>
    /* circuit-board background image */
    .circuits {
        background-image: url("../assets/svg/circuit_board_vector.svg");
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
        background-image: url('../assets/svg/logo2.svg');
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
