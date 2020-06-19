<template>
    <div class="main">
        <div>
            LeftArrow
        </div>
        <div class="grid grid-columns-3">
            <div>Overview</div>
            <div>Tasks</div>
            <div>Roadmap</div>
        </div>
        <div class="grid grid-columns-2">
            <div class="grid grid-columns-3">
                <div>-</div>
                <div>Date</div>
                <div>-</div>
            </div>
            <div>search</div>
        </div>
        <div>Plus</div>

    </div>
</template>

<script>
    export default {
        name: "Header"
    };
</script>

<style scoped>
    .main {
        display: grid;
        grid-template-columns: 1fr 4fr 4fr 1fr;
    }

    .main div {
        border: 1px red solid;
    }
</style>
