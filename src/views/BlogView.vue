<script setup>
    import { RouterView} from "vue-router"
</script>

<template>
    <div>
        <RouterView />
    </div>
</template>

<style>
    .header-images {
        max-width: 350px;
    }

    .article-quotes {
        font-family: LiberationMono;
        color: rgba(255, 255, 255, 1);
        opacity: 65%;
        max-width: 600px;
        margin: 0 auto;
        background-color: rgba(0, 44, 70, 1);
        font-size: 0.9rem;
        font-weight: 600;
        border: 1px solid rgba(0, 44, 70, 1);
        border-radius: 5px;
        padding: 1rem;
        text-align: center;
        z-index: -1;
    }

    .blockquote-links {
        text-decoration: none;
        color: #ffffff;
    }

    .article-lists {
        display: block;
        justify-content: left;
        align-items: left;
        margin-left: -2rem;
        list-style: none;
        font-family: LiberationMono;
        font-size: 1rem;
        font-weight: 600;
        color: #004b77;
        z-index: -1;
    }
</style>
