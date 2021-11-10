import head from '../head';

test('test Array head', () => {
	const arr = [1, 2, 3];
	expect(head(arr)).toBe(1);
	expect(head([])).toBeUndefined();
});
