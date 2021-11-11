import { TNoCare } from './share/types';

//这里想不到什么法子能根据it来推断出是c1的结果还是c2的结果
const where = <T1, T2 = unknown>(
	it: boolean,
	c1: TNoCare<T1>,
	c2?: () => T2
): T1 | T2 => {
	return it ? c1() : c2 && c2();
};

export default where;
