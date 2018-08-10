<template>
<div class="Main">
	<Scroll><router-view></router-view></Scroll>
</div>
</template>

<script>
	import Scroll from 'components/scroll';
	export default {
		components: {
			Scroll
		}
	};

</script>

<style lang="scss" scoped>
	.Main {
		overflow: hidden;
	}

</style>
