//密码的检查，非常巧妙的方法，我都佩服我！！
const password = (password1, password2 = password1) => password1.length >= 8 && password1 === password2;
//email的检查
const email = email => /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(email);
//validator的验证
const isValid = validator => {
	let temp = true;
	Object.keys(validator).forEach(key => {
		temp = temp && validator[key].rule;
		if (!temp) return false;
	});
	return temp;
};

export default {
	password,
	email,
	isValid
};
