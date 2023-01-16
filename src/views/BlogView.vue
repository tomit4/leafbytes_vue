<script setup>
    import { RouterView} from "vue-router"
</script>

<template>
    <div>
        <RouterView />
    </div>
</template>

<style>
    .article-header {
        user-select: none;
        color: var(--white);
        opacity: 65%;
        background-color: var(--hd-dark-blue);
        font-family: HussarBold;
        font-size: 24px;
        text-align: center;
        width: 80vw;
        max-width: 400px;
        margin: 0.5rem auto;
        padding: 0.5rem 0.5rem 0rem 0.5rem;
        border: 1px solid var(--hd-dark-blue);
        border-radius: 7px 7px 2px 2px;
    }

    .article-header3 {
        user-select: none;
        color: var(--white);
        opacity: 65%;
        background-color: var(--hd-dark-blue);
        font-family: HussarBold;
        font-size: 16px;
        text-align: center;
        width: 80vw;
        max-width: 400px;
        height: 2.1rem;
        margin: -0.5rem auto 0rem auto;
        padding-bottom: 0.5rem;
        border: 1px solid var(--hd-dark-blue);
        border-radius: 0px 0px 7px 7px;
    }

    .article-header4 {
        color: var(--white);
        opacity: 65%;
        background-color: var(--hd-dark-blue);
        font-family: HussarBold;
        font-size: 14px;
        max-width: 350px;
        height: 2.1rem;
        margin-bottom: -0.5rem;
        margin-left: 0.4rem;
        padding: 0.5rem;
        border: 1px solid var(--hd-dark-blue);
        border-radius: 7px 7px 0px 0px;
    }

    .article-content {
        font-family: LiberationMono;
        font-size: 0.96rem;
        font-weight: 600;
        color: var(--dark-blue);
        line-height: 1.2rem;
        margin: 1rem;
    }

    .article-outside-links {
        font-weight: 900;
        text-decoration: none;
        color: var(--link-clr);
    }

    #home-header {
        padding-top: 0.75rem;
    }

    .header-images {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem auto 0.5rem auto;
        width: clamp(250px, 80vw, 90%);
    }

    .intro-header {
        align-items: flex-right;
        position: absolute;
        width: 98vw;
        height: 8vh;
    }

    .prev-btn {
        display: flex;
        position: sticky;
        width: 1.25rem;
        height: 1.25rem;
        padding: 0.25rem;
        opacity: 70%;
        background-color: var(--hd-dark-blue);
        border: 0px solid var(--hd-dark-blue);
        border-radius: 4px;
        top: 2rem;
        left: 0.5vw;
    }

    .next-btn {
        display: flex;
        position: sticky;
        width: 1.25rem;
        height: 1.25rem;
        padding: 0.25rem;
        opacity: 70%;
        background-color: var(--hd-dark-blue);
        border: 0px solid var(--hd-dark-blue);
        border-radius: 4px;
        top: 2rem;
        right: 0.5vw;
        float: right;
    }

    .prev-btn > *,
    .next-btn > * {
        padding-bottom: 0.2rem;
    }

    .prev-btn:hover,
    .next-btn:hover {
        cursor: pointer;
        transform: scale(1.1);
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
        width: 90vw;
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
        width: clamp(15rem, 90%, 50rem);
        margin: 0.25rem auto 0.25rem auto;
    }

    .inter-article-links,
    .footnotes-links {
        color: var(--hd-mid-blue);
    }

    .inter-article-links,
    .return-caret:hover,
    .footnotes-links:hover {
        cursor: pointer;
    }

    .footnotes{
        font-family: LiberationMono;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--dark-blue);
        line-height: 1.2rem;
        list-style: none;
    }

    .footnote-container {
        margin-left: -2rem;
    }

    .footnote-href {
        text-decoration: none;
        color: var(--hd-mid-blue);
    }

    .spacer {
        height: 5rem;
        background: transparent;
    }
</style>
