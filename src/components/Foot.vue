<script setup>
    import { ref, watch, defineProps, onMounted } from 'vue'
    import icons from './icons/footericons.json'
    import sun from './icons/sunicon.json'
    import moon from './icons/moonicon.json'
    import { delay } from '../utilities/utils.js'

    const footEl = ref(null)
    const iconElems = ref(null)

    const props = defineProps({
        scrolldownprop: {
            type: Boolean,
        }
    })

    watch(() => props.scrolldownprop, async (isScrollingDown) => {
        if (isScrollingDown) {
            footEl.value.classList.remove('foot-onscrollup')
            footEl.value.classList.add('foot-onscrolldown')
            iconElems.value.classList.add('fade-out')
            iconElems.value.classList.remove('fade-in')
        } else {
            footEl.value.classList.remove('foot-onscrolldown')
            footEl.value.classList.add('foot-onscrollup')
            await delay(1200)
            iconElems.value.classList.add('fade-in')
            iconElems.value.classList.remove('fade-out')
        }
    })


    function test() {
        console.log('test button')
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
                    <button @click="test" class="scaled" id="sun" v-html="sun[0].svg"></button>
                    <a v-for="icon in icons"
                    :aria-label="icon.ariaLabel" role="link"
                    class="scaled" :id="icon.id" v-html="icon.svg"
                    target="_blank" rel="noopener noreferrer"
                    :href="icon.href"></a>
                    <button @click="test" class="scaled" id="moon" v-html="moon[0].svg"></button>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
    #moon,
    #sun {
        border: none;
        background: none;
        cursor: pointer;
    }

    .scaled {
        display: inline-block;
        margin: 0.75rem 1rem 0rem 1rem;
    }

    .scaled:hover {
        transform: scale(1.25, 1.25);
        transform-origin: center;
        animation: scaleup .5s;
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
        justify-content: center;
        align-items: center;
    }

    .footer-icons {
        justify-content: center;
        align-items: center;
    }

    .foot-onscrollup {
        height: 2.5rem;
        animation: foot-onscrollup-animation 1.2s ease-in;
    }

    .foot-onscrolldown {
        height: 0.5rem;
        border: none;
        animation: foot-onscrolldown-animation 1s ease-in;
    }

    .iconElems {
        visibility: hidden;
    }

    .fade-in > * {
        visibility: visible;
        animation: fadein 1s;
    }

    .fade-out > * {
        visibility: hidden;
        animation: fadeout 1s;
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

    @keyframes foot-onscrolldown-animation {
        0% { height: 2.3rem; }
        20% { height: 2.3rem; }
        50% { height: 1.7rem; }
        70% { height: 1.1rem; }
        100% { height: 0.5rem; }
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

    @keyframes fadeout {
        from {
            opacity: 80%;
        }
        to {
            opacity: 0%;
        }
    }

    @keyframes scaleup {
        from {
            transform: scale(1.0);
        }
        to {
            transform: scale(1.25, 1.25);
            transform-origin: center;
        }
    }
</style>
