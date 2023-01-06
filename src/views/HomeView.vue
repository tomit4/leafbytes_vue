<script setup>
    import { ref } from 'vue'
    import Portfolio from "./views_components/Portfolio.vue"
    import Blog from "./views_components/Blog.vue"
</script>

<template>
    <div>
        <div class="article-entire">
            <div class="leafbytes-body">
                <p class="article-header" id="home-header">leafbytes</p>
                <p class="article-header3">web dev portfolio and blog</p>
                <ul class="article-links">
                    <li ref="dirEl" class="directories">
                        <Portfolio />
                    </li>
                    <li ref="dirEl" class="directories">
                        <Blog />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
    .article-links {
        list-style: none;
        position: relative;
    }

    .directories {
        font-family: LiberationMono;
        font-size: 16px;
        color: var(--hd-dark-blue);
        margin: 1.25rem auto;
        margin-left: -2.5rem;
        opacity: 70%;
    }

    .link-item {
        color: var(--hd-dark-blue);
        background-color: var(--white);
        opacity: 95%;
        font-weight: 900;
        font-size: 17px;
        width: 85vw;
        max-width: 26rem;
        padding-top: 0.1rem;
        padding-left: 1rem;
        border: 3px solid var(--hd-dark-blue);
        margin: 0 auto;
        border-radius: 5px 5px 0px 0px;
        border-top: none;
        border-right: none;
    }

    .link-item-scaled {
        transform: scale(1.03);
    }

    .link-item:hover {
        cursor: pointer;
    }

    .tree-subject {
        /* visibility: hidden; */
        position: absolute;
        color: rgba(0, 44, 70, 1);
        text-decoration: none;
        font-weight: 600;
        background-color: rgba(255, 255, 255, 1);
        opacity: 95%;
        border: 3px solid rgba(0, 44, 70, 1);
        border-radius: 5px;
        border-right: none;
        border-top: none;
        width: auto;
        padding: 0.1rem 0 0 0.3rem;
        white-space: nowrap;
    }

    .tree-container{
        max-width: 26rem;
        margin: 0 auto;
    }

    /* animations can't influence display, so utilized this */
    .displaynone {
        display: none;
    }

    @media (max-width: 31rem) {
        .tree-container {
            max-width: 85vw;
        }
    }
</style>
