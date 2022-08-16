"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
/**
 * 创建时间：2022-6-10
 * 根据传入城市名称获取天气
 * @param city 城市
 */
var getLocalWeather = function (city) {
    return new Promise(function (resolve, reject) {
        axios_1["default"]
            .get("http://wthrcdn.etouch.cn/weather_mini?city=" + city)
            .then(function (res) {
            if (res.status == 200) {
                resolve(res.data);
            }
            else {
                reject(res.data);
            }
        })["catch"](function (err) {
            reject(err);
        });
    });
};
exports.getLocalWeather = getLocalWeather;
/**
 * 创建时间：2022-8-16
 * 根据传入天气获取对应图标
 * @param weaher
 */
var getWeaherIcon = function (weaher) {
    var arr = ["小雨", "中雨", "大雨", "暴雨", "阴", "多云", "晴"];
    var i = arr.indexOf(weaher) + 1;
    return i >= 0 ? "https://jk-east-test-shopping.oss-cn-hangzhou.aliyuncs.com/weaher/" + i + ".png" : "";
};
exports.getWeaherIcon = getWeaherIcon;

//# sourceMappingURL=specialMethods.js.map
