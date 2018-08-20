<template>
<div class="blog-page">blog
<!--
    <div v-for="introduce in introduces" class="background" :style="introduce.background">
      <div class="content">
        <h1 v-text="introduce.title"></h1>
        <p v-text="introduce.content"></p>
      </div>
    </div>
-->
</div>
</template>

<script>
	export default {
		data() {
			return {};
		}
	};

</script>

<style lang="scss" scoped>
	.blog-page {
		@include page_init('/static/images/resume.jpeg');
	}

</style>
