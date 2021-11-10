import { TNoCare } from '../share/types';

export const mockThis = {};

export const bindMockThis = <T extends object>(instance: T, callback: TNoCare) => {
	return (...arg: unknown[]) => {
		callback.call(instance, ...arg);
	};
};
