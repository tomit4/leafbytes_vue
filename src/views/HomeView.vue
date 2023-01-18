<script setup>
    /* add a fade effect for square */
    /* add circle animations inside of square */
    /* make square clickable */
    /* onclick, square renders more circuitry animation leading to project links */
</script>

<template>
    <div>
        <div class="container">
            <div class="square beating"></div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        top: 35vh;
    }

    .square {
        width: 6rem;
        height: 6rem;
        border: 6px solid var(--dark-blue-70);
        background-color: var(--light-blue-50);
        border-radius: 5px;
    }

    .beating {
        animation: glowing 1s ease-in-out infinite alternate;
    }

    @keyframes glowing {
      0% {
        box-shadow: 0 0 0px var(--white), 0 0 2.5px var(--white), 0 0 7.5px #baf6ff, 0 0 12.5px #baf6ff, 0 0 17.5px #baf6ff, 0 0 22.5px #baf6ff, 0 0 27.5px #baf6ff;
        transform: scale(0.98)
      }

      25% { transform: scale(0.98) }
      50% { transform: scale(1.02) }
      75% { transform: scale(0.98) }
      100% {
        box-shadow: 0 0 2.5px var(--white), 0 0 7.5px #86c8f1, 0 0 12.5px #86c8f1, 0 0 17.5px #86c8f1, 0 0 22.5px #86c8f1, 0 0 27.5px #86c8f1, 0 0 32.5px #86c8f1;
        transform: scale(0.98)
      }
    }
</style>
