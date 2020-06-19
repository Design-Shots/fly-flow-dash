<template>
    <div class="container grid grid-cols-7 divide-x divide-gray-400">
        <div class="m-3 rounded-full p-5 col-span-1">
            <font-awesome-icon icon="chevron-left" size="2x"></font-awesome-icon>
        </div>
        <div class="col-span-4 grid grid-cols-2">
            <div class="grid grid-cols-3">
                <div>Overview</div>
                <div>Tasks</div>
                <div>Roadmap</div>
            </div>
            <div class="grid grid-cols-5">
                <div class="col-span-1 px-6">
                    <div class="rounded-full mx-auto transition duration-500 ease-in-out bg-gray-300 hover:bg-gray-400">
                        <font-awesome-icon icon="chevron-left" size="xs"></font-awesome-icon>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="mx-1">May 11-17, 2020</div>
                </div>
                <div class="col-span-1 px-6">
                    <div class="rounded-full mx-auto transition duration-500 ease-in-out bg-gray-300 hover:bg-gray-400">
                        <font-awesome-icon icon="chevron-right" size="xs"></font-awesome-icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-2 grid grid-cols-2">
            <div class="rounded-full mx-auto transition duration-500 ease-in-out hover:bg-gray-400">
                <font-awesome-icon :icon="['fas','search']" size="2x"></font-awesome-icon>
            </div>
            <div>Plus</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Header"
    };
</script>

<style scoped>

</style>
