<template>
  <main>
    <div id="app">
      <!-- Will apply transition when switching between different routes -->
      <transition name="view" mode="out-in">
        <!-- Router view will render components based on routes defined in index.js  -->
        <router-view> </router-view>
      </transition>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
