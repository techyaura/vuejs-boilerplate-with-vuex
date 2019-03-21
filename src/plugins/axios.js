import Vue from 'vue';
import axios from 'axios';
import requestHandler from '../helpers/requestHandler';
import store from '../store/index';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use(requestHandler);

axios.interceptors.response.use(response => response, (error) => {
  const status = error.response ? error.response.status : null;
  if (status === 401) {
    store.dispatch('auth/destroySession').then(() => {
      Vue.$router.push('/login');
    });
  }
  return Promise.reject(error);
});


Vue.prototype.$http = axios;
