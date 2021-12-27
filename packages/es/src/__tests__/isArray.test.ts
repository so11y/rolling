import isArray from '../isArray';

test('test types isArray', () => {
	expect(isArray([])).toBeTruthy();
	expect(isArray(1)).toBeFalsy();
});
