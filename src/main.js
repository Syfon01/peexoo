import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'bootstrap'; 

import ElementUI from 'element-ui';

import VueSweetalert2 from 'vue-sweetalert2';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'element-ui/lib/theme-chalk/index.css';

import 'sweetalert2/dist/sweetalert2.min.css';

import routes from './routes';
Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter ({
  routes
});

Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    router
}).$mount('#app')
