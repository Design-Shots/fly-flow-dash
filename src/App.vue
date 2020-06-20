<template>
    <div id="app" class="h-full w-full">
        <div id="content">
            <SideBar class="h-screen fixed left-0"></SideBar>
            <MainContent class="col-start-2"></MainContent>
            <RightContextMenu></RightContextMenu>
        </div>
    </div>
</template>

<script>
    import SideBar from "./components/SideBar";
    import MainContent from "./components/MainContent";
    import RightContextMenu from "./components/RightContextMenu";

    export default {
        name: "App",
        components: {
            SideBar,
            MainContent,
            RightContextMenu
        }
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #content {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns:100px 4fr 1fr;
    }
</style>
