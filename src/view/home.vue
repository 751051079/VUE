<template>
  <div class="bg flex-column-align">
    <div style="width:100%;height:45px;"></div>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from "vue"
import {getUserInfo} from '@/api/user'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",
  components: {  },
  setup(){
    getUserInfo({name:'zhangsan'}).then((res:any)=>{
      console.log(res)
    })
    .catch((err:any)=>{
      console.log(err)
    })
    setInterval
    clearInterval
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.bg{
  background-image: url('../assets/bg/bg1.jpg');
  background-size: 100% 100vh;
  min-height: 100vh;
  width: 100%;
}
</style>
