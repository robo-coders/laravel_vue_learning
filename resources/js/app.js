require('./bootstrap');
// window.Vue = require('vue')
require('moment');

import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

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


// Vue.component(
//     "example",
//     require('./components/ExampleComponent.vue').default
// );
// Vue.component(
//     "second",
//     require('./components/ExampleSecond.vue').default
// );
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// const app = document.getElementById('app');


import One from "./components/ExampleComponent.vue'"
import Two from "./components/ExampleSecond.vue"

export  const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/one",
            component: One
        },
        {
            path: "/two",
            component: Two
        },
    ],
});

new Vue({
    el: "#app",
    render : h => h('app'),
    router
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
