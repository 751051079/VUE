<template>
  <nav-header></nav-header>
  <router-view />
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
</style>
