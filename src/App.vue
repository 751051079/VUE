<template>
  <nav-header v-if="!isHeader"></nav-header>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navHeader from "@/components/nav-header.vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "App",
  data() {
    const store = useStore();
    console.log(store)
    return {
      isHeader: false,
    };
  },
  watch:{
    $route(to){
      this.isHeader = to.meta.hide || false
    }
  },
  components: { navHeader },
});
</script>

<style lang="scss">
@import url("./common/commoncs.css");

* {
  margin: 0;
  padding: 0;
}
</style>
