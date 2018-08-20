<template>
<div class="Layout">
	<Nav :class="{expand:isNavExpand}"/>
	<Main :class="{mask:isNavExpand}" @click.native="onClick"/>
</div>
</template>

<script>
	import {
		Nav,
		Main
	} from 'components/layout';
	export default {
		components: {
			Nav,
			Main
		},
		computed: {
			isNavExpand() {
				return this.$store.state.app.isNavExpand;
			}
		},
		methods: {
			onClick() {
				//				this.isNavExpand ? this.$store.dispatch(this.$const.store.action.TOGGLE_NAV, false).then(res => {}).catch(err => {}) : null;
				this.isNavExpand && this.$store.dispatch(this.$const.store.action.TOGGLE_NAV, false).then(res => {}).catch(err => {});
			}
		}
	};

</script>

<style lang="scss" scoped>
	.Layout {
		height: $global_page_height;
		.Nav {
			width: PxToRem($global_normal_nav_width);
			height: inherit;
			transition: $global_nav_transition_speed width;
			z-index: 9999;
			&.expand {
				width: PxToRem($global_expand_nav_width + $global_normal_nav_width);
			}
		}
		.Main {
			float: right;
			width: calc(100% - #{PxToRem($global_normal_nav_width)});
			height: inherit;
			transition: $global_nav_transition_speed width;
			z-index: 1;
			&.mask {
				&:before {
					content: '';
					position: fixed;
					right: 0;
					top: 0;
					bottom: 0;
					left: 0;
					background-color: rgba(0, 0, 0, .5);
					overflow: auto;
					z-index: 9998;
				}
			}
		}
	}

</style>
