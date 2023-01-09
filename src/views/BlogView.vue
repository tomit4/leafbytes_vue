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
        color: var(--white);
        opacity: 65%;
        max-width: 600px;
        margin: 0 auto;
        background-color: var(--hd-dark-blue);
        font-size: 0.9rem;
        font-weight: 600;
        border: 1px solid var(--hd-dark-blue);
        border-radius: 5px;
        padding: 1rem;
        text-align: center;
        z-index: -1;
    }

    .blockquote-links {
        text-decoration: none;
        color: var(--white);
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
        color: var(--dark-blue);
        z-index: -1;
    }
</style>
