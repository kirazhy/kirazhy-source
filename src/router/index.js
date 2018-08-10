import Vue from 'vue';
import Router from 'vue-router';
import Routes from './routes';

Vue.use(Router);

export default new Router({
	mode: 'history', //后端支持可开
	scrollBehavior(to, from, savedPosition) {
		return to.hash ? {
			selector: to.hash
		} : {
			x: 0,
			y: 0
		};
	},
	routes: Routes
});
