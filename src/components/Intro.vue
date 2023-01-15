<script setup>
    import { ref, onMounted } from 'vue'
    import { delay } from '../utilities/utils.js'

    const leafbytesEl = ref(null)
    const subtitleEl = ref(null)
    const circuitOuterEl = ref(null)

    onMounted(async () => {
        await delay(2900)
        leafbytesEl.value.classList.add('loadtitlefade')
        subtitleEl.value.classList.add('loadtitlefade')
        await delay(2500)
        circuitOuterEl.value.classList.add('loadtitlefadeout')
        await delay(2500)
        circuitOuterEl.value.remove()
    })
</script>

<template>
    <div ref="circuitOuterEl" class="circuit-outer">
        <div class="current bottom-left"></div>
        <div class="current left"></div>
        <div class="current top"></div>
        <div class="current right"></div>
        <div class="current bottom-right"></div>
        <div class="circuit-inner"></div>
        <span ref="leafbytesEl" class="leafbytes">
            <p>LeafBytes</p>
        </span>
        <span ref="subtitleEl" class="subtitle">
            <p>Web Development</p>
        </span>
    </div>
</template>

<style scoped>
    /* logo/title */
    .circuit-outer {
        position: absolute;
        background-image: linear-gradient(280deg, var(--bg-light-blue) 0%, var(--bg-dark-blue) 120%);
        z-index: 1;
        opacity: 70%;
        min-width: 300px;
        width: 30vw;
        max-width: 400px;
        min-height: 100px;
        height: 16vh;
        max-height: 300px;
        padding: 1rem;
        border-radius: 5px;
        overflow: hidden;
        margin: 41vh auto;
        left: 0;
        right: 0;
    }

    .current {
        position: absolute;
        background: var(--dark-blue);
        animation-iteration-count: 1;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
    }

    .circuit-inner {
        top: 0.25rem;
        bottom: 0.25rem;
        left: 0.25rem;
        right: 0.25rem;
    }

    .current.bottom-left {
        bottom: 0;
        right: 80%;
        width: 80%;
        height: 6px;
        animation-name: zap1;
        animation-duration: .2s;
    }

    .current.left {
        bottom: 0;
        left: 0;
        width: 6px;
        height: 0;
        animation-name: zap2;
        animation-delay: .7s;
        animation-duration: .2s;
    }

    .current.top {
        top: 0;
        left: -1rem;
        width: 0px;
        height: 6px;
        animation-name: zap3;
        animation-delay: .9s;
        animation-duration: 1s;
    }

    .current.right {
        top: 0;
        right: 0;
        width: 6px;
        height: 0;
        animation-name: zap2;
        animation-delay: 1.9s;
        animation-duration: .5s;
    }

    .current.bottom-right {
        bottom: 0;
        right: 0;
        width: 0%;
        height: 6px;
        animation-name: zap4;
        animation-delay: 2.4s;
        animation-duration: .8s;
    }

    .leafbytes,
    .subtitle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        position: fixed;
        font-family: entsans;
        color: white;
        z-index: 2;
        opacity: 0%;
        margin: 0 auto;
        transform: translate(-50%, -50%);
        text-shadow: 5px 4px 0px var(--dark-blue-70);
    }

    .leafbytes {
        font-size: clamp(250%, 1rem, 300%);
        position: absolute;
        top: 42.5%;
        left: 51.25%;
    }

    .subtitle {
        top: 72%;
        left: 51.25%;
        position: absolute;
        white-space: nowrap;
        font-size: clamp(110%, 1rem, 150%);
    }

    .loadtitlefade {
        animation: loadintitlefromfade 1.5s ease-in;
        opacity: 65%;
        visibility: visible;
    }

    .loadtitlefadeout {
        animation: fadeouttitle 1.5s ease-in;
        opacity: 0%;
        visibility: hidden;
    }

/***********************
    ANIMATIONS
***********************/
    @keyframes zap1 {
        0% {
            width: 0;
        }
        100% {
            width: 20%;
        }
    }

    @keyframes zap2 {
        0% {
            height: 0;
        }
        100% {
            height: 100%;
        }
    }

    @keyframes zap3 {
        0% {
            width: 0;
        }
        100% {
            width: 105%;
        }
    }

    @keyframes zap4 {
        0% {
            width: 0;
        }
        100% {
            width: 80%;
        }
    }

    @keyframes loadintitlefromfade{
       from {
            opacity: 0;
            visibility: hidden;
       }
       to {
            opacity: 65%;
            visibility: visible;
       }
    }

    @keyframes fadeouttitle {
       from {
            opacity: 65%;
            visibility: visible;

       }
       to {
            opacity: 0;
            visibility: hidden;
       }
    }
</style>
