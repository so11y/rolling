import { TNoCare } from './share/types';

const runners = (index: number, callback: TNoCare) => {
	new Array(index).fill(undefined).forEach(() => callback());
};

export default runners;
