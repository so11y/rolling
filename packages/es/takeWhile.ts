type TTakeWhileCallback<T> = (item: T, index: number, arr: Array<T>) => boolean;

const takeWhile = <T = unknown>(
	v: Array<T>,
	callback: TTakeWhileCallback<T>
): Array<T> => {
	return v.filter((item, index) => callback(item, index, v));
};

export default takeWhile;
