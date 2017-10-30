import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue'
import {routes} from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

// outside is http, inside modules is $http
Vue.http.options.root = 'https://vuejs-http-f9815.firebaseio.com/';

Vue.filter('currency', value => {
    return '$' + value.toLocaleString();
});

const router = new VueRouter({mode: 'history', routes});

const finalProj = new Vue({...App, router, store});

finalProj.$mount('#app');
