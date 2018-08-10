//字符串限字符
const subString = (string, length) => string.length > length ? string.substring(0, length) + '...' : string;
//全字母大写
const upperCase = string => string ? string.toUpperCase() : string;
//首字母大写，分为第一个字母大写或所有单词首字母大写
const capitalize = (string, all = false) => all ?
	string.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ') :
	string.charAt(0).toUpperCase() + string.slice(1);
//HTML转换成text
const html2Text = string => {
	const div = document.createElement('div');
	div.innerHTML = string;
	return div.textContent || div.innerText;
};
//复数化
const pluralize = (value, unit) => value === 1 ? value + unit : value + unit + 's';

export default {
	subString,
	upperCase,
	capitalize,
	html2Text,
	pluralize
};
