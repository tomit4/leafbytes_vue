<script setup>
    import { ref, onMounted } from 'vue'

    const leafbytesEl = ref(null)
    const subtitleEl = ref(null)
    const circuitOuterEl = ref(null)

    function wait(ms) {
        return new Promise(res => setTimeout(res, ms))
    }

    onMounted(async () => {
        await wait(2900)
        leafbytesEl.value.classList.add('loadtitlefade')
        subtitleEl.value.classList.add('loadtitlefade')
        await wait(5000)
        leafbytesEl.value.classList.remove('loadtitlefade')
        subtitleEl.value.classList.remove('loadtitlefade')
        leafbytesEl.value.classList.add('loadtitlefadeout')
        subtitleEl.value.classList.add('loadtitlefadeout')
        circuitOuterEl.value.classList.add('loadtitlefadeout')
        await wait(2500)
        leafbytesEl.value.remove()
        subtitleEl.value.remove()
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
        <div ref="leafbytesEl" class="leafbytes">
            <p>LeafBytes</p>
        </div>
        <div ref="subtitleEl" class="subtitle">
            <p>Web Development</p>
        </div>
    </div>
</template>

<style scoped>
    /* logo/title */
    .circuit-outer {
        position: fixed;
        background-image: linear-gradient(280deg, #62a5bf 0%, #2a7296 120%);
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
        background: #004b77;
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
        justify-content: center;
        align-items: center;
        position: fixed;
        font-family: entsans;
        color: white;
        z-index: 2;
        opacity: 0%;
        transform: translate(-50%, -50%);
        text-shadow: 5px 4px 0px rgba(0, 75, 119, 0.7);
    }

    .leafbytes {
        font-size: clamp(250%, 1rem, 300%);
        top: 47.5%;
        left: 51.25%;
    }

    .subtitle {
        top: 52%;
        left: 51.25%;
        white-space: nowrap;
        font-size: clamp(110%, 1rem, 150%);
    }

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

    .loadtitlefade {
        animation: loadintitlefromfade 1.5s ease-in;
        opacity: 65%;
        visibility: visible;
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

    .loadtitlefadeout {
        animation: fadeouttitle 1.5s ease-in;
        opacity: 0%;
        visibility: hidden;
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
