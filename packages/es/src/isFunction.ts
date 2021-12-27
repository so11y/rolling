import { TNoCare } from './share/types';

const isFunction = (v: unknown): v is TNoCare => {
	return typeof v == 'function';
};

export default isFunction;
