<template>
<div id="app"><router-view></router-view></div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				version: '1.0.0'
			};
		}
	};

</script>

<style lang="scss">
	html {
		/*用来转化成rem，除100*/
		font-size: $global_html_font_percent;
	}
	
	#app {
		height: $global_page_height;
		font-size: PxToRem(16px);
		letter-spacing: 1px;
	}

</style>
