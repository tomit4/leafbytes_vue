<script setup>
    function test() {
        console.log('this is a test of the button')
    }
</script>

<template>
    <div>
        <nav>
            <ul class="navi nav navbar">
                <li>
                    <button aria-label="contact" role="navigation" class="icons"
                    id="contact" @click="test">
                        <svg viewBox="0 0 20 20"><path fill="white" d="m1.574 5.286l7.5 4.029c.252.135.578.199.906.199c.328 0 .654-.064.906-.199l7.5-4.029c.489-.263.951-1.286.054-1.286H1.521c-.897 0-.435 1.023.053 1.286zm17.039 2.203l-7.727 4.027c-.34.178-.578.199-.906.199s-.566-.021-.906-.199s-7.133-3.739-7.688-4.028C.996 7.284 1 7.523 1 7.707V15c0 .42.566 1 1 1h16c.434 0 1-.58 1-1V7.708c0-.184.004-.423-.387-.219z"/></svg>
                    </button>
                </li>
                <li>
                    <button aria-label="about" role="navigation" class="icons"
                    id="about" @click="test">
                        <svg viewBox="0 0 24 24"><path fill="white" d="M3 4v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm8 3h2v2h-2V7zm0 4h2v6h-2v-6z"/></svg>
                    </button>
                </li>
                <li>
                    <button aria-label="home" role="navigation" class="icons"
                    id="home" @click="test">
                        <svg viewBox="0 0 1024 1024"><path fill="white" d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5z"/></svg>
                   </button>
                </li>
                <li>
                    <button aria-label="rss" role="navigation" class="icons"
                    id="rss" @click="test">
<svg viewBox="0 0 24 24"><path fill="white" d="M21 2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M11 17.5L9.5 19L5 14.5L9.5 10l1.5 1.5l-3 3l3 3m3.5 1.5L13 17.5l3-3l-3-3l1.5-1.5l4.5 4.5l-4.5 4.5M21 7H3V4h18v3Z"/></svg>
                    </button>
                </li>
                <li>
                    <button aria-label="link" role="navigation" class="icons"
                    id="link" @click="test">
                    <svg viewBox="0 0 448 512"><path fill="#ffffff" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm32 104c0-13.3 10.7-24 24-24c137 0 248 111 248 248c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24c83.9 0 152 68.1 152 152c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104c-13.3 0-24-10.7-24-24zm64 120c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"/></svg>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
    button {
        cursor: pointer;
    }

    .nav {
        position: fixed;
    }

    .navbar {
        position: fixed;
        background: #004b77;
        border: 4px solid #004b77;
        border-radius: 8px;
        opacity: 60%;
        width: 80vw;
        height: 2.5rem;
        list-style: none;
        top: 0%;
        display: flex;
        z-index: 2;
        justify-content: center;
        padding: 0rem 1.5rem 0rem 1rem;
        max-width: 1240px;
        margin: 0.25rem auto;
        left: 0;
        right: 0;
    }

    .icons {
        /* visibility: hidden; */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3;
        padding: 0.25rem;
        min-height: 27px;
        max-height: 29px;
        margin: 0.25rem 1rem 0.25rem 1rem;
        background: none;
        border: none;
        height: 2em;
        width: 2em;
        /* transform: translate(10%, -0%); */
    }

    #link {
        height: 1.5rem;
        width: 1.5rem;
    }
</style>
