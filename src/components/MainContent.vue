<template>
    <div class="bg-gray-100 h-full">
        <div id="header" class="mx-auto px-12 h-full w-full grid grid-rows-4 row-gap-8">
            <Header></Header>
            <div class="grid grid-cols-2 gap-64 row-span-1">
                <div class="text-6xl mx-8 text-left">
                    New product branding <span class="text-indigo-500">campaign</span>
                </div>
                <Card class="w-full">
                    <div class="grid grid-cols-2 col-gap-10  p-6 mx-auto text-left ">
                        <div class="grid grid-rows-2">
                            <div class="text-5xl">
                                Project Estimate
                            </div>
                            <div class="my-auto">
                                <div class="text-lg text-left m-auto my-3 text-gray-500 row-span-1">
                                    Team members
                                </div>
                                <div class="grid grid-cols-5 grid-rows-1 grid-flow-col-dense avatars mx-auto">
                                    <div class="rounded-full w-full">
                                        <img src="@/assets/me.jpg"
                                             class="border-2 border-white profile rounded-full m-0 w-full h-full transition duration-500 ease-in-out hover:shadow-md shadow-none hover:opacity-75"
                                             alt="">
                                    </div>
                                    <div class="rounded-full w-full avatar transform -translate-x-4">
                                        <img src="@/assets/me.jpg"
                                             class="border-2 border-white profile rounded-full m-0 w-full h-full transition duration-500 ease-in-out hover:shadow-md shadow-none hover:opacity-75"
                                             alt="">
                                    </div>
                                    <div class="rounded-full w-full avatar transform -translate-x-8">
                                        <img src="@/assets/me.jpg"
                                             class="border-2 border-white profile rounded-full m-0 w-full h-full transition duration-500 ease-in-out hover:shadow-md shadow-none hover:opacity-75"
                                             alt="">
                                    </div>
                                    <div class="rounded-full w-full avatar transform -translate-x-12">
                                        <img src="@/assets/me.jpg"
                                             class="border-2 border-white profile rounded-full m-0 w-full h-full transition duration-500 ease-in-out hover:shadow-md shadow-none hover:opacity-75"
                                             alt="">
                                    </div>
                                    <div class="rounded-full w-full avatar transform -translate-x-16">
                                        <img src="@/assets/me.jpg"
                                             class="border-2 border-white profile rounded-full m-0 w-full h-full transition duration-500 ease-in-out hover:shadow-md shadow-none hover:opacity-75"
                                             alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-rows-3 row-gap-5">
                            <div class="grid grid-cols-2">
                                <div class="text-right m-auto mr-3">
                                    <div class="text-lg text-gray-500">Tasks</div>
                                    <div class="text-3xl">21</div>
                                </div>
                                <div class="m-auto h-20 w-20">
                                    <div class="bg-gradient-yellow-light-dark rounded-lg p-4">
                                        <font-awesome-icon :icon="['fas', 'layer-group']" size="3x"
                                                           class="text-white"></font-awesome-icon>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="text-right m-auto mr-3">
                                    <div class="text-lg text-gray-500">Hours</div>
                                    <div class="text-3xl">364</div>
                                </div>
                                <div class="m-auto h-20 w-20">
                                    <div class="bg-gradient-orange-light-dark rounded-lg p-4">
                                        <font-awesome-icon :icon="['fas', 'stopwatch']" size="3x"
                                                           class="text-white"></font-awesome-icon>
                                    </div>
                                </div>
                            </div>
                            <div class="uppercase my-auto text-indigo-500 text-right">
                                More info
                                <font-awesome-icon :icon="['fal','chevron-right']" size="xs"
                                                   class="mx-2"></font-awesome-icon>
                            </div>
                        </div>

                    </div>
                </Card>
            </div>
            <Timeline></Timeline>
        </div>
    </div>
</template>

<script>
    import Header from "./Header";
    import Card from "./Card";
    import Timeline from "./ProjectTimeline";

    export default {
        name: "MainContent",
        components: {
            Header,
            Card,
            Timeline
        }
    };
</script>

<style scoped>
    #header {
        display: grid;
        grid-template-rows: 100px 1fr 4fr;
        grid-template-columns: 1fr;
    }

    .profile {
        filter: grayscale(90%);
    }

</style>
