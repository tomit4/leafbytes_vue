<script setup>
    import links from './views_data/linksview.json'
</script>

<template>
    <div>
        <div class="article-entire">
            <div class="leafbytes-body">
                <p class="article-header" id="home-header">links</p>
                <p class="article-header3">sites you should check out</p>
                <div class="article-body">
                        <h4 class="article-header4 links-header-4">Blogs</h4>
                        <ul class="links-list" v-for="link in links[0].blogs">
                            <li class="links-item">
                                <a class="article-outside-links" target="_blank"
                                rel="noopener noreferrer"
                                :href="link.href">{{ link.tag }}</a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .links-header-4 {
        margin-bottom: 1rem;
    }

    .links-list {
        text-decoration: none;
        list-style: none;
        display: block;
        align-items: left;
        justify-content: left;
        margin: 0.5rem 0 0 -1rem;
    }

    .links-item {
        font-family: LiberationMono;
        font-size: 0.95rem;
    }
</style>
