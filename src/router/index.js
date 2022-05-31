import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: () => import("@/components/IntroSlide.vue") },
  { path: "/2", component: () => import("@/components/StepOne.vue") },
  { path: "/3", component: () => import("@/components/StepTwo.vue") },
  { path: "/4", component: () => import("@/components/EndSlide.vue") },
];

const router = new VueRouter({ routes, mode: "history" });

export default router;
