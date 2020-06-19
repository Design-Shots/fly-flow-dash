<template>
    <div class="container  grid">
        <div class="logo">
            <div class="icon"></div>
        </div>
        <div class="menu grid grid-rows-6">
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
        </div>
        <div class="user">
            <div class="icon"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideBar"
    };
</script>

<style scoped>
    .container {
        background: #5230ff;
        grid-template-rows: 1fr 4fr 1fr;
        grid-gap: 8rem;
        color: white;
    }

    .container div, .logo, .menu img {
        border: red 1px solid;
    }

    .logo {
    }
</style>
