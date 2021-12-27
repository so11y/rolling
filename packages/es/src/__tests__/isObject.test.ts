import isObject from '../isObject';

test('test String isString', () => {
	expect(isObject({})).toBe(true);
	expect(isObject(1)).toBe(false);
});
