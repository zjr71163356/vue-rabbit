import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout/Layout.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: "/",
      component: Layout,
    },
  ],
});

export default router;
