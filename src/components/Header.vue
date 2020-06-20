<template>
    <div class="container grid grid-cols-7">
        <div class="rounded-full mx-auto p-4 col-span-1 bg-gray-300 hover:bg-gray-400 h-16 w-16">
            <font-awesome-icon :icon="['fal','chevron-left']" size="2x"></font-awesome-icon>
        </div>
        <div class="col-span-4 grid grid-cols-2 my-auto">
            <div class="grid grid-cols-3 uppercase ">
                <div class="group ">
                    <div class="text-gray-600 group-hover:text-indigo-600">
                        Overview
                    </div>
                    <div class="text-gray-100 group-hover:text-indigo-600">
                        •
                    </div>
                </div>
                <div class="group ">
                    <div class="text-gray-600 group-hover:text-indigo-600">
                        Tasks
                    </div>
                    <div class="text-gray-100 group-hover:text-indigo-600">
                        •
                    </div>
                </div>
                <div class="group ">
                    <div class="text-indigo-600 group-hover:text-indigo-600">
                        Roadmap
                    </div>
                    <div class="text-indigo-600 group-hover:text-indigo-600">
                        •
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-5">
                <div class="col-span-1 px-6">
                    <div class="rounded-full mx-auto transition duration-500 ease-in-out bg-gray-300 hover:bg-gray-400">
                        <font-awesome-icon :icon="['fal','chevron-left']" size="xs"></font-awesome-icon>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="mx-1">May 11-17, 2020</div>
                </div>
                <div class="col-span-1 px-6">
                    <div class="rounded-full mx-auto transition duration-500 ease-in-out bg-gray-300 hover:bg-gray-400">
                        <font-awesome-icon :icon="['fal','chevron-right']" size="xs"></font-awesome-icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-2 grid grid-cols-2">
            <div class="rounded-full ml-auto mr-8 p-4 transition duration-500 ease-in-out  hover:bg-gray-400 h-16 w-16">
                <font-awesome-icon :icon="['fal','search']" size="2x"></font-awesome-icon>
            </div>
            <div class="rounded-full p-4 transition duration-500 ease-in-out bg-gradient-indigo-dark-light hover:bg-indigo-600 h-16 w-16 border-none shadow-lg ">
                <font-awesome-icon :icon="['fal','plus']" size="2x" class="text-white"></font-awesome-icon>
            </div>
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
