<template>
    <div class="container pl-4 mx-auto">
        <div class="grid grid-cols-2 grid-gap-8 m-auto">
            <div class="text-black text-5xl m-auto text-justify">Details</div>
            <div class="text-gray-600 text-sm m-auto uppercase text-justify">Collapse
                <font-awesome-icon :icon="['fal','chevron-right']" size="xs"
                                   class="mx-2"></font-awesome-icon>
            </div>
        </div>
        <div class="grid grid-cols-2 col-gap-6 mx-auto p-4">
            <Card class="p-3 bg-gray-100">
                <div class="text-center text-xl">Progress</div>
                <div class="chart">
                    <font-awesome-layers class="fa-6x">
                        <font-awesome-icon :icon="['fal','circle-notch']" :transform="{ rotate: 42 }"
                                           class="text-indigo-500"></font-awesome-icon>
                        <div class="rounded-full m-auto my-4 p-4 transition duration-500 ease-in-out h-16 w-16 border-2 border-gray-200 shadow-md text-center text-lg">
                            59%
                        </div>
                    </font-awesome-layers>
                </div>
                <div class="text-2xl mt-3">$13,620</div>
                <div class="text-gray-500 text-sm">Earned Value</div>
            </Card>
            <div class="grid grid-rows row-gap-6">
                <Card class="w-32 h-32 bg-gray-100">
                    <div class="p-6">
                        <font-awesome-icon :icon="['fal','file']" size="2x"
                                           class="m-2"></font-awesome-icon>
                        <div class="text-sm">Reports</div>
                    </div>
                </Card>
                <Card class="w-32 h-32 bg-gray-100">
                    <div class="p-6">
                        <font-awesome-icon :icon="['fal','comment-alt']" size="2x"
                                           class="m-2"></font-awesome-icon>
                        <div class="text-sm">Reports</div>
                    </div>
                </Card>
            </div>
        </div>
        <div class="px-2 m-auto">
            <div class="text-left text-xl my-4">8 actions today</div>
            <div class="time-column grid">
                <div class="timeline">
                    <div class="bubble">16:40</div>
                </div>
                <div class="entries">
                    <div class="entry">
                        <div class="title">Judith Henry</div>
                        <div class="subtitle">Paused "PR Strategies planning"</div>
                    </div>
                </div>
            </div>
        </div>
        <Card class="bg-gray-800 text-gray-100  p-6  my-6 mx-3">
            <div class="grid grid-cols-2">
                <div class="grid grid-rows-2">
                    <div class="grid grid-cols-3  col-gap-4 text-sm text-center">
                        <span class="col-span-1">Meeting</span>
                        <span class="col-span-2">Today, 17:30</span>
                    </div>
                    <div class="text-left mt-2 text-lg font-semibold">Website discussion</div>
                </div>
                <div>
                    <div class="rounded-full ml-auto p-4 transition duration-500 ease-in-out bg-gray-700 hover:bg-indigo-600 h-16 w-16 border-none shadow-lg ">
                        <font-awesome-icon :icon="['fas','video']" size="2x" class="text-white"></font-awesome-icon>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 col-gap-3 w-full mt-6">
                <button class="w-full bg-green-500 hover:bg-transparent text-gray-200 hover:text-white py-2 px-4 border border-transparent hover:border-green-500 rounded">
                    Accept
                </button>
                <button class="w-full bg-transparent hover:bg-green-500 text-gray-200 hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                    Reject
                </button>
            </div>
        </Card>
    </div>
</template>

<script>
    import Card from "./Card";

    export default {
        name: "RightContextMenu",
        components: {
            Card
        }
    };
</script>

<style scoped>
    .container {
        background: #EEF7FF;
    }

    .time-column {
        grid-template-columns: 25px 1fr;
    }
</style>
