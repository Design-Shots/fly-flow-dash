<template>
    <div class="grid grid-cols-2 gap-64">
        <div class="grid grid-cols-4 my-auto">
            <div class="rounded-full m-auto p-4 col-span-1 bg-gray-300 hover:bg-gray-400 h-16 w-16">
                <font-awesome-icon :icon="['fal','chevron-left']" size="2x"></font-awesome-icon>
            </div>
            <div class="grid grid-cols-3 uppercase col-span-3 my-auto  align-middle">
                <div class="group my-auto items-center">
                    <div class="text-gray-100">
                        • <!-- Used for spacing -->
                    </div>
                    <div class="text-gray-600 group-hover:text-indigo-600 transition duration-300 ease-in-out">
                        Overview
                    </div>
                    <div class="transform -translate-y-1 group-hover:translate-y-1 text-gray-100 group-hover:text-indigo-600 transition duration-300 ease-in-out">
                        •
                    </div>
                </div>
                <div class="group my-auto items-center">
                    <div class="text-gray-100">
                        • <!-- Used for spacing -->
                    </div>
                    <div class="text-gray-600 group-hover:text-indigo-600 transition duration-300 ease-in-out">
                        Tasks
                    </div>
                    <div class="transform -translate-y-1 group-hover:translate-y-1 text-gray-100 group-hover:text-indigo-600 transition duration-300 ease-in-out">
                        •
                    </div>
                </div>
                <div class="group my-auto items-center">
                    <div class="text-gray-100">
                        • <!-- Used for spacing -->
                    </div>
                    <div class="text-gray-600 group-hover:text-indigo-600 transition duration-300 ease-in-out">
                        Roadmap
                    </div>
                    <div class="transform -translate-y-1 group-hover:translate-y-1 text-gray-100 group-hover:text-indigo-600 transition duration-300 ease-in-out">
                        •
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-3 my-auto">
            <div class="grid grid-cols-6 col-span-2 my-auto">
                <div class="col-span-1 px-6">
                    <div class="rounded-full mx-auto p-1 transition duration-500 ease-in-out bg-gray-500 hover:bg-gray-400 h-8 w-8">
                        <font-awesome-icon :icon="['fal','chevron-left']" size="xs"
                                           class="text-white"></font-awesome-icon>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="mx-1">May 11-17, 2020</div>
                </div>
                <div class="col-span-1 px-6">
                    <div class="rounded-full mx-auto p-1 transition duration-500 ease-in-out bg-gray-500 hover:bg-gray-400 h-8 w-8">
                        <font-awesome-icon :icon="['fal','chevron-right']" size="xs"
                                           class="text-white"></font-awesome-icon>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 col-span-1 my-auto">
                <div class="rounded-full mr-auto p-4 transition duration-500 ease-in-out hover:bg-gray-300 h-16 w-16">
                    <font-awesome-icon :icon="['fal','search']" size="2x"></font-awesome-icon>
                </div>
                <div class="rounded-full mx-auto p-4 transition duration-500 ease-in-out bg-gradient-indigo-dark-light hover:bg-indigo-600 h-16 w-16 border-none shadow-lg ">
                    <font-awesome-icon :icon="['fal','plus']" size="2x" class="text-white"></font-awesome-icon>
                </div>
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
