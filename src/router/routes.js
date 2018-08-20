const LAYOUT = () =>
	import ('components/layout/layout');
const HOME = () =>
	import ('pages/home');
const RESUME = () =>
	import ('pages/resume');
const COMPONENTS = () =>
	import ('pages/components');
const PHOTOGRAPHY = () =>
	import ('pages/photography');
const BLOG = () =>
	import ('pages/blog');

const ConstantRouter = [{
	path: '/',
	redirect: '/home/',
	component: LAYOUT,
	children: [{
		path: 'home',
		name: 'Home',
		component: HOME,
		meta: {
			icon: 'home'
		}
	}, {
		path: 'resume',
		name: 'Resume',
		component: RESUME,
		meta: {
			icon: 'address-card'
		}
	}, {
		path: 'components',
		name: 'Components',
		component: COMPONENTS,
		meta: {
			icon: 'address-card'
		}
	}, {
		path: 'blog',
		name: 'Blog',
		component: BLOG,
		meta: {
			icon: 'address-card'
		}
	}, {
		path: 'photography',
		name: 'Photography',
		component: PHOTOGRAPHY,
		meta: {
			icon: 'address-card'
		}
	}]
}];

export default ConstantRouter;
