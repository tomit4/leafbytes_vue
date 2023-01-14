<script setup>
    import { onMounted } from 'vue'
    import Prism from "prismjs"
    onMounted(() => { Prism.highlightAll() })
</script>

<template>
    <div>
        <div class="article-entire">
            <div class="intro-header">
                <router-link class="next-btn" to="git-basics"></router-link>
                <router-link class="prev-btn" to="git-basics"></router-link>
            </div>
            <p class="article-header">the readme</p>
            <p class="article-header3">documentation for beginners</p>
            <div class="article-body">
                <figure>
                    <img
                        class="header-images"
                        src="../../assets/img/markdown_logo.webp"
                        alt="An image of the markdown logo"
                        title="An image of the markdown logo"
                        cite=""
                        loading="lazy"
                    />
                <figcaption>The Markdown Logo</figcaption>
                </figure>
                <blockquote class="article-quotes" cite="https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg">
                    "Documentation is a love letter that you write to your
                    future self."
                    <br> -<a class="blockquote-links" target="_blank"
                    rel="noopener noreferrer"
                    href="https://quotefancy.com/damian-conway-quotes"><em>Damian
                    Conway</em></a>
                </blockquote>
                <h4 class="article-header4">Introduction</h4>
                <p class="article-content">

                </p>

                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
                <p class="article-content">

                </p>
            </div>
            <div class="spacer"></div>
        </div>
    </div>
</template>
