//金额的格式化
const money = (number, currency = 'USD') => {
	let temp = parseFloat(number).toFixed(2).split('.');
	if (temp.length > 2) return null;

	function currencySwitch() {
		switch (currency) {
			case 'USD':
			default:
				return '$';
			case 'RMB':
				return '￥';
			case 'GBP':
				return '￡';
			case 'EUR':
				return '€';
			case '':
				return '';
		}
	}
	return currencySwitch() + [parseInt(temp[0]).toLocaleString(), temp[1]].join('.');
};
//数字加逗号
const commaFormat = number => parseInt(number).toLocaleString();
//数字转化成百分数
const number2Percent = (number, fix = 0) => `${(number * 100).toFixed(fix)}%`;
//数字格式化
const nFormatter = (num, digits) => {
	const si = [{
		value: 1E18,
		symbol: 'E'
		}, {
		value: 1E15,
		symbol: 'P'
		}, {
		value: 1E12,
		symbol: 'T'
		}, {
		value: 1E9,
		symbol: 'G'
		}, {
		value: 1E6,
		symbol: 'M'
		}, {
		value: 1E3,
		symbol: 'k'
		}];
	for (let i = 0; i < si.length; i++) {
		if (num >= si[i].value) {
			return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol;
		}
	}
	return num.toString();
};
const toThousandslsFilter = num => (+num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');

export default {
	money,
	commaFormat,
	number2Percent,
	nFormatter,
	toThousandslsFilter
};
