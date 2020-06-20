<template>
    <div class="bg-gray-100 h-full">
        <div id="header" class="mx-auto px-12 h-full w-full grid grid-rows-4 row-gap-8">
            <Header></Header>
            <div class="grid grid-cols-2 gap-64 row-span-1">
                <div class="text-6xl mx-8 text-left">
                    New product branding <span class="text-indigo-500">campaign</span>
                </div>
                <Card class=" w-full"></Card>
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

</style>
