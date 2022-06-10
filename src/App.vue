<template>
  <div class="bg">
    <nav-header></nav-header>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import navHeader from '@/components/nav-header.vue'
export default defineComponent({
  name: "App",
  components: { navHeader }
})
</script>

<style lang="scss">
@import url('./common/commoncs.css');

* {
  margin: 0;
  padding: 0;
}
.bg{
  background-image: url('./assets/bg/bg1.jpg');
  background-size: 100% 100vh;
  min-height: 100vh;
}
</style>
