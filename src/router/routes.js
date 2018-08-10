const LAYOUT = () =>
	import ('components/layout/layout');
const HOME = () =>
	import ('pages/home');
const RESUME = () =>
	import ('pages/resume');
const COMPONENTS = () =>
	import ('pages/components');

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
	}]
}];

export default ConstantRouter;
