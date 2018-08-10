<template>
<div class="FrostedGlass">
	<div class="content-wrapper"><slot></slot></div>
	<div class="glass" :style="{background:background}"></div>
</div>
</template>

<script>
	export default {
		props: {
			img: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				background: `url(${this.img}) 0 / 100% 100% fixed`
			};
		}
	};

</script>

<style lang="scss" scoped>
	.FrostedGlass {
		position: relative;
		background: hsla(0, 0%, 100%, .3);
		border-radius: PxToRem($global_frosted_glass_radius);
		box-shadow: 0 0 0 PxToRem(1px) hsla(0, 0%, 100%, .3) inset, 0 .5em 1em rgba(0, 0, 0, 0.6);
		z-index: 1;
		overflow: hidden;
		.glass {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			margin: PxToRem(-30px);
			@include browser_filter(blur(PxToRem($global_frosted_glass_blur)));
			z-index: -1;
		}
	}

</style>
