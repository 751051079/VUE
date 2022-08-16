import { createRouter, createWebHashHistory, Router } from "vue-router";
import routes from "./router";
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

function RouterStack(router: Router) {
  // const stack = [];
  router.afterEach((to, from) => {
  });
  return router;
}

RouterStack(router);

export default router;
