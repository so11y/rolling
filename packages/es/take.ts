const take = <T = unknown>(v: Array<T>, n: number): Array<T> => {
	return v.slice(0, n);
};

export default take;
