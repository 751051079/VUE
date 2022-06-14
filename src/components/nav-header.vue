<template>
  <div class="flex-align-between nav">
    <div class="flex-align info">
      <span>冉敬坤</span>
      <span class="city">{{ localWeather.city }}</span>
      <span class="city">{{ localWeather.wendu }}℃</span>
      <div v-if="localWeather.forecast">
        <img src="../assets/localWeatheImage/1.png" v-if="localWeather.forecast[0].type == '小雨'"
          class="local_weathe_logo m-left-10" />
        <img src="../assets/localWeatheImage/2.png" v-if="localWeather.forecast[0].type == '中雨'"
          class="local_weathe_logo m-left-10" />
        <img src="../assets/localWeatheImage/3.png" v-if="localWeather.forecast[0].type == '大雨'"
          class="local_weathe_logo m-left-10" />
        <img src="../assets/localWeatheImage/4.png" v-if="localWeather.forecast[0].type == '暴雨'"
          class="local_weathe_logo m-left-10" />
      </div>

      <div class="flex localWeathe">
        <div class="flex-column-align localWeathe_item" v-for="(item, index) in localWeather.forecast" :key="index">
          <div>{{ item.date }}</div>
          <div>{{ item.low + " ~ " + item.high }}</div>
          <img src="../assets/localWeatheImage/1.png" v-if="item.type == '小雨'" class="local_weathe_logo" />
          <img src="../assets/localWeatheImage/2.png" v-if="item.type == '中雨'" class="local_weathe_logo" />
          <img src="../assets/localWeatheImage/3.png" v-if="item.type == '大雨'" class="local_weathe_logo" />
          <img src="../assets/localWeatheImage/3.png" v-if="item.type == '暴雨'" class="local_weathe_logo" />
          <div>{{ item.type }}</div>
          <div>{{ item.fengxiang + " " + item.fengli }}</div>
        </div>
      </div>
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
import { onMounted, ref, toRefs } from "vue";
import { getLocalWeather } from "@/utils/specialMethods";
export default {
  name: "nav-header",
  setup() {
    onMounted(() => {
      // init();
    });
    let data: any = ref({
      // city: "广州",
      // forecast: [
      //   {
      //     date: "14日星期二",
      //     fengli: "1级",
      //     fengxiang: "东北风",
      //     high: "27℃",
      //     low: "23℃",
      //     type: "暴雨",
      //   }
      // ],
      // ganmao: "感冒低发期，天气舒适，请注意多吃蔬菜水果，多喝水哦。",
      // wendu: "26",
      // yesterday: "",
      localWeather: {},
    });
    let { localWeather } = toRefs(data.value);
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
      let win: any = window;
      let geolocation = new win.BMap.Geolocation();
      geolocation.getCurrentPosition((r: any) => {
        let city = r.address.city;
        getLocalWeather(city).then((res: any) => {
          for (let x in res.data.forecast) {
            res.data.forecast[x].fengli = res.data.forecast[x].fengli
              .replace("<![CDATA[", "")
              .replace("]]>", "");
            res.data.forecast[x].high = res.data.forecast[x].high.split(" ")[1];
            res.data.forecast[x].low = res.data.forecast[x].low.split(" ")[1];
          }
          localWeather.value = res.data;
          console.log(localWeather);
        });
      });
    };
    init();
    return {
      meus,
      ...toRefs(data.value),
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

.info {
  position: relative;
  transition: all 1s;
}

.city {
  margin-left: 12px;
  font-size: 16px;
  cursor: pointer;
  color: #eee;
  transition: all 0.3s;
}

.city:hover {
  color: #fff;
}

.info:hover .localWeathe {
  height: auto;
  cursor: pointer;
  padding: 10px;
}

.localWeathe {
  position: absolute;
  top: 52px;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.4);
  overflow: hidden;
  height: 0;
}

.localWeathe_item {
  width: 100px;
  letter-spacing: 0.04rem;
  line-height: 31px;
}

.local_weathe_logo {
  width: 15px;
  height: 15px;
}
</style>
