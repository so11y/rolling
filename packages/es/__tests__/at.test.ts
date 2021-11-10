import at from '../at';

test('test Array at', () => {
	const arr = ['a', 'b', 'c', 'd'];
	expect(at(arr, 1)).toBe('b');
	expect(at(arr, -2)).toBe('c');
});
