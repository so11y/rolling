import isFunction from '../isFunction';

test('test isFunction', () => {
	const callback = jest.fn();

	expect(isFunction(callback)).toBeTruthy();
	expect(isFunction({})).toBeFalsy();
});
