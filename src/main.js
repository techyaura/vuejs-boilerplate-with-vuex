import Vue from 'vue';
import VueI18n from 'vue-i18n';
import router from './router';
import store from './store/index';
import App from './App.vue';
import defaultLayout from './layouts/default.vue';
import loginLayout from './layouts/login.vue';
import { languages, defaultLocale } from './i18n/index';
import './registerServiceWorker';
import './plugins/vuetify';
import './plugins/axios';

/** Integrate i18n */
const messages = Object.assign(languages);
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages
});

/** Configure Layouts */
Vue.component('default-layout', defaultLayout);
Vue.component('login-layout', loginLayout);

/** Vue js configuration */
Vue.config.productionTip = false;

/** Creating and configuring Vuejs Instance */
new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app');
