import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import InvoicePage from "../views/InvoicePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/invoice/:invoiceId",
    name: "InvoicePage",
    component: InvoicePage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
