<script setup>
    import { onMounted } from 'vue'
    import Prism from "prismjs"
    onMounted(() => { Prism.highlightAll() })
</script>

<template>
    <div>
        <div class="article-entire">
            <div class="intro-header">
                <router-link class="next-btn" to="ortholinear-keyboards"></router-link>
                <router-link class="prev-btn" to="ortholinear-keyboards"></router-link>
            </div>
            <p class="article-header">espanso</p>
            <p class="article-header3">expand your text</p>
            <div class="article-body">
                <figure>
                    <img
                        class="header-images"
                        id="olkb"
                        src="../../assets/img/espanso_logo.webp"
                        alt="An image of a 40% Planck OrthoLinear Keyboard"
                        title="A 40% Planck Ortholinear Keyboard"
                        cite="https://commons.wikimedia.org"
                        loading="lazy"
                    />
                <figcaption>The Espanso Logo</figcaption>
                </figure>
                <blockquote class="article-quotes" cite="essay: The Deep Zoo, by Rikki Ducornet">
                    "The texts we write are not visible until they are written. Like a
                    creature coaxed from out a deep wood, the text reveals itself little by little.
                    The maze evokes a multiplicity of approaches, the many tricks we employ to tempt
                    the text hither."
                    <br> -<a class="blockquote-links" target="_blank"
                    rel="noopener noreferrer"
                    href="https://library.indstate.edu/about/units/rbsc/obscure/PDFs/ducornet_deep.pdf"><em>Ricki Ducornet<br>The Deep Zoo</em></a>
                </blockquote>


                <div class="spacer"></div>
            </div>
        </div>
    </div>
</template>
