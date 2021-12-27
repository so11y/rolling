const chunk = <T>(v: Array<T>, index: number): T[][] => {
	const arr = [];
	const copyArr = v.slice();
	while (copyArr.length) {
		arr.push(copyArr.splice(0, index));
	}
	return arr;
};

export default chunk;
