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
];

// const router = VueRouter.createRouter({
const router = new VueRouter({
    routes,
  });

export default router;