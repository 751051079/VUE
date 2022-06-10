import axios from "axios";
/**
 * 根据传入城市名称获取天气
 * @param city 城市
 */
const getLocalWeather = (city: String) => {
  return new Promise(function(resolve,reject){
    axios
    .get(`http://wthrcdn.etouch.cn/weather_mini?city=${city}`)
    .then((res) => {
      if (res.status == 200) {
        console.log(res.data.data)
        resolve(res.data)
      } else {
        reject(res.data)
      }
    })
    .catch((err) => {
      reject(err)
    });
  })
  
};
export { getLocalWeather };
