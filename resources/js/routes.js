import  ExampleComponent from './components/ExampleComponent.vue';
import VueRouter from 'vue-router';

const routes = [
    {
        path: '/',
        // component: './components/ExampleComponent.vue',
        component:require('./components/ExampleComponent.vue'),
        // component: 'ExampleComponent',
        name:   'example'
    },
    {
        path: '/second',
        component:require('./components/ExampleSecond.vue'),
        name:   'second'
    },
];

// const router = VueRouter.createRouter({
const router = new VueRouter({
    routes,
    mode: "history",
  });

export default router;