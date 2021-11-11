import isFunction from '../isFunction';

test('test isFunction', () => {
	const callback = jest.fn();
	expect(isFunction(callback)).toBeTruthy();
	expect(isFunction(1)).toBeFalsy();
	expect(isFunction({})).toBeFalsy();
	expect(isFunction(null)).toBeFalsy();
	expect(isFunction('x')).toBeFalsy();
});
