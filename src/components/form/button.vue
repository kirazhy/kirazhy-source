<template>
<button :class="['MyButton',{native:native},color]" @click="onClick"><slot v-if="$slots.default"></slot></button>
</template>

<script>
	export default {
		props: {
			color: {
				type: String
			},
			to: {
				type: String
			},
			native: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			onClick(event) {
				this.to ? this.$router.push(`/${this.to}`) : this.$emit('click', event);
			}
		}
	};

</script>

<style lang="scss" scoped>
	.MyButton {}

</style>
