import last from '../last';

test('test Array last', () => {
	const arr = [1, 2, 3];
	expect(last(arr)).toBe(3);
	expect(last([])).toBeUndefined();
});
