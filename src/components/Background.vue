<template>
    <div>
        <div class="logo"></div>
        <div class="circuits"></div>
    </div>
</template>

<style scoped>
    /* background stylings */
    .circuits {
        /* background-image: url("../src/assets/svg/circuit_board_vector.svg"); */
        background-image: url("./circuit_board_vector.svg");
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
        /* background-image: url('../src/assets/svg/logo2.svg'); */
        background-image: url('./logo2.svg');
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
