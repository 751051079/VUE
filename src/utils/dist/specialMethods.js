"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
/**
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

//# sourceMappingURL=specialMethods.js.map
