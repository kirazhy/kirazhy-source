<template>
<div :class="['Nav',{expand:isNavExpand}]">
	<div class="nav-normal">
		<button class="toggle-button" @click="onToggle"><i :class="['fa fa-bars icon',{'fa-rotate-90':isNavExpand}]"></i></button>
		<span class="author">{{author}}</span>
	</div>
	<div class="nav-expand">
		<el-row class="title">{{title | capitalize(true)}}</el-row>
		<el-row class="routes">
			<router-link class="router-link" v-for="(route,index) in routes" :to="route.link" :key="index">{{route.title | capitalize}}</router-link>
		</el-row>
		<el-row class="links">
			<el-row class="links-row" v-for="(type,index) in links" :key="index">
				<a class="link" v-for="link in type" :href="link.href" target="_blank"><i :class="`fa fa-${link.icon}`"></i></a>
			</el-row>
		</el-row>
	</div>
</div>
</template>

<script>
	import Routes from '@/router/routes';
	export default {
		data() {
			return {
				author: 'Huayi Zhang',
				title: 'the melting pub',
				routes: Routes[0].children.map(route => ({
					title: route.name,
					link: `/${route.path}`,
					icon: route.meta.icon
				})),
				links: {
					local: [{
						href: 'http://www.renren.com/253977608',
						icon: 'renren'
					}, {
						href: 'https://www.linkedin.com/in/huayi-zhang-930358142/',
						icon: 'linkedin'
					}, {
						href: 'https://weibo.com/1343848580/profile?topnav=1&wvr=6',
						icon: 'weibo'
					}],
					foreign: [{
						href: '',
						icon: 'facebook'
					}, {
						href: '',
						icon: 'twitter'
					}, {
						href: 'https://github.com/kirazhy',
						icon: 'github'
					}]
				}
			};
		},
		computed: {
			isNavExpand() {
				return this.$store.state.app.isNavExpand;
			}
		},
		mounted() {},
		methods: {
			onToggle(event, isNavExpand = !this.isNavExpand) {
				this.$store.dispatch(this.$const.store.action.TOGGLE_NAV, isNavExpand).then(res => {}).catch(err => {});
			}
		},
		beforeDestroy() {}
	};

</script>

<style lang="scss" scoped>
	.Nav {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		font-family: 'GoodVibrationsROB';
		color: $global_color_brown;
		background-color: $global_color_pink;
		overflow: hidden;
		.nav-normal {
			position: relative;
			float: left;
			width: $global_normal_nav_width;
			height: inherit;
			.toggle-button {
				@include absolute_center;
				background: none;
				border: none;
				.icon {
					font-size: PxToRem(36px);
					transition: $global_nav_transition_speed all;
				}
			}
			.author {
				position: absolute;
				bottom: PxToRem(60px);
				transform: rotate(90deg);
			}
		}
		.nav-expand {
			position: relative;
			float: left;
			width: $global_expand_nav_width;
			height: inherit;
			.title {
				font-size: PxToRem(20px);
				text-align: center;
				margin-top: PxToRem(30px);
			}
			.routes {
				@include absolute_center;
				width: 100%;
				.router-link {
					display: block;
					font-size: PxToRem(40px);
					text-align: center;
					@include margin_bottom(PxToRem(20px));
					&:hover,
					&.router-link-active {
						color: $global_color_orange;
					}
				}
			}
			.links {
				@include absolute_center(horizontal);
				bottom: PxToRem(60px);
				font-size: PxToRem(24px);
				.links-row {
					@include margin_bottom(PxToRem(12px));
					.link {
						display: inline-block;
						width: PxToRem(30px);
						@include margin_right(PxToRem(20px));
					}
				}
			}
		}
	}

</style>
