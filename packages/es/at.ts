import where from './where';

const at = <T = unknown>(v: Array<T>, index: number) => {
	return where(
		index >= 0,
		() => v[index],
		() => {
			const gap = v.length - Math.abs(index);
			return v[v.length - gap];
		}
	);
};

export default at;
