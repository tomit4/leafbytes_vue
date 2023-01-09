<template>
    <div>
        <div class="article-entire">
            <div class="leafbytes-body">
                <p class="article-header" id="home-header">contact</p>
                <p class="article-header3">send me an email</p>
                <div class="article-body contact-body">
                    <div class="contact-container loadcontactfade">
                        <a href="mailto: leafbytes@protonmail.com"
                        class="sub-correspond">leafbytes@protonmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .contact-body {
        height: 69vh;
    }

    .contact-container {
        visibility: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: fixed;
        border: 6px solid var(--dark-blue);
        border-radius: 5px;
        background-image: linear-gradient(280deg, var(--bg-light-blue) 0%, var(--bg-dark-blue) 100%);
        height: 9rem;
        width: 80vw;
        max-width: 400px;
        top: 43.75%;
        left: 10vw;
    }

    .loadcontactfade {
        animation: loadinwelcomefromfade 1.5s ease-in;
        opacity: 65%;
        visibility: visible;
        animation-delay: 0.25s;
    }

    .sub-correspond {
        font-family: entsans;
        font-size: clamp(110%, 1rem, 120%);
        width: 20rem;
        text-align: center;
        text-shadow: 5px 4px 0px var(--dark-blue-70);
        text-decoration: none;
        color: white;
        z-index: 2;
        opacity: 80%;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }

    @keyframes loadinwelcomefromfade{
       from {
            opacity: 0;
            visibility: hidden;
       }
       to {
            opacity: 70%;
            visibility: visible;
       }
    }
</style>
