//渐隐
const fadeOut = (element, time = 500, step = 20) => {
	let opacity = 1;
	let timer = setInterval(() => {
		if (opacity <= 0) onDone();
		opacity = opacity - opacity / step;
		element.style.cssText = `;opacity:${opacity};`;
	}, time / step);

	function onDone() {
		clearInterval(timer);
		element.style.cssText = `;display:none;`;
	}
};
//查找节点的下一个兄弟节点，判断是否是元素节点,排除空的文本节点
const nextNode = node => node.nextSibling.nodeType === 1 ? node.nextSibling : nextNode(node.nextSibling);
//获取元素距离文档顶部的距离
const getDocumentTop = element => {
	let offset = element.offsetTop;
	if (element.offsetParent != null) offset += getDocumentTop(element.offsetParent);
	return offset;
};
//获取元素距离文档左侧的距离
const getDocumentLeft = element => {
	let offset = element.offsetLeft;
	if (element.offsetParent != null) offset += getDocumentLeft(element.offsetParent);
	return offset;
};

export default {
	fadeOut,
	nextNode,
	getDocumentTop,
	getDocumentLeft
};
