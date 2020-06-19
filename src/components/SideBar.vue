<template>
    <div class="container  grid">
        <div class="logo">
            <div class="m-3 rounded-full p-5">
                <font-awesome-icon icon="circle" size="2x"></font-awesome-icon>
            </div>
        </div>
        <div>
            <div class="my-1">
                <div class="m-3 rounded-full p-5 transition duration-500 ease-in-out hover:bg-indigo-700">
                    <font-awesome-icon icon="list" size="2x"></font-awesome-icon>
                </div>
            </div>
            <div class="my-1">
                <div class="m-3 rounded-full p-5 transition duration-500 ease-in-out hover:bg-indigo-700 bg-indigo-700">
                    <font-awesome-icon icon="clipboard" size="2x"></font-awesome-icon>
                </div>
            </div>
            <div class="my-1">
                <div class="m-3 rounded-full p-5 transition duration-500 ease-in-out hover:bg-indigo-700">
                    <font-awesome-icon icon="bell" size="2x"></font-awesome-icon>
                </div>
            </div>
            <div class="my-1">
                <div class="m-3 rounded-full p-5 transition duration-500 ease-in-out hover:bg-indigo-700">
                    <font-awesome-icon icon="envelope" size="2x"></font-awesome-icon>
                </div>
            </div>
            <div class="my-1">
                <div class="m-3 rounded-full p-5 transition duration-500 ease-in-out hover:bg-indigo-700">
                    <font-awesome-icon icon="clock" size="2x"></font-awesome-icon>
                </div>
            </div>
        </div>
        <div class="m-3 rounded-full">
                <img src="@/assets/me.jpg" class="profile rounded-full w-full transition duration-500 ease-in-out hover:shadow-md shadow-none hover:opacity-75" alt="">
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
