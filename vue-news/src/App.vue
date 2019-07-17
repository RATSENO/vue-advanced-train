<template>
  <div id="app">
    <!-- Strongly Recommend -->
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from '../src/components/ToolBar.vue';

export default {
  components: {
    ToolBar,
  },
}
</script>

<style>
</style>
