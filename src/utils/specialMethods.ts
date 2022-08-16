import axios from "axios";
/**
 * 创建时间：2022-6-10
 * 根据传入城市名称获取天气
 * @param city 城市
 */
const getLocalWeather = (city: String) => {
  return new Promise(function (resolve, reject) {
    axios
      .get(`http://wthrcdn.etouch.cn/weather_mini?city=${city}`)
      .then((res) => {
        if (res.status == 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
/**
 * 创建时间：2022-8-16
 * 根据传入天气获取对应图标
 * @param weaher
 */

const getWeaherIcon = (weaher: any) => {
  const arr = ["小雨", "中雨", "大雨", "暴雨", "阴", "多云", "晴"];
  const i = arr.indexOf(weaher)+1;
  return i >= 0 ? "https://jk-east-test-shopping.oss-cn-hangzhou.aliyuncs.com/weaher/" + i + ".png" : "";
};
export { getLocalWeather, getWeaherIcon };
