<template>
    <div class="container">
            <span class="notfound-container loadfade">
                <span class="message">404</span>
                <span class="sub-message">Page Not Found</span>
            </span>
        </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 50vh;
        left: 50vw;
        right: 50vw;
        margin: 0 auto;
    }

    .notfound-container {
        visibility: hidden;
        display: flex;
        justify-content: center;
        align-self: center;
        position: fixed;
        text-align: center;
        border: 6px solid var(--dark-blue);
        border-radius: 5px;
        background-image: linear-gradient(280deg, var(--bg-light-blue) 0%, var(--bg-dark-blue) 100%);
        height: 9rem;
        width: 18rem;
        opacity: 65%;
    }

    .loadfade {
        animation: fadein 1.5s ease-in;
        opacity: 65%;
        visibility: visible;
        animation-delay: 0.25s;
    }

    .message {
        display: flex;
        flex-direction: column;
        align-self: center;
        justify-content: center;
        position: absolute;
        font-family: entsans;
        font-size: clamp(200%, 1.5rem, 300%);
        text-align: center;
        text-shadow: 5px 4px 0px var(--dark-blue-70);
        color: var(--white);
        opacity: 80%;
        z-index: 2;
        top: 30%;
        margin: 0 auto;
    }

    .sub-message {
        display: flex;
        flex-direction: column;
        align-self: center;
        justify-content: center;
        position: absolute;
        font-family: entsans;
        font-size: clamp(110%, 1rem, 120%);
        text-shadow: 5px 4px 0px var(--dark-blue-70);
        color: var(--white);
        z-index: 2;
        opacity: 80%;
        top: 55%;
    }

/***********************
    ANIMATIONS
***********************/
    @keyframes fadein{
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
