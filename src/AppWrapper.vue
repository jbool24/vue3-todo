<template>
  <FullPageLayout>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <router-view></router-view>
    <router-link class="mt-20 text-lg" :to="{ path: '/todos' }"
      >Todo List</router-link
    >
  </FullPageLayout>
</template>

<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { defineComponent } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";
import FullPageLayout from "./layouts/full-page.blank.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  components: {
    FullPageLayout,
    HelloWorld,
  },
});
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
