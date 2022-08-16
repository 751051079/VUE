"use strict";
exports.__esModule = true;
var vue_router_1 = require("vue-router");
var router_1 = require("./router");
var router = vue_router_1.createRouter({
    history: vue_router_1.createWebHashHistory(),
    routes: router_1["default"]
});
function RouterStack(router) {
    // const stack = [];
    router.afterEach(function (to, from) {
    });
    return router;
}
RouterStack(router);
exports["default"] = router;

//# sourceMappingURL=index.js.map
