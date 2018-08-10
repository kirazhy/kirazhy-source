//日期格式化：Sep 2017
const dateFormat = (date, type) => {
	const temp = new Date(date);
	switch (type) {
		case 'MMM YYYY': //Sep 2017
		default:
			let format = temp.toString().split(' ');
			return `${format[1]} ${format[3]}`;
			break;
		case 'MMMM DD, YYYY': //April 12,2018
			var month = fullEnglishMonth(dateParam(temp, 'month'));
			var day = dateParam(temp, 'day');
			var year = dateParam(temp, 'year');
			return `${month} ${day}, ${year}`;
			break;
		case 'MM/DD': //02/03
			var month = temp.getMonth() + 1 > 9 ? temp.getMonth() + 1 : `0${temp.getMonth()+1}`;
			var day = temp.getDate() > 9 ? temp.getDate() : `0${temp.getDate()}`;
			return `${month}/${day}`;
			break;
	}
};
//时间格式化,12小时制和24小时制
const timeFormat = (time, type) => {
	const temp = new Date(time);
	switch (type) {
		case 12:
			var hours;
			if (temp.getHours() < 10) {
				hours = [`0${temp.getHours()}`, 'AM'];
			} else if (temp.getHours() >= 10 && temp.getHours() <= 12) {
				hours = [`${temp.getHours()}`, 'AM'];
			} else if (temp.getHours() > 12 && temp.getHours() < 22) {
				hours = [`0${temp.getHours()-12}`, 'PM'];
			} else {
				hours = [`${temp.getHours()-12}`, 'PM'];
			}
			let minutes = temp.getMinutes() > 9 ? temp.getMinutes() : `0${temp.getMinutes()}`;
			return `${hours[0]}:${minutes} ${hours[1]}`;
			break;
		case 24:
		default:
			var hours = temp.getHours() > 9 ? temp.getHours() : `0${temp.getHours()}`;
			var minutes = temp.getMinutes() > 9 ? temp.getMinutes() : `0${temp.getMinutes()}`;
			return `${hours}:${minutes}`;
			break;
	}
};
//获取一个date对象的各个参数
const dateParam = (date, param) => {
	const temp = new Date(date);
	switch (param) {
		case 'day':
			return temp.getDate();
		case 'month':
			return temp.getMonth() + 1;
		case 'year':
			return temp.getFullYear();
		default:
			return '';
	}
};
//英文月份的全称
const fullEnglishMonth = month => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aguest', 'September', 'October', 'November', 'December'][month - 1];
//多少时间之前
const timeAgo = time => {
	const between = Date.now() / 1000 - Number(time);
	if (between < 30) {
		return '刚刚';
	} else if (between < 3600) {
		return ~~(between / 60), ' 分钟';
	} else if (between < 3600 * 24) {
		return ~~(between / 3600), ' 小时';
	} else {
		return ~~(between / 3600 / 24), ' 天';
	}
};

const parseTime = (time, cFormat) => {
	if (arguments.length === 0) {
		return null;
	}
	if ((time + '').length === 10) {
		time = +time * 1000
	}
	const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
	let date = typeof time == 'object' ? time : new Date(parseInt(time));
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds(),
		a: date.getDay()
	};
	const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
		let value = formatObj[key];
		if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
		if (result.length > 0 && value < 10) {
			value = '0' + value;
		}
		return value || 0;
	});
	return time_str;
};

export default {
	dateFormat,
	timeFormat,
	dateParam,
	fullEnglishMonth,
	timeAgo,
	parseTime
};
