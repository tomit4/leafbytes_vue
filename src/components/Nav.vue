<script setup>
    import { ref, onMounted } from 'vue'
    import icons from './icons/navicons.json'
    import { delay } from '../utilities/utils.js'

    const navEl = ref(null)
    const iconElems = ref(null)

    function test() {
        console.log('button was clicked')
    }

    onMounted(async () => {
        await delay(5500)
        navEl.value.classList.add('navbar-onscrollup')
        await delay(1500)
        iconElems.value.classList.add('fade-in')
        iconElems.value.classList.remove('iconElems')
     })
</script>

<template>
    <div>
        <nav>
            <div ref="navEl" class="navbar">
                <div ref="iconElems" class="iconElems">
                    <button v-for="icon in icons"
                    :aria-label="icon.ariaLabel" role="navigation"
                    class="icons" :id="icon.id" v-html="icon.svg"
                    @click="test">
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
    button {
        cursor: pointer;
    }

    .navbar {
        position: fixed;
        background: var(--dark-blue);
        border: 4px solid var(--dark-blue);
        border-radius: 8px;
        opacity: 60%;
        width: 80vw;
        height: 0.25rem;
        /* list-style: none; */
        top: 0%;
        display: flex;
        z-index: 2;
        justify-content: center;
        padding: 0rem 1.5rem 0rem 1rem;
        max-width: 1240px;
        margin: 0.25rem auto;
        left: 0;
        right: 0;
    }

    .navbar > * {
        display: flex;
    }

    .iconElems > * {
        visibility: hidden;
    }

    .icons {
        text-align: center;
        justify-content: center;
        align-items: center;
        z-index: 3;
        padding: 0.25rem;
        margin: 0.1rem 1rem 0.25rem 1rem;
        background: none;
        border: none;
        transform: translate(20%, -0%);
    }

    #link {
        width: 1.5rem;
    }

    .navbar-onscrollup {
        height: 2.5em;
        animation: navbar-onscrollup-animation 1.25s ease-in;
    }

    .scaled {
        animation: scaleup .5s;
        transform: scale(1.25);
        transform-origin: center;
    }

    .fade-in > * {
        visibility: visible;
        animation: fadein 1s;
    }

/* *********************
    ANIMATIONS
***********************/
    @keyframes navbar-onscrollup-animation {
        0% { height: 0.25em; }
        20% { height: 0.65em; }
        50% { height: 1.25em; }
        70% { height: 1.9em; }
        100% { height: 2.5em; }
    }

    @keyframes fadein {
        from {
            visibility: hidden;
            opacity: 0%;

        }
        to {
            visibility: visible;
            opacity: 80%;
        }
    }
</style>
