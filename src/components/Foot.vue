<script setup>
    /* import { ref, onMounted } from 'vue' */
    import icons from './icons/footericons.json'
    /* import { delay } from '../utilities/utils.js' */
</script>

<template>
    <div>
        <footer class="foot">
            <div class="footer-nav">
                <div ref="iconElems" class="iconElems">
                    <button v-for="icon in icons"
                    :aria-label="icon.ariabLabel" role="link"
                    class="footer-icons" :id="icon.id" v-html="icon.svg"
                    @click="test"></button>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
    .foot {
        background: #004b77;
        border: 4px solid #004b77;
        border-radius: 8px;
        border-bottom: none;
        max-width: 1240px;
        width: 96vw;
        height: 2.3rem;
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
        margin: -0.5rem 1.25rem 0rem 0rem;
        justify-content: center;
        align-items: center;
    }

    .footer-icons {
        /* visibility: hidden; */
        justify-content: center;
        align-items: center;
        margin: 0.75rem 1.1rem 0rem 1.8rem;
        height: 1.25rem;
        width: 1.25rem;
        background: none;
        border: none;
        transform: translate(20%, -0%);
    }
</style>
