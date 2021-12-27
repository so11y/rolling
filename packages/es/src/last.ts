const last = <T>(v: Array<T>): T => {
	return v[v.length - 1] ? v[v.length - 1] : undefined;
};

export default last;
