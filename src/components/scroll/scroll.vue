<template>
<div class="Scroll">
	<div ref="mainOutside" class="main-outside">
		<div ref="mainInside" class="main-inside"><slot></slot></div>
	</div>
	<div ref="scrollerOutside" class="scroller-outside">
		<div ref="scrollerInside" class="scroller-inside" :style="{height:`${scrollerBarHeight}px`}"></div>
	</div>
</div>
</template>

<script>
	export default {
		props: {
			//滚动速度
			speed: {
				type: Number,
				default: 30
			},
			//是否显示滚动条
			scrollBar: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				eventUtil: this.$utils.windows.eventUtil,
				scrollerBarHeight: 0, //滚动条高度
				mouseY: null, //点击滚动条时鼠标的Y轴位置
				needScroll: false //是否需要滚动
			};
		},
		mounted() {
			this.onInit();
			this.onReset();
		},
		updated() {
			this.onInit();
			this.onReset();
		},
		methods: {
			//初始化
			onInit() {
				const mainInsideHeight = this.$refs.mainInside.clientHeight,
					mainOutsideHeight = this.$refs.mainOutside.clientHeight;
				this.eventUtil.addHandler(window, 'resize', this.onInit);
				this.needScroll = (mainInsideHeight - mainOutsideHeight) > 0;
				this.needScroll && this.onScroll();
				this.needScroll && this.scrollBar ?
					this.onDrag() : //需要滚动且显示滚动条，则开启滚动条
					this.$refs.scrollerOutside.style.cssText += ';visibility:hidden;'; //否则隐藏滚动条
				this.scrollerBarHeight = (mainOutsideHeight / mainInsideHeight) * this.$refs.scrollerOutside.clientHeight;
			},
			//回到页面顶端
			onReset() {
				this.$refs.mainInside.style.cssText += `;top:0;`;
				this.$refs.scrollerInside.style.cssText += `;top:0;`;
			},
			//开启页面滚动
			onScroll() {
				this.eventUtil.addHandler(this.$refs.mainOutside, 'mousewheel', this.handleScroll); //非Firefox
				this.eventUtil.addHandler(this.$refs.mainOutside, 'DOMMouseScroll', this.handleScroll); //Firefox
			},
			//处理页面滚动事件
			handleScroll(event) {
				const EVENT = this.eventUtil.getEvent(event),
					mainOffset = this.$refs.mainInside.clientHeight - this.$refs.mainOutside.clientHeight,
					scrollerOffset = this.$refs.scrollerOutside.clientHeight - this.scrollerBarHeight;
				this.eventUtil.preventDefault(EVENT);
				let mainTop = this.eventUtil.getWheelDelta(EVENT) > 0 ?
					this.$refs.mainInside.offsetTop + this.speed :
					this.$refs.mainInside.offsetTop - this.speed;
				mainTop = mainTop > 0 ?
					0 : //最高不会出顶端
					mainTop < -mainOffset ?
					-mainOffset : //最低不会出底端
					mainTop;
				const scale = mainTop / mainOffset,
					scrollerTop = scale * scrollerOffset;
				this.$refs.mainInside.style.cssText += `;top:${mainTop}px;`;
				this.$refs.scrollerInside.style.cssText += `;top:${-scrollerTop}px;`;
			},
			//开启滚动条滚动
			onDrag() {
				this.$refs.scrollerOutside.style.cssText += ';visibility:visible;';
				this.eventUtil.addHandler(this.$refs.scrollerInside, 'mousedown', this.handleMousedown);
			},
			//处理滚动条点击
			handleMousedown(event) {
				const EVENT = this.eventUtil.getEvent(event);
				this.eventUtil.preventDefault(EVENT);
				this.mouseY = EVENT.clientY - this.$refs.scrollerInside.offsetTop;
				this.eventUtil.addHandler(document, 'mousemove', this.handleMousemove);
				this.eventUtil.addHandler(document, 'mouseup', this.handleMouseup);
			},
			//处理滚动条拖动
			handleMousemove(event) {
				const EVENT = this.eventUtil.getEvent(event),
					mainOffset = this.$refs.mainInside.clientHeight - this.$refs.mainOutside.clientHeight,
					scrollerOffset = this.$refs.scrollerOutside.clientHeight - this.scrollerBarHeight;
				let scrollerTop = EVENT.clientY - this.mouseY;
				scrollerTop = scrollerTop < 0 ?
					0 : //最高不会出顶端
					scrollerTop > scrollerOffset ?
					scrollerOffset : //最低不会出底端
					scrollerTop;
				const scale = scrollerTop / scrollerOffset,
					mainTop = scale * mainOffset;
				this.$refs.mainInside.style.cssText += `;top:${-mainTop}px;`;
				this.$refs.scrollerInside.style.cssText += `;top:${scrollerTop}px;`;
			},
			//处理滚动条松手
			handleMouseup(event) {
				this.eventUtil.removeHandler(document, 'mousemove', this.handleMousemove);
			}
		},
		//取消事件监控
		beforeDestroy() {
			this.eventUtil.removeHandler(this.$refs.mainOutside, 'mousewheel', this.handleScroll);
			this.eventUtil.removeHandler(this.$refs.mainOutside, 'DOMMouseScroll', this.handleScroll);
			this.eventUtil.removeHandler(this.$refs.scrollerInside, 'mousedown', this.handleMousedown);
			this.eventUtil.removeHandler(document, 'mousemove', this.handleMousemove);
			this.eventUtil.removeHandler(document, 'mouseup', this.handleMouseup);
			this.eventUtil.removeHandler(window, 'resize', this.onInit);
		}
	};

</script>

<style lang="scss" scoped>
	$scroll_bar_width:8px;
	.Scroll {
		position: relative;
		width: 100%;
		height: 100%;
		.main-outside {
			position: relative;
			float: left;
			width: 100%;
			height: inherit;
			overflow: hidden;
			.main-inside {
				position: absolute;
				width: 100%;
			}
		}
		.scroller-outside {
			position: absolute;
			right: 0;
			width: PxToRem($scroll_bar_width);
			height: inherit;
			/*默认隐藏*/
			visibility: hidden;
			background-color: transparent;
			overflow: hidden;
			.scroller-inside {
				position: absolute;
				width: inherit;
				background-color: $global_color_pink;
				border-radius: PxToRem(6px);
				opacity: .3;
				transition: .5s opacity;
				cursor: pointer;
				&:hover {
					opacity: 1;
				}
			}
		}
	}

</style>
