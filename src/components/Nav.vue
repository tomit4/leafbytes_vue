<script setup>
    import { ref, watch, defineProps, onMounted } from 'vue'
    import {RouterLink} from 'vue-router'
    import icons from './icons/navicons.json'
    import { delay, scaleClick, scaleHover, scaleLeave } from '../utilities/utils.js'

    const navEl = ref(null)
    const iconElems = ref(null)

    const lclScaleClick = (id) =>
        scaleClick(id, iconElems)

    const lclScaleHover = (id) =>
        scaleHover(id, iconElems)

    const lclScaleLeave = (id) =>
        scaleLeave(id, iconElems)

    const props = defineProps({
        scrolldownprop: {
            type: Boolean,
        }
    })

    watch(() => props.scrolldownprop, async (isScrollingDown) => {
        if (isScrollingDown) {
            iconElems.value.forEach((el) => {
                el.classList.add('fade-out')
                el.classList.remove('fade-in')
            })
            navEl.value.classList.remove('navbar-onscrollup')
            navEl.value.classList.add('navbar-onscrolldown')
        } else {
            navEl.value.classList.remove('navbar-onscrolldown')
            navEl.value.classList.add('navbar-onscrollup')
            await delay(1200)
            iconElems.value.forEach((el) => {
                el.classList.remove('fade-out')
                el.classList.add('fade-in')
            })
        }
    })

    onMounted(async () => {
        await delay(5500)
        navEl.value.classList.add('navbar-onscrollup')
        await delay(1500)
        iconElems.value.forEach((el) => {
            el.classList.add('fade-in')
            el.classList.remove('iconElems')
            if (el.id === 'home')
                el.classList.add('scaled', 'clickScaled')
        })
     })
</script>

<template>
    <div>
        <nav>
            <div ref="navEl" class="navbar">
                    <div ref="iconElems" v-for="icon in icons"
                    class="iconElems icons" :id="icon.id">
                        <router-link
                        :aria-label="icon.ariaLabel" role="navigation"
                        v-html="icon.svg" :to="icon.route"
                        @click="lclScaleClick(icon.id)"
                        @mouseover="lclScaleHover(icon.id)"
                        @mouseleave="lclScaleLeave(icon.id)">
                        </router-link>
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

    .iconElems {
        visibility: hidden;
    }

    .icons {
        text-align: center;
        justify-content: center;
        align-items: center;
        z-index: 3;
        padding: 0.25rem;
        margin: 0.5rem 1rem 0rem 1rem;
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

    .navbar-onscrolldown {
        height: 0;
        animation: navbar-onscrolldown-animation 1s ease-in;
    }

    .fade-in {
        visibility: visible;
        animation: fadein 1s;
    }

    .fade-out {
        visibility: hidden;
        animation: fadeout 1s;
    }

    .scaled {
        animation: scaleup .5s;
        transform: scale(1.25, 1.25);
        transform-origin: bottom left;
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

    @keyframes navbar-onscrolldown-animation {
        0% { height: 2.5rem; }
        20% { height: 1.5rem; }
        50% { height: 1.0rem; }
        70% { height: 0.5rem; }
        100% { height: 0; }
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
            transform: scale(1.0, 1.0);
        }
        to {
            transform: scale(1.25, 1.25);
            transform-origin: bottom left;
        }
    }
</style>
