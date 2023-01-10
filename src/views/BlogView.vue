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
        margin: 1rem auto 0.5rem auto;
        max-width: 300px;
    }

    .article-quotes {
        font-family: LiberationMono;
        color: var(--white);
        opacity: 65%;
        max-width: 600px;
        margin: 1rem auto 1rem auto;
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
        margin-left: -1rem;
        list-style: none;
        font-family: LiberationMono;
        font-size: 1rem;
        font-weight: 600;
        color: var(--dark-blue);
        z-index: -1;
    }

    img {
        border: 4px solid var(--dark-blue);
        border-radius: 5px;
        display: flex;
        margin: 0 0.5rem 0 auto;
        width: 100%;
        height: 100%;
    }

    figure {
        text-align: center;
    }

    figcaption {
        font-family: LiberationMono;
        font-size: 14px;
        font-weight: 900;
        color: var(--dark-blue);
        text-align: center;
        margin: 0.25rem auto 0 auto;
    }

</style>
