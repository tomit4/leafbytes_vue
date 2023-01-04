<script setup>
    import { ref, onMounted } from 'vue'
    import { delay } from '../utilities/utils.js'

    const showArticle = ref(false)

    onMounted(async () => {
            await delay(6600)
            showArticle.value = true
    })

</script>

<template>
    <div v-if="showArticle">
        <div class="article"></div>
    </div>
</template>

<style scoped>
    .article {
        /* visibility: hidden; */
        top: 50vh;
        margin: -42vh auto auto auto;
        left: 0;
        right: 0;
        position: fixed;
        background-image: linear-gradient(
            280deg,
            rgba(98, 165, 191, 0.2) 0%,
            rgba(42, 114, 150, 0.7) 120%
        );
        width: 98vw;
        max-width: 1040px;
        height: 83.5vh;
        border: 6px solid #004b77;
        border-radius: 5px;
        overflow-y: scroll;
        overscroll-behavior: none;
        overflow-x: hidden;
        scroll-behavior: smooth;
        animation: dropdown 1s ease-in-out;
    }

    @keyframes dropdown {
        from {
            height: 0vh;
        }
        to {
            height: 85.5vh;
        }
    }
    .article-body {
        padding: 0.25rem;
        max-width: 840px;
        margin: 0.5rem auto;
        border-radius: 5px;
        background-color: rgba(200, 237, 255, 0.5);
    }
</style>
