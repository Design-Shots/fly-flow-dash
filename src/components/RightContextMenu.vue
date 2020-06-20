<template>
    <div class="container">
        <div class="grid grid-cols-2 grid-gap-8 m-auto">
            <div class="text-black text-5xl m-auto text-justify">Details</div>
            <div class="text-gray-600 text-sm m-auto uppercase text-justify">Collapse
                <font-awesome-icon :icon="['fal','chevron-right']" size="xs"
                                   class="mx-2"></font-awesome-icon>
            </div>
        </div>
        <div class="grid grid-cols-2 col-gap-6">
            <Card class="p-3">
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
                <Card class="w-32 h-32">
                    <div class="p-6">
                        <font-awesome-icon :icon="['fal','file']" size="2x"
                                           class="m-2"></font-awesome-icon>
                        <div class="text-sm">Reports</div>
                    </div>
                </Card>
                <Card class="w-32 h-32">
                    <div class="p-6">
                        <font-awesome-icon :icon="['fal','comment-alt']" size="2x"
                                           class="m-2"></font-awesome-icon>
                        <div class="text-sm">Reports</div>
                    </div>
                </Card>
            </div>
        </div>
        <div>
            <div class="title">8 actions today</div>
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
        <Card>
            <div class="left">
                <div class="title">Meeting | Today, 17:30</div>
                <div class="subtitle">Website Discussion</div>
            </div>
            <div class="right">
                <div class="icon">Zoom</div>
            </div>
            <div class="buttons">
                <div class="success">Accept</div>
                <div class="outline">Reject</div>
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
</style>
