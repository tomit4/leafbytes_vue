<script setup>
    import Portfolio from './views_components/Portfolio.vue'
    import Blog from './views_components/Blog.vue'
    import Dev from './views_components/Dev.vue'
    import Use from './views_components/Use.vue'
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
                    <li class="directories">
                        <Blog />
                    </li>
                    <li class="directories">
                        <Dev />
                    </li>
                    <li class="directories">
                        <Use />
                    </li>
                </ul>
                <div class="spacer"></div>
            </div>
        </div>
    </div>
</template>

<style>
    .article-links {
        list-style: none;
        position: relative;
        margin-top: -0.75rem;
    }

    .directories {
        font-family: LiberationMono;
        font-size: 16px;
        color: var(--hd-dark-blue);
        margin: 1.25rem auto;
        padding-top: 0.5rem;
        margin-left: -2.5rem;
        opacity: 70%;
    }

    .link-item {
        user-select: none;
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
        transform: scale(1.05, 1.05);
    }

    .tree-subject {
        user-select: none;
        position: absolute;
        color: var(--hd-dark-blue);
        text-decoration: none;
        font-weight: 600;
        background-color: var(--white);
        opacity: 95%;
        border: 3px solid var(--hd-dark-blue);
        border-radius: 5px;
        border-right: none;
        border-top: none;
        width: auto;
        padding: 0.1rem 0 0 0.3rem;
        white-space: nowrap;
    }

    .tree-subject:hover {
        transform: scale(1.05, 1.05);
    }

    .tree-container{
        max-width: 26rem;
        margin: 0 auto;
    }

    /* animations can't influence display, so utilized this */
    .displaynone {
        display: none;
    }

    .spacer {
        height: 5rem;
        background: transparent;
    }

    @media (max-width: 31rem) {
        .tree-container {
            max-width: 85vw;
        }
    }
</style>
