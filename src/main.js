import Vue from 'vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);
const opts = {};
const vuetify = new Vuetify(opts);


import App from './App.vue'
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

export { default as Chat } from './components/Chat.vue';
