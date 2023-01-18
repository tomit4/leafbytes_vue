<template>
    <div>
        <div class="container">
            <div class="square"></div>
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
        width: 8rem;
        height: 8rem;
        border: 6px solid var(--dark-blue-70);
        background-color: var(--light-blue-50);
        border-radius: 5px;
    }
</style>
