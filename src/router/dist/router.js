"use strict";
exports.__esModule = true;
var Home = function () { return require("@/view/home.vue"); }; //首页
/**
 * 路由配置信息
 * @param(routes)
 */
var routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }
];
exports["default"] = routes;

//# sourceMappingURL=router.js.map
