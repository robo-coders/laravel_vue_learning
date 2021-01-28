require('./bootstrap');
// window.Vue = require('vue')
require('moment');

import Vue from 'vue';

import router from './routes';
import VueRouter from 'vue-router';
import { InertiaApp } from '@inertiajs/inertia-vue';
import { InertiaForm } from 'laravel-jetstream';
import PortalVue from 'portal-vue';

import jQuery from 'jquery'
window.jQuery = window.$ = jQuery

import feather from 'feather-icons'
window.feather = feather

// Vue.mixin({ methods: { route: router} });
Vue.use(InertiaApp);
Vue.use(InertiaForm);
Vue.use(PortalVue);
Vue.use(VueRouter);

Vue.component(
    "example-component",
    require('./components/ExampleComponent.vue').default
    );
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// const app = document.getElementById('app');

const app = new Vue({
    el: "#app",
    components: { app: app },   
    render : h => h('app'),
    router: router
});

// new Vue({
//     render: (h) =>
//         h(InertiaApp, {
//             props: {
//                 initialPage: JSON.parse(app.dataset.page),
//                 resolveComponent: (name) => require(`./Pages/${name}`).default,
//             },
//         }),
// }).$mount(app);