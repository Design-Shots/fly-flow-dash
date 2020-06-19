<template>
    <div class="container  grid">
        <div class="m-3 rounded-full p-5">
            <font-awesome-layers class="fa-2x">
                <font-awesome-icon :icon="['fas', 'circle']" transform="left-3 up-3"></font-awesome-icon>
                <font-awesome-icon :icon="['fas', 'circle']" transform="right-3 down-3" :style="{ opacity: '50%' }"></font-awesome-icon>
            </font-awesome-layers>


        </div>
        <div>
            <div class="my-1">
                <div class="m-3 rounded-full p-5 transition duration-500 ease-in-out hover:bg-indigo-700">
                    <font-awesome-icon :icon="['fal', 'list']" size="2x"></font-awesome-icon>

                </div>
            </div>
            <div class="my-1">
                <div class="m-3 rounded-full p-5 transition duration-500 ease-in-out hover:bg-indigo-700 bg-indigo-700">
                    <font-awesome-icon :icon="['fal', 'clipboard']" size="2x"></font-awesome-icon>
                </div>
            </div>
            <div class="my-1">
                <div class="m-3 rounded-full p-5 transition duration-500 ease-in-out hover:bg-indigo-700">
                    <font-awesome-icon :icon="['fal', 'bell']" size="2x"></font-awesome-icon>
                </div>
            </div>
            <div class="my-1">
                <div class="m-3 rounded-full p-5 transition duration-500 ease-in-out hover:bg-indigo-700">
                    <font-awesome-icon :icon="['fal', 'envelope']" size="2x"></font-awesome-icon>
                </div>
            </div>
            <div class="my-1">
                <div class="m-3 rounded-full p-5 transition duration-500 ease-in-out hover:bg-indigo-700">
                    <font-awesome-icon :icon="['fal', 'clock']" size="2x"></font-awesome-icon>
                </div>
            </div>
        </div>
        <div class="m-3 rounded-full">
            <img src="@/assets/me.jpg"
                 class="profile rounded-full w-full transition duration-500 ease-in-out hover:shadow-md shadow-none hover:opacity-75"
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
        grid-template-rows: 1fr 4fr 1fr;
        grid-gap: 8rem;
        color: white;
    }
</style>
