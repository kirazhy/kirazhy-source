// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条 样式
import * as utils from '@/utils'; //方法库
import * as filters from './filters/index'; // 全局vue filter
import * as CONST from './const';

Vue.use(ElementUI);

Vue.prototype.$store = store; //注册store
Vue.prototype.$const = CONST; //放常数的地方
Vue.prototype.$utils = utils; //工具函数库
Vue.prototype.$isProd = process.env.NODE_ENV === 'production'; //是否为生产模式

// 注册全局filters
Object.keys(filters.default).forEach(key => {
	Vue.filter(key, filters.default[key]);
});

router.beforeEach((to, from, next) => {
	NProgress.start();
	next();
});

router.afterEach((to, from) => {
	document.title = `The Melting Pub - ${to.name}`;
	window.scrollTo(0, 0);
	store.dispatch(CONST.store.action.TOGGLE_NAV, false).then(res => {}).catch(err => {});
	NProgress.done();
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
});
