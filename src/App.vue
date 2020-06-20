<template>
  <div id="app" class="h-full w-full">
    <SideBar></SideBar>
    <MainContent></MainContent>
    <RightContextMenu></RightContextMenu>
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
  display: grid;
  grid-template-columns: 100px 4fr 1fr;
  grid-template-rows: 1fr;
}
</style>
