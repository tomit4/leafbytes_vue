<script setup>
    /* add circle animations inside of square */
    /* make square clickable */
    /* onclick, square renders more circuitry animation leading to project links */
    import { ref, onMounted } from "vue"
    import { delay } from "../utilities/utils"
    import homeleaf from "./views_data/home_leaf.json"

    const containEl = ref(null)
    const squareEl = ref(null)
    const leafEl = ref(null)
    const accUpEl = ref(null)
    const accLowEl = ref(null)

    async function renderCards() {
        accUpEl.value.classList.add('fade-out')
        accLowEl.value.classList.add('fade-out')
        await delay(1000)
        squareEl.value.classList.add('collapse')
        leafEl.value.classList.add('fade-out')
        await delay(1200)
        squareEl.value.classList.add('fade-out')
    }

    onMounted(async () => {
        await delay(1200)
        containEl.value.classList.add('fade-in')
        containEl.value.classList.remove('visibility-hidden')
    })
</script>

<template>
    <div>
        <div ref="containEl" class="container visibility-hidden">
            <div ref="accUpEl" class="accent-upper"></div>
            <div ref="squareEl" class="square glowbeat" @click="renderCards">
                <div ref="leafEl" class="leaf-icon" v-html="homeleaf[0].svg"></div>
            </div>
            <div ref="accLowEl" class="accent-lower"></div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        top: 35vh;
    }

    .square {
        width: 6rem;
        height: 6rem;
        border: 5px solid var(--dark-blue-70);
        background-color: var(--light-blue-50);
        border-radius: 5px;
    }

    .square:hover {
        cursor: pointer;
    }

    .glowbeat {
        animation: glowing-beating 1s ease-in-out infinite alternate;
    }

    .leaf-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0.75rem;
        left: 0.25rem;
    }

    .accent-upper,
    .accent-lower {
        display: flex;
        position: absolute;
        /* needs new css var */
        border: 5px solid var(--dark-blue-70);
        border-radius: 3px;
        background-color: transparent;
        width: 7.25rem;
        height: 1rem;
    }

    .accent-upper {
        bottom: 5.75rem;
        border-bottom: none;
    }

    .accent-lower {
        top: 5.75rem;
        border-top: none;
    }

    .visibility-hidden {
        visibility: hidden;
    }

    .fade-in {
        visibility: visible;
        animation: fadein 1.2s ease-in;
    }

    .fade-out {
        visibility: hidden;
        animation: fadeout 1s ease-in;
    }

    .collapse {
        height: 0;
        animation: collapse-it 1s ease-in;
    }

/***********************
    ANIMATIONS
***********************/
    @keyframes glowing-beating {
        0% {
          box-shadow: 0 0 0px var(--white),
                      0 0 2.5px var(--white),
                      0 0 7.5px #baf6ff,
                      0 0 12.5px #baf6ff,
                      0 0 17.5px #baf6ff,
                      0 0 22.5px #baf6ff,
                      0 0 27.5px #baf6ff;
          transform: scale(0.98)
        }
        25% { transform: scale(0.98) }
        50% { transform: scale(1.02) }
        75% { transform: scale(0.98) }
        100% {
          box-shadow: 0 0 2.5px var(--white),
                      0 0 7.5px #86c8f1,
                      0 0 12.5px #86c8f1,
                      0 0 17.5px #86c8f1,
                      0 0 22.5px #86c8f1,
                      0 0 27.5px #86c8f1,
                      0 0 32.5px #86c8f1;
          transform: scale(0.98)
        }
    }

    @keyframes fadein {
        from {
            visibility: hidden;
            opacity: 0%;

        }
        to {
            visibility: visible;
            opacity: 100%;
        }
    }

    @keyframes fadeout {
        from {
            visibility: visible;
            opacity: 100%;
        }
        to {
            visibility: hidden;
            opacity: 0%;
        }
    }

    @keyframes collapse-it {
        from {
            height: 6rem;
        }
        to {
            height: 0;
        }
    }
</style>
