<template>
  <div class="flex-align-between nav">
    <div class="flex-align">
      <span>冉敬坤</span>
    </div>
    <div class="flex-align">
      <div class="meus_item" v-for="(item, index) in meus" :key="item.title + index">
        <!-- <img :src="item.imgSrc" alt="加载失败"> -->
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 开发功能：头部导航栏
 * 开发人员：冉敬坤
 * 首次开发时间：2022-6-9
 * 最后更新时间：2022-6-9
 */
export default {
  name: "nav-header",
  setup() {
    const meus = [
      { title: "首页", imgSrc: "", path: "" },
      { title: "文章", imgSrc: "", path: "" },
      { title: "作品", imgSrc: "", path: "" },
      { title: "生活", imgSrc: "", path: "" },
      { title: "留言板", imgSrc: "", path: "" },
      { title: "关于我", imgSrc: "", path: "" },
    ];
    return {
      meus,
    };
  },
};
</script>
<style scoped>
.nav{
  padding: 5px 20px;
}
.meus_item {
  padding: 0 5px;
  margin: 0 5px;
  cursor: pointer;
}
</style>
