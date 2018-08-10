import Vue from 'vue';
//console.log
const log = (...content) => {
	Vue.$isProd ? null : console.log(...content);
};
//URL转换成file
const URL2File = url => {
	return new Promise((resolve, reject) => {
		if (!url) resolve();
		let xhr = new XMLHttpRequest();
		xhr.open('get', url, true);
		xhr.responseType = 'blob';
		xhr.send();
		xhr.onload = function () {
			if (this.status === 200) {
				resolve(this.response);
			} else {
				resolve();
			}
		};
	}).catch(err => {
		console.log(err);
	});
};
//深度克隆
const deepClone = obj => {
	let newObj = obj.constructor === Array ? [] : {};
	if (typeof obj !== 'object') {
		return;
	} else if (window.JSON) {
		newObj = JSON.parse(JSON.stringify(obj));
	} else { //如果不支持以上方法
		for (let i in obj) {
			newObj[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
		}
	}
	return newObj;
};
//获取随机的字母加数字字符串
const getRandomString = () => Math.random().toString(36).substr(2);
//为了平衡不同浏览器间实现事件的差异或事件方法的差异而存在的，有效解决了事件在不同浏览器上功能兼容性。
const eventUtil = {
	//添加事件
	addHandler: function (element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false); //使用DOM2级方法添加事件
		} else if (element.attachEvent) { //使用IE方法添加事件
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler; //使用DOM0级方法添加事件
		}
	},
	//取消事件
	removeHandler: function (element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) {
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	},
	//使用这个方法跨浏览器取得event对象
	getEvent: function (event) {
		return event ? event : window.event;
	},
	//返回事件的实际目标
	getTarget: function (event) {
		return event.target || event.srcElement;
	},
	//阻止事件的默认行为
	preventDefault: function (event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	//立即停止事件在DOM中的传播
	stopPropagation: function (event) {
		//避免触发注册在document.body上面的事件处理程序
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},
	//获取mouseover和mouseout相关元素
	getRelatedTarget: function (event) {
		if (event.relatedTarget) {
			return event.relatedTarget;
		} else if (event.toElement) { //兼容IE8-
			return event.toElement;
		} else if (event.formElement) {
			return event.formElement;
		} else {
			return null;
		}
	},
	//获取mousedown或mouseup按下或释放的按钮是鼠标中的哪一个
	getButton: function (event) {
		if (document.implementation.hasFeature("MouseEvents", "2.0")) {
			return event.button;
		} else {
			switch (event.button) { //将IE模型下的button属性映射为DOM模型下的button属性
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0; //按下的是鼠标主按钮（一般是左键）
				case 2:
				case 6:
					return 2; //按下的是中间的鼠标按钮
				case 4:
					return 1; //鼠标次按钮（一般是右键）
			}
		}
	},
	//获取表示鼠标滚轮滚动方向的数值
	getWheelDelta: function (event) {
		if (event.wheelDelta) {
			return event.wheelDelta;
		} else {
			return -event.detail * 40;
		}
	},
	//以跨浏览器取得相同的字符编码，需在keypress事件中使用
	getCharCode: function (event) {
		if (typeof event.charCode == "number") {
			return event.charCode;
		} else {
			return event.keyCode;
		}
	}
};

export default {
	log,
	URL2File,
	deepClone,
	getRandomString,
	eventUtil
};
