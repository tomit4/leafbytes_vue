<script setup>
    import Portfolio from "./views_components/Portfolio.vue"
</script>

<template>
    <div>
        <div class="article-entire">
            <div class="leafbytes-body">
                <p class="article-header" id="home-header">leafbytes</p>
                <p class="article-header3">web dev portfolio and blog</p>
                <ul class="article-links">
                    <li class="directories">
                        <Portfolio />
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

    .tree-container{
        max-width: 26rem;
        margin: 0 auto;
    }
</style>
