const eq = (first, second): boolean => {
	//可能会存在两个NAN的情况，NAN 不等于自身
	return first === second || (first !== first && second !== second);
};
export default eq;
