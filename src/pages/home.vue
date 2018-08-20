<template>
<div class="home-page">
	<FrostedGlass v-for="(introduce,index) in introduces" img="/static/images/home.jpeg" :key="index">
 		<h1>{{introduce.title | capitalize}}</h1>
  	<p>{{introduce.content}}</p>
  </FrostedGlass>
</div>
</template>

<script>
	import FrostedGlass from 'components/frostedGlass';
	export default {
		components: {
			FrostedGlass
		},
		data() {
			return {
				introduces: [{
					title: 'Home',
					content: '经过了我的不懈努力，我的第一个网站作品雏形已经完成了，希望这个网站可以用来在我面试的时候进行一些加分'
				}, {
					title: 'Resume',
					content: '在这里我会介绍我的一些个人信息，这些信息可以用来在我面试的时候方便展示'
				}, {
					title: 'Skills',
					content: '在这里我会利用我所掌握的技术，比如说Vue.js框架、element-ui组件库、echarts.js数据可视化工具和CSS使用技巧等技术'
				}, {
					title: 'Components',
					content: '在这里我会展示我个人开发的一些组件'
				}, {
					title: 'Photography',
					content: '我还会在里面放上一些我的摄影作品哦'
				}]
			};
		}
	};

</script>

<style lang="scss" scoped>
	.home-page {
		@include page_init('/static/images/home.jpeg');
		.FrostedGlass {
			font-family: 'SnellRoundhand';
			width: 70%;
			margin: 0 auto;
			@include margin_bottom(PxToRem(50px));
			padding: PxToRem(20px);
		}
	}

</style>
