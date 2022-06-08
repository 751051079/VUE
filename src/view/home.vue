<template>
  <div class="hello">
    12
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class home extends Vue {
  msg!: string
}
</script>

<style scoped lang="scss">

</style>
