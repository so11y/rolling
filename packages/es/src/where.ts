import { TNoCare } from './share/types';

//这里的类型后面修改
const where = <T1, T2 = unknown>(
	it: boolean,
	c1: TNoCare<T1>,
	c2?: () => T2
): T1 | T2 => {
	return it ? c1() : c2 && c2();
};

export default where;
