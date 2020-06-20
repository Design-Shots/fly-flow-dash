<template>
    <div class="bg-gray-100 h-full">
        <div class="m-4">
            <Header></Header>
            <div class="content">
                <div class="title"></div>
                <Card></Card>
                <Timeline></Timeline>
            </div>
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
</style>
