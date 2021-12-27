import isString from '../isString';

test('test String isString', () => {
	expect(isString('77')).toBe(true);
	expect(isString(1)).toBe(false);
});
