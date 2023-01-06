<script setup>
    import { ref, onMounted } from 'vue'
    import icons from './icons/footericons.json'
    import { delay } from '../utilities/utils.js'

    const footEl = ref(null)
    const iconElems = ref(null)

    function test() {
        console.log('button was clicked')
    }

    onMounted(async () => {
        await delay(5500)
        footEl.value.classList.add('foot-onscrollup')
        await delay(1500)
        iconElems.value.classList.add('fade-in')
        iconElems.value.classList.remove('iconElems')
     })
</script>

<template>
    <div>
        <footer ref="footEl" class="foot">
            <div class="footer-nav">
                <div ref="iconElems" class="iconElems">
                    <button v-for="icon in icons"
                    :aria-label="icon.ariaLabel" role="link"
                    class="footer-icons" :id="icon.id" v-html="icon.svg"
                    @click="test"></button>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
    button {
        cursor: pointer;
    }

    .foot {
        background: var(--dark-blue);
        border-radius: 8px;
        max-width: 1240px;
        width: 96vw;
        height: 0.5rem;
        bottom: 0.25vh;
        opacity: 60%;
        position: fixed;
        margin: 0rem auto;
        z-index: 2;
        left: 0;
        right: 0;
    }

    .footer-nav {
        display: flex;
        margin: -0.25rem 1.5rem 0rem 0rem;
        justify-content: center;
        align-items: center;
    }

    .footer-icons {
        justify-content: center;
        align-items: center;
        margin: 0.75rem 1.1rem 0rem 1.8rem;
        height: 1.25rem;
        width: 1.25rem;
        background: none;
        border: none;
        transform: translate(20%, -0%);
    }

    .foot-onscrollup {
        height: 2.5rem;
        animation: foot-onscrollup-animation 1.25s ease-in;
    }

    .iconElems > * {
        visibility: hidden;
    }

    .fade-in > * {
        visibility: visible;
        margin: 0.75rem 1rem 0rem 1rem;
        animation: fadein 1s;
    }

    .scaled {
        animation: scaleup .5s;
        transform: scale(1.25);
        transform-origin: center;
    }

    @keyframes scaleup {
        from {
            transform: scale(1.0);
        }
        to {
            transform: scale(1.25);
            transform-origin: center;
        }
    }

/* *********************
    ANIMATIONS
***********************/
    @keyframes foot-onscrollup-animation {
        0% { height: 0.5rem; }
        20% { height: 0.85rem; }
        50% { height: 1.75rem; }
        70% { height: 2.25rem; }
        100% { height: 2.5rem; }
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
