import { createApp, h } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import routes from './routes';
import 'virtual:windi.css';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			redirect: '/at'
		},
		...routes,
		{
			path: '/:pathMatch(.*)*',
			name: '404',
			component: () => import('./components/404.vue')
		}
	]
});

//
const app = createApp(App);
app.use(router);
app.mount('#app');
