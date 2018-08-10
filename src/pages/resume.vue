<template>
<div class="Resume">resume
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
			return {
				introduces: [{
					title: '这是我的第一个个人网站作品',
					content: '经过了我的不懈努力，我的第一个网站作品雏形已经完成了，在我的网站里，我会介绍我的一些个人信息，这些信息可以用来在我面试的时候进行一些加分'
				}, {
					title: '我的技术展示',
					content: '在这里我会利用我所掌握的技术，比如说Vue.js框架、element-ui组件库、echarts.js数据可视化工具和CSS使用技巧等技术'
				}, {
					title: '我的公交记录',
					content: '在此我会使用百度的开源数据可视化工具echarts.js来展示我的公交记录'
				}]
			}
		}
	};

</script>

<style lang="scss" scoped>
	.Resume {
		@include page_init('/static/images/resume.jpeg');
	}

</style>
