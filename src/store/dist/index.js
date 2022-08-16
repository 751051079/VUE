"use strict";
exports.__esModule = true;
var vuex_1 = require("vuex");
var store = vuex_1.createStore({
    state: function () {
        return {
            isHeader: true
        };
    },
    mutations: {
        setHeaderStatus: function (state, status) {
            state.isHeader = status;
        }
    }
});
exports["default"] = store;

//# sourceMappingURL=index.js.map
