import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode : 'history', //hash : Default..,
  scrollBehavior(to, from, savedPosition){
    if (to.hash) { //eğer linkte bir hash varsa scroll yap
      return {
        selector : to.hash
      }
    }
    // return { x : 0, y : 800 }
  }
});

router.beforeEach((to, from, next) => { // tüm sayfaları kontrol eder. sayfa açılmadan önce buradan kontrol edilir.
  console.log("Global Olarak Kontrol!!!");
  next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
