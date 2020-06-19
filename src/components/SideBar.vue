<template>
    <div class="container  grid grid-rows-7 text-white row-gap-16">
        <div class="mt-0 mb-auto rounded-full h-16 2-16 row-span-1 row-start-2">
            <font-awesome-layers class="fa-2x">
                <font-awesome-icon :icon="['fas', 'circle']" transform="left-3 up-3"></font-awesome-icon>
                <font-awesome-icon :icon="['fas', 'circle']" transform="right-3 down-3"
                                   :style="{ opacity: '50%' }"></font-awesome-icon>
            </font-awesome-layers>
        </div>
        <div class="row-span-4">
            <div class="my-3 mx-auto px-3">
                <div class="rounded-full h-20 w-20 p-6 transition duration-500 ease-in-out hover:bg-indigo-700">
                    <font-awesome-icon :icon="['fal', 'list']" size="2x"></font-awesome-icon>
                </div>
            </div>
            <div class="my-3 mx-auto px-3">
                <div class="rounded-full h-20 w-20 p-6 transition duration-500 ease-in-out hover:bg-indigo-700 bg-indigo-700">
                    <font-awesome-icon :icon="['fal', 'clipboard']" size="2x"></font-awesome-icon>
                </div>
            </div>
            <div class="my-3 mx-auto px-3">
                <div class="rounded-full h-20 w-20 p-6 transition duration-500 ease-in-out hover:bg-indigo-700">
                    <font-awesome-icon :icon="['fal', 'bell']" size="2x"></font-awesome-icon>
                </div>
            </div>
            <div class="my-3 mx-auto px-3">
                <div class="rounded-full h-20 w-20 p-6 transition duration-500 ease-in-out hover:bg-indigo-700">
                    <font-awesome-icon :icon="['fal', 'envelope']" size="2x"></font-awesome-icon>
                </div>
            </div>
            <div class="my-3 mx-auto px-3">
                <div class="rounded-full h-20 w-20 p-6 transition duration-500 ease-in-out hover:bg-indigo-700">
                    <font-awesome-icon :icon="['fal', 'clock']" size="2x"></font-awesome-icon>
                </div>
            </div>
        </div>
        <div class="m-3 rounded-full row-span-1">
            <img src="@/assets/me.jpg"
                 class="profile rounded-full m-auto w-16 h-16 transition duration-500 ease-in-out hover:shadow-md shadow-none hover:opacity-75"
                 alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideBar"
    };
</script>

<style scoped>
    .profile {
        filter: grayscale(90%);
    }

    .container {
        background: #686CFF;
    }
</style>
