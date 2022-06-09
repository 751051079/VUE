import axios from "axios";
/**
 * 根据传入城市名称获取天气
 * @param city 城市
 */
const getLocalWeather = (city: String) => {
  axios
    .get(`http://wthrcdn.etouch.cn/weather_mini?city=${city}`)
    .then((res) => {
      if (res.status == 200) {
        return res.data.data;
      } else {
        return "";
      }
    })
    .catch((err) => {
      return "";
    });
};
export { getLocalWeather };
