"use strict";
exports.__esModule = true;
/**
 * 路由配置信息
 * @param(routes)
 */
var routes = [
    {
        path: '/',
        redirect: '/home',
        component: function () { return require("@/view/home.vue"); },
        children: [
            {
                path: "home",
                name: "HOME",
                component: function () { return require("@/view/home.vue"); },
                meta: {
                    title: '首页'
                }
            }
        ]
    },
    {
        path: '/file',
        name: 'FILE',
        component: function () { return require("@/view/file/ts.vue"); },
        children: [
            {
                path: 'ts',
                name: 'TYPESCRIPT',
                component: function () { return require("@/view/file/ts.vue"); },
                meta: {
                    title: 'TS学习文档',
                    hide: true
                }
            }
        ]
    }
];
exports["default"] = routes;

//# sourceMappingURL=router.js.map
