import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout/index.vue";
import Home from "../views/Home/index.vue";
import Category from "../views/Category/index.vue";
import Login from "../views/Login/index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "/Category",
          component: Category,
        },
      ],
    },
    {
      path: "/Login",
      component: Login,
    },
  ],
});

export default router;
