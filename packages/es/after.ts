import { TNoCare } from './share/types';

const after = (count: number, callback: TNoCare) => {
	let _count = 0;
	return function (this: unknown) {
		if (--_count === count) callback.call(this);
	};
};

export default after;
