import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
// import VueRouter from "vue-router";
import { store } from "./store/app.js";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { ValidationObserver } from "vee-validate";

// Vue.use(VueRouter);

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

// const routes = [
//   // { path: "/", component: App },
//   { path: "/", component: IntroSlide },
//   { path: "/2", component: StepOne },
//   { path: "/3", component: StepTwo },
//   { path: "/4", component: EndSlide },
// ];

// const router = new VueRouter({ routes, mode: "history" });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
