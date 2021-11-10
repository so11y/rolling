import take from '../take';

test('test Array take', () => {
	const arr = [1, 2, 3];
	expect(take(arr, 2)).toEqual([1, 2]);
	expect(take(arr, 0)).toEqual([]);
});
