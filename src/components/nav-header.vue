<template>
  <div class="flex-align-between nav">
    <div class="flex-align">
      <span>冉敬坤</span>
      <span>{{ localWeathe.city }}</span>
    </div>
    <div class="flex-align">
      <div class="meus_item" v-for="(item, index) in meus" :key="item.title + index">
        <router-link class="meus_item_link" to="/">
          <!-- <img :src="item.imgSrc" alt="加载失败"> -->
          <span>{{ item.title }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 开发功能：头部导航栏
 * 开发人员：冉敬坤
 * 首次开发时间：2022-6-9
 * 最后更新时间：2022-6-10
 */
import { onMounted, reactive } from "vue";
import { getLocalWeather } from "@/utils/specialMethods";
export default {
  name: "nav-header",
  setup() {
    onMounted(() => {
      init();
    });
    let localWeathe: any = reactive({
      city: "广州",
      forecast: [],
      ganmao: "感冒低发期，天气舒适，请注意多吃蔬菜水果，多喝水哦。",
      wendu: "26",
      yesterday: '',
    })
    const meus = [
      { title: "首页", imgSrc: "", path: "" },
      { title: "文章", imgSrc: "", path: "" },
      { title: "作品", imgSrc: "", path: "" },
      { title: "生活", imgSrc: "", path: "" },
      { title: "留言板", imgSrc: "", path: "" },
      { title: "关于我", imgSrc: "", path: "" },
    ];


    // 初始化地图
    const init = () => {
      let win: any = window
      let geolocation = new win.BMap.Geolocation()
      geolocation.getCurrentPosition((r: any) => {
        let city = r.address.city
        getLocalWeather(city).then((res: any) => {
          localWeathe = { ...res.data }
          console.log(localWeathe)
        })
      })
    }
    return {
      meus,
      localWeathe
    };
  },
};
</script>
<style scoped>
.nav {
  padding: 10px 30px;
  font-size: 18px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
}

.meus_item {
  padding: 0 5px;
  margin: 0 5px;
  border-bottom: 4px;
  color: darkgray;
}

.meus_item_link {
  color: var(--light-grey);
  position: relative;
  padding-bottom: 0.2rem;
}

.meus_item_link:hover {
  color: #eee;
  transition: all 0.3s ease-in-out;
}

.meus_item_link::after {
  position: absolute;
  bottom: 0;
  left: 0;
  /* z-index: -1; */
  width: 0;
  height: 3px;
  background-color: #80c8f8;
  content: "";
  transition: all 0.3s ease-in-out;
}

.meus_item_link:hover::after {
  width: 100%;
}
</style>
